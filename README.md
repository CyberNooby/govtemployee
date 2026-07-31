# Sarkari Forms Hub

A free, client-side generator for the leave, service, pension, and income-tax paperwork that Indian government employees file every day — covering **all 28 states, all 8 Union Territories, and the Central Government** (37 governments in total).

Pick your government from an interactive map of India, fill in your profile once, and generate a correctly formatted, print-ready application — Earned Leave, Child Care Leave, GPF advances, Family Pension claims, and dozens more, each cited against the actual rule or Government Order that governs it.

**No backend. No accounts. No data ever leaves your browser.**

**🔗 Live app: [cybernooby.github.io/officialapplications](https://cybernooby.github.io/officialapplications)**

---

## What it does

- **Interactive India map home screen** — hover a state for a quick stat card, click to open its module. Union Territories and Central Government are included alongside the 28 states.
- **Per-government application library** — every live government ships its own set of leave/service/pension application types (Earned Leave, Half Pay Leave, Maternity/Paternity/Child Care Leave, Casual Leave, GPF & advances, Group/Life Insurance, Family Pension, and more), grouped into consistent categories and each one citing the specific Rule, Government Order, or Office Memorandum it's based on.
- **One profile, every form** — your name, employee ID, designation, office, and pay are entered once per government and reused across every application type you generate.
- **Digital signature capture** — upload a photo/scan of your signature; the tool auto-isolates it against a transparent background (client-side canvas processing, nothing uploaded) with scale/rotate controls, so it drops cleanly onto the printed page.
- **Print-ready output** — every application renders as a properly formatted, paginated document ready for `Ctrl+P` → PDF or straight to a printer, matching how these are actually submitted.
- **National tools** — an Income Tax Statement Generator (Old vs New regime comparison, month-by-month pay register, HRA/80C/80D) available from every government's sidebar, since the IT Act doesn't vary by state.
- **Research-cited data** — every state/UT's data file documents its own sourcing: which figures come from a primary Rules PDF vs. a secondary source, which conflicting figures were found and how they were resolved, and what was deliberately left out because it couldn't be confirmed. See any file in `assets/js/data/` for the header comment.

## Coverage

All **28 states**, all **8 Union Territories**, and the **Central Government** are live:

Andhra Pradesh · Arunachal Pradesh · Assam · Bihar · Chhattisgarh · Goa · Gujarat · Haryana · Himachal Pradesh · Jharkhand · Karnataka · Kerala · Madhya Pradesh · Maharashtra · Manipur · Meghalaya · Mizoram · Nagaland · Odisha · Punjab · Rajasthan · Sikkim · Tamil Nadu · Telangana · Tripura · Uttar Pradesh · Uttarakhand · West Bengal · Andaman & Nicobar Islands · Chandigarh · Dadra & Nagar Haveli and Daman & Diu · Delhi (NCT) · Jammu & Kashmir · Ladakh · Lakshadweep · Puducherry · Central Government

## Tech stack

Deliberately boring, on purpose: **plain HTML, CSS, and vanilla JavaScript — no framework, no bundler, no build step, no npm install.** One shared rendering engine (`assets/js/state-tool-engine.js` + `assets/js/engine-common.js`) drives every government's forms from a declarative per-government data file (`assets/js/data/<government>.js`); adding a new government means writing a data file, not new UI code.

## Running locally

Since there's no build step, any static file server works:

```bash
git clone <this-repo-url>
cd Govt_Forms
python -m http.server 8934
# open http://localhost:8934 in a browser
```

(Opening `index.html` directly via `file://` also mostly works, but a local server avoids browser restrictions on module-style script loading and is what the test suite expects.)

## Project structure

```
index.html                     entry point — dashboard shell, per-tool <template> markup, nav/switcher/map logic
assets/
  css/
    shared-ui.css               dashboard chrome, forms, cards, the India map
    shared-document.css         print/PDF page styling
  js/
    engine-common.js            shared modal, signature-capture, and print-preview mechanics used by every tool
    state-tool-engine.js        the one engine that renders every government's forms from its data file
    data/
      registry.js                single source of truth for which governments are live
      india-map.js                state/UT SVG path data (@svg-maps/india)
      <government>.js             one file per government — see kerala.js for the fullest schema example
    tools/
      income-tax.js               the Income Tax Statement Generator (a national tool, not tied to any government)
tests/
  smoke_test.py                  Playwright end-to-end smoke test — drives every live tool, asserts zero console errors
```

## Adding a new government

1. Write `assets/js/data/<key>.js` — see `kerala.js` for the fullest schema reference and any recently-added state (e.g. `sikkim.js`, `tripura.js`) for the research-citation discipline this project follows.
2. Add one `{ key, name, region, live: true }` entry to `assets/js/data/registry.js`.
3. Add a `<script src="assets/js/data/<key>.js">` tag in `index.html`.
4. If the government is on the India map, add its `@svg-maps/india` code to `MAP_CODE_TO_KEY` in `index.html`.
5. Add one entry to `STATE_TOOLS` in `tests/smoke_test.py` and re-run the smoke test.

Nothing else needs to change — the shared engine renders the new government automatically.

## Testing

A Playwright-driven smoke test exercises every live government and national tool end-to-end (open a form → fill required fields → preview → print view → close) and asserts zero browser console errors:

```bash
pip install playwright
playwright install chromium
python -m http.server 8934 &
python tests/smoke_test.py
```

## Privacy

This app has no backend and no analytics. Everything — your profile, your typed answers, your uploaded signature — stays in your browser's memory and (for a small "documents generated" activity counter only) `localStorage` on your own device. Nothing is ever uploaded, transmitted, or stored anywhere else.

## Disclaimer

These tools draft applications and statements in standard government formats so you have a clean, correctly-cited starting point — **they are not official government products and are not legal or tax advice.** Rules are amended from time to time; confirm current requirements with your own office (or a tax professional, for the Income Tax tool) before submission.

## Credits

- State/UT map outlines: [`@svg-maps/india`](https://github.com/VictorCazanave/svg-maps/tree/master/packages/india) by Victor Cazanave, licensed CC BY 4.0.
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces), [Public Sans](https://fonts.google.com/specimen/Public+Sans), and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) via Google Fonts.
