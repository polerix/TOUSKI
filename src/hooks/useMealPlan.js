import { useState } from 'react'

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY

export function useMealPlan() {
  const [plan, setPlan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function generate({ pantryItems, household, cookingStyle, weekStart }) {
    setLoading(true)
    setError(null)

    const styleDesc = {
      casual: 'casual Québécois/Canadian home cooking with comfort food favourites',
      adventurous: 'adventurous multicultural cooking mixing Asian, French-Canadian and international dishes',
      quick: 'quick 30-minute weeknights with more elaborate weekend cooking',
    }[cookingStyle]

    const householdDesc =
      household === '2'
        ? 'two adult men, Paul-Éric and his son Charlo — meals for 2 with intentionally planned leftovers (called "Touski", short for "tout ce qui reste" — Québécois for "all that remains")'
        : 'three adults — Paul-Éric, his son Charlo, and Sophie (recently returned) — slightly larger portions with less leftover planning needed'

    const systemPrompt = `You are TOUSKI, an expert home chef meal planner. Think like a real Canadian home cook, not a recipe blogger.

HOUSEHOLD: ${householdDesc}
COOKING STYLE: ${styleDesc}

RULES (strict):
1. Every supper must include a STARCH (rice/pasta/potato/bread), a PROTEIN, and a VEGETABLE. Always name the vegetable — the user forgets them.
2. Never repeat the same starch base on consecutive supper days (no pasta Monday AND Tuesday).
3. TOUSKI PLANNING: If a supper produces leftovers, name what they become for the next day's lunch. Plan this intentionally.
4. Weekday lunches: simple — sandwiches, canned soup, ramen, touski leftovers. Dagwood sandwich = 2-3 lunches from one big prep.
5. Weekday suppers: 30-45 min max. Friday supper can be slightly special.
6. Saturday + Sunday suppers: more elaborate, worth the effort — roast, curry, fondue, slow cook, etc.
7. Use pantry items creatively. Note when fresh produce or proteins are needed.
8. French-Canadian items (pain de viande, Bovril, Bistro express, etc.) are entirely normal — embrace them.

PANTRY AVAILABLE: ${pantryItems.slice(0, 80).join(', ')}

Respond ONLY with a valid JSON object, no markdown, no explanation:
{
  "days": [
    {
      "day": "Monday",
      "lunch": { "name": "...", "desc": "brief 1-line description" },
      "supper": { "name": "...", "desc": "mention the starch, protein, and vegetable" },
      "touski": "what the leftovers become tomorrow, or null"
    }
  ],
  "shopping_list": [
    { "item": "...", "category": "produce|dairy|meat|pantry|other", "reason": "which meal needs it" }
  ],
  "chef_notes": "1-2 sentence practical tip for the week"
}`

    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2200,
          system: systemPrompt,
          messages: [
            {
              role: 'user',
              content: `Plan my week starting ${weekStart}. Make it feel genuinely home-cooked and practical.`,
            },
          ],
        }),
      })

      if (!resp.ok) {
        const err = await resp.json()
        throw new Error(err.error?.message || `API error ${resp.status}`)
      }

      const data = await resp.json()
      const raw = data.content?.map((b) => b.text || '').join('').trim()
      const clean = raw.replace(/```json|```/g, '').trim()
      const result = JSON.parse(clean)
      setPlan(result)
    } catch (e) {
      setError(e.message || 'Failed to generate meal plan')
    } finally {
      setLoading(false)
    }
  }

  return { plan, loading, error, generate }
}
