# Cedar & Stone Home Services — Week 5 Bootstrap Project

## Project
**Week 5 — Build with a System: Bootstrap**

This page is for Cedar & Stone Home Services in San Antonio. I used the supplied content and images and built the layout with Bootstrap 5.3.8.

## Bootstrap decisions

### 1. Framework Choice
**Used:** Bootstrap's responsive grid and navbar.  
**Why:** The container, row, and column classes made it quicker to put the hero and service sections into responsive layouts. The navbar also came with a working mobile collapse pattern, so I did not have to build that behavior from scratch.

### 2. Adaptation
**Used:** Custom brand colors, button colors, and warmer backgrounds in `css/custom.css`.  
**Why:** Bootstrap's default blue buttons and plain white look did not match Cedar & Stone. I changed those parts to the supplied deep green, cedar, and cream colors while keeping the Bootstrap layout and components.

### 3. Professional Judgment
**Used:** Bootstrap's navbar collapse and card components.  
**Why:** These are common interface patterns that Bootstrap already handles well. Keeping them means less custom code to maintain and gives the page familiar keyboard and responsive behavior.

## Bootstrap vs. Tailwind
Bootstrap felt more like putting the page together with ready-made pieces. I used its grid, navbar, and cards, then added a little CSS for the Cedar & Stone colors. With Tailwind in Week 4, I used utility classes for most of the styling and had to make more of the component design decisions myself. I would choose Bootstrap when a project needs standard components quickly. I might choose Tailwind when I want more control over a unique layout or design.

## Responsive and accessibility checks
- The hero and about sections stack on small screens and use columns on larger screens.
- Service cards stack on phones, then use two or three columns as space allows.
- The mobile navigation uses Bootstrap's collapse component and includes its accessibility attributes.
- Images have descriptive alternative text, the page uses semantic sections, and keyboard focus is visible.

## Live Site
Add the published GitHub Pages URL here after pushing the folder. Example:
`https://rentiewill.github.io/webworks-studio/week05-bootstrap/`

## Local preview
Open `index.html` in a browser or use the Live Server extension in Visual Studio Code. Bootstrap is loaded from its supplied CDN links, so an internet connection is needed for the framework styles and navbar behavior.
