# 🌊 TOUSKI — Model 3000 🌊

> *"Tout ce qui reste"* — Québécois for "all that remains" 🫧

---

🐚 **TOUSKI** is a fluid weekly meal planner designed for the Canadian home chef. It manages the digital tide of your pantry, ensuring that "all that remains" is transformed into a week of nourishing meals. 

Built with the tactile, "lickable" aesthetics of a 1970s Hamilton Beach food processor: beige body, dark brown panel, orange liquid-glass buttons, and a brushed steel carousel.

![TOUSKI screenshot](./public/screenshot.png)

---

## 🌊 Features 🌊

- **🫧 Pantry-First Hydration** — Fluidly import items or upload your MyPantryTracker CSV export.
- **🐚 Touski Logic** — Leftovers are planned with intentionality, flowing into the next meal.
- **🫧 No Carb Repeats** — A clean current of variety; never pasta two nights in a row.
- **🐚 Vegetable Reminders** — Every supper calls out the depth of your greens.
- **🫧 Weekend Specials** — Saturday + Sunday get more ambitious, deep-sea culinary explorations.
- **🐚 Fluid Shopping List** — Only what you actually need to buy, nothing more.
- **🫧 Household Scaling** — 2 or 3 people (Sophie coming home toggle 🙂).
- **🐚 Liquid Glass UI** — SVG `feDisplacementMap` lensing on all controls for a truly "Aqua" feel.

---

## 🛠️ Setup & Flow 🛠️

### 1. 🌊 Clone the Current

```bash
git clone https://github.com/polerix/TOUSKI.git
cd TOUSKI
```

### 2. 🫧 Hydrate Dependencies

```bash
npm install
```

### 3. 🐚 API Spark

Copy `.env.example` to `.env` and add your Anthropic API key:

```bash
cp .env.example .env
```

Then edit `.env`:

```
VITE_ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

> **Note:** This app calls the Anthropic API directly from the browser. For local flow only. Do not deploy publicly without a backend proxy.

### 4. 🌊 Launch the Stream

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🐚 Usage 🐚

1. **Hydrate your pantry:** Click "Load my pantry" or paste your items.
2. **Set the Current:** Adjust household size and cooking style.
3. **Pick the Tide:** Select your week start date.
4. **Press the Orange Button:** Let the Touski logic flow.
5. **Carousel Navigation:** Scroll the brushed-steel carousel to see all 7 days.
6. **Shopping List:** Review your streamlined list before heading to the store.

---

## 🫧 Stack 🫧

- [React 18](https://react.dev) + [Vite](https://vite.dev)
- [Anthropic Claude API](https://docs.anthropic.com) — `claude-sonnet-4-20250514`
- **Aqua UI:** Pure CSS liquid glass (SVG `feDisplacementMap` + `backdrop-filter`)
- **Typography:** Playfair Display · Barlow Condensed · JetBrains Mono

---

## 🗺️ Roadmap 🗺️

- [ ] Persistent meal plan history (localStorage)
- [ ] Export week plan as PDF
- [ ] Direct MyPantryTracker API sync
- [ ] Recipe detail expansion (ingredients + steps)
- [ ] Nutritional awareness mode

---

🌊 *Be like water. Efficient, nourishing, and never wasteful.* 🌊
*Made with ❤️ in Moncton, NB*
