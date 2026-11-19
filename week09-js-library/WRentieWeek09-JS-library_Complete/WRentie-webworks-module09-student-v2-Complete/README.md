# WebWorks Studio — Module 9 Student Starter
## Mission City Makers Market

You are the **Junior Front-End Developer** assigned to improve a fictional client page using two different professional tools:

1. **Alpine.js** — create one lightweight custom interaction.
2. **Preline UI** — choose and adapt one reusable component.

The goal is not to add as many effects as possible. The goal is to choose the right tool for the right job.

## Start Here

Open this entire folder in Visual Studio Code.

In the VS Code terminal, run:

```bash
npm install
npm run dev
```

Keep `npm run dev` running while you work.

The `dev` command:

- copies Preline's browser JavaScript to `js/vendor/preline.js`;
- starts Tailwind watch mode;
- rebuilds `css/output.css` when your HTML changes.

Preview `index.html` with Live Server.

## What Is Already Set Up?

- Tailwind CSS 4
- Preline UI
- Tailwind Forms
- Alpine.js through the approved CDN
- responsive client page
- accessible baseline HTML
- client content and starter images
- clearly marked Alpine and Preline work areas
- Mac/Windows-friendly npm scripts

### Versions

- Tailwind CSS 4.3.3
- Tailwind CLI 4.3.3
- Preline UI 4.2.0
- Tailwind Forms 0.5.11
- Alpine.js CDN 3.17.1

Do not change versions unless your instructor tells you to.

# Requirement 1 — Alpine-Powered Exploration Tool

Use Alpine to help a visitor explore, narrow, compare, select, or better understand the supplied maker content.

Required:

- `x-data`
- at least one user event
- at least one additional reactive directive
- visible, understandable interface response
- semantic, keyboard-accessible controls

Search `index.html` for:

`TODO: REQUIRED ALPINE INTERACTION`

Do not copy the classroom Alpine playground unchanged.

# Requirement 2 — Adapted Preline Component

Choose one Preline component that improves the supplied client page.

Possible choices:

- accordion
- tabs
- modal
- dropdown
- alert
- another instructor-approved component

Required:

- solve a real client/user need
- use official Preline structure
- retain meaningful client content
- adapt styling with Tailwind utilities
- remain keyboard usable
- preserve accessibility behavior
- work at narrow, medium, and wide widths

Search `index.html` for:

`TODO: REQUIRED PRELINE COMPONENT`

# Scope Rule

Your Alpine interaction and Preline component must solve **different problems**.

# Why `js/vendor/preline.js` Exists

`node_modules` should not be committed or relied on by GitHub Pages.

Running:

```bash
npm run dev
```

or:

```bash
npm run build
```

copies Preline from:

```text
node_modules/preline/dist/preline.js
```

to:

```text
js/vendor/preline.js
```

Commit the copied runtime with your finished project.

# Before Pushing to GitHub

Run:

```bash
npm run build
```

Then confirm these contain real generated code:

```text
css/output.css
js/vendor/preline.js
```

Commit both files.

Do not commit `node_modules/`.

# Required README Documentation

Replace each TODO before submitting.

## Project Summary

I added a maker filter so visitors can narrow the four featured makers by craft or search for a maker name. I also changed the visitor questions into a Preline accordion, so the answers do not all take up space at once. I kept the original market information and colors.

## Alpine Decision

**User/client need:**  
There are a few different kinds of makers at the market. A visitor might only be interested in ceramics or prints, so I added filters to make the list easier to explore.

**Alpine directives used:**  
I used `x-data` for the selected category and search text, `@click` to change the category, `x-model.trim` for the search field, `x-show` to show matching maker cards, `:class` to show which filter is selected, and `:aria-pressed` to communicate the selected state.

**Why Alpine was appropriate:**  
This is a small interaction on one page. Alpine handles the changing filter state without needing a larger framework or a separate JavaScript filtering system.

## Preline Decision

**Preline component selected:**  
Accordion.


**Problem it solves:**  
TODThe visitor questions are useful, but showing every answer expanded makes the section longer than it needs to be. The accordion lets someone open the question they want to read.O

**How you adapted it:**  
I used Preline's `hs-accordion-group`, `hs-accordion`, `hs-accordion-toggle`, and `hs-accordion-content` structure. I kept all four original questions and answers, and changed the Tailwind classes to match the dark teal, cream, and green colors already on the page. The first answer starts open.

## Accessibility Notes

1. The maker filters are real buttons, the search field has a visible label, and the selected filter uses `aria-pressed`. The status text tells visitors when filters are active.
2. The FAQ uses buttons with `aria-expanded` and `aria-controls`, and the answer panels have region labels. I kept visible focus styles on the controls.
3. The page already has a skip link, semantic headings, and alternative text for the maker images.

## Testing Notes

**Narrow viewport:** The cards stack in one column and the filter buttons can wrap instead of running off the screen.

**Medium viewport:** The maker cards use two columns and the FAQ stays in a single readable column.

**Wide viewport:** The maker cards use four columns and the rest of the page keeps its two-column sections.

**Keyboard testing:** The filter controls, search field, navigation links, and FAQ buttons should be reachable with Tab. Enter or Space activates buttons and accordion questions. Visible focus styling is included. I still need to run this full keyboard test in the browser.

**Browser console:** I still need to run the page in a browser and confirm there are no unresolved console errors. The build command should be run after `npm install`.

## Dependencies

**Alpine.js 3.17.1 — how used:** Loaded from the approved CDN script in `index.html`. It manages the maker filter and search state.

**Preline UI 4.2.0 — how used:** Installed through the supplied npm dependency. Its browser runtime is copied to `js/vendor/preline.js` by the supplied npm script and powers the FAQ accordion.

**Tailwind CSS 4.3.3 — how used:** Used for the page layout, responsive breakpoints, spacing, colors, and component styling.

## Official Documentation Used

- Alpine.js start here: https://alpinejs.dev/start-here
- Alpine.js directives: https://alpinejs.dev/directives/
- Preline UI documentation: https://preline.co/docs/
- Preline accordion: https://preline.co/docs/accordion.html
- Preline accessibility: https://preline.co/docs/accessibility.html

# Official References

- https://alpinejs.dev/start-here
- https://alpinejs.dev/directives/
- https://preline.co/docs/
- https://preline.co/docs/components.html
- https://preline.co/docs/accessibility.html

# Final Check

- [ ] `npm run build` completes.
- [ ] Tailwind styles load.
- [ ] Alpine interaction works.
- [ ] Preline component works.
- [ ] They solve different needs.
- [ ] Keyboard testing works.
- [ ] Responsive testing is complete.
- [ ] Console has no unresolved errors.
- [ ] README is complete.
- [ ] `css/output.css` is committed.
- [ ] `js/vendor/preline.js` is committed.
- [ ] `node_modules` is not committed.
- [ ] Work is pushed to GitHub.
completed

