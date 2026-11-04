# Cedar & Stone Home Services — Week 5 Bootstrap

## Project
**Week 5 — Build with a System: Bootstrap**

This project is a responsive service page for Cedar & Stone Home Services. I used the supplied client content, images, and design reference, then built the page with Bootstrap 5.3.8.


## Bootstrap Setup
Bootstrap 5.3.8 CSS and the Bootstrap JavaScript bundle are connected in `index.html`. I kept the supplied CDN links and used the Bootstrap bundle for the responsive navigation menu.

## Required Bootstrap Work

### 1. Bootstrap Responsive Grid
**Used:** Bootstrap containers, rows, and columns throughout the page.

**Why:** The grid lets the content stack on smaller screens and sit in columns when there is more room. I used it for the hero, service cards, and other page sections.

### 2. Responsive Navbar
**Used:** A Bootstrap navbar with a collapsible menu, toggler button, and the required accessibility attributes.

**Why:** It keeps the navigation organized on desktop and makes it fit smaller screens without taking up too much space. The Bootstrap collapse behavior also avoids needing to write custom JavaScript for the menu.

### 3. Service Cards
**Used:** Three Bootstrap cards for the service offerings.

**Why:** Using the same card structure makes the services feel like one group. Each card includes its image, category, heading, description, and link, and the grid adjusts the number of columns based on screen width.

## Bootstrap Utilities and Custom CSS
I used Bootstrap utility classes for spacing, alignment, display, text, borders, and buttons. I kept `css/custom.css` focused on the Cedar & Stone colors, backgrounds, and a few details that were not covered by the Bootstrap defaults. I did not try to recreate Bootstrap styles in the custom stylesheet but I changed those parts to the deep green, cedar, and cream colors while keeping the Bootstrap layout and components.

## Bootstrap Decisions

### Decision 1
**Used:** Bootstrap's responsive grid (`container`, `row`, and `col` classes).  
**Why:** It gives the page a layout that adjusts to different screen sizes without needing a separate set of custom media-query layouts.

### Decision 2
**Used:** Bootstrap's responsive navbar and collapse component.  
**Why:** It provides a familiar mobile menu pattern and handles the show-and-hide behavior with the supplied Bootstrap JavaScript bundle.

### Decision 3
**Used:** Bootstrap cards for the three service offerings.  
**Why:** Cards give each service the same structure and help the three offerings line up consistently across desktop and mobile layouts.

## Bootstrap vs. Tailwind
Bootstrap felt more like putting the page together with ready-made components. I could use its grid, navbar, and cards instead of creating those patterns mostly from utility classes like I did with Tailwind in Week 4. Tailwind gave me more freedom to shape each part, but I had to make more of the component decisions myself. I would choose Bootstrap when a project needs common components and responsive behavior quickly. I would choose Tailwind when the design needs more custom styling and control.

## Live Site
https://github.com/RentieWill/WebworksStudiosCourseProjects/tree/main/week05-bootstrap/week05-bootstrap

## Final Reminder
The goal was to use Bootstrap where it made sense, keep the Cedar & Stone design direction, and add only the custom CSS needed for the brand. 
