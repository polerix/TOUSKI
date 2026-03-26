# 🍲 touski — Model 3000

> *"Tout ce qui reste"* — Québécois for "all that remains"

A weekly meal planner that thinks like a Canadian home chef. Give it your pantry, it gives you a full week of meals — lunches, suppers, touski leftover plans, and a shopping list for what's missing.

Built with the aesthetics of a 1970s Hamilton Beach food processor: beige body, dark brown panel, orange liquid-glass buttons, brushed steel carousel.

![touski screenshot](./public/screenshot.png)

---

## Features

- **Pantry-first planning** — paste items or upload your MyPantryTracker CSV export
- **Touski logic** — leftovers are planned intentionally, never wasted
- **No carb repeats** — never pasta two nights in a row
- **Vegetable reminders** — every supper calls out the veg
- **Weekend specials** — Saturday + Sunday get more ambitious meals
- **Shopping list** — only what you actually need to buy
- **Household scaling** — 2 or 3 people (Sophie coming home toggle 🙂)
- **Liquid glass UI** — SVG `feDisplacementMap` lensing on all controls

---

## Setup

### 1. Clone

```bash
git clone https://github.com/yourusername/touski.git
cd touski
```

### 2. Install

```bash
npm install
```

### 3. API Key

Copy `.env.example` to `.env` and add your Anthropic API key:

```bash
cp .env.example .env
```

Then edit `.env`:

```
VITE_ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

Get your key at [console.anthropic.com](https://console.anthropic.com).

> **Note:** This app calls the Anthropic API directly from the browser. This is fine for local use but do not deploy publicly without a backend proxy — your API key would be exposed.

### 4. Run

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Usage

1. Click **"Load my pantry"** to use the built-in sample inventory, or paste your own items (one per line), or upload a CSV exported from MyPantryTracker
2. Set your household size and cooking style
3. Pick the week start date (defaults to current Monday)
4. Press the orange button
5. Scroll the brushed-steel carousel to see all 7 days
6. Check the shopping list for what to grab at the store

### MyPantryTracker CSV export

Export from [app.mypantrytracker.com](https://app.mypantrytracker.com) → Reports → Excel/CSV. The app reads the `name` column automatically.

---

## Customizing your pantry defaults

Edit `src/samplePantry.js` to replace the built-in sample with your own permanent pantry staples.

---

## Build for production

```bash
npm run build
```

Output is in `/dist`. Remember: add a backend proxy before any public deployment to protect your API key.

---

## Stack

- [React 18](https://react.dev) + [Vite](https://vite.dev)
- [Anthropic Claude API](https://docs.anthropic.com) — `claude-sonnet-4-20250514`
- Pure CSS liquid glass (SVG `feDisplacementMap` + `backdrop-filter`)
- Playfair Display · Barlow Condensed · JetBrains Mono

---

## Roadmap

- [ ] Persistent meal plan history (localStorage)
- [ ] Export week plan as PDF
- [ ] Direct MyPantryTracker API sync (when available)
- [ ] Recipe detail expansion (ingredients + steps)
- [ ] Nutritional awareness mode

---

*Made with ❤️ in Moncton, NB*
