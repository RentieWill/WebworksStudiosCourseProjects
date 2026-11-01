# Hill & Hollow Coffee — Week 4 Starter Project

## Scenario
WebWorks Studio has received an approved visual direction for a small promotional landing page.

Your job is to implement that direction using **Tailwind CSS utility classes**.

## Project Goal
This is my Week 4 responsive landing page for the Hill & Hollow Coffee client concept. I used the supplied starter files and design reference, and kept the original page content, links, semantic sections, and supplied images.


## Tailwind Decisions

### Decision 1
**Used:** `max-w-7xl`, `mx-auto`, and `px-4 sm:px-6 lg:px-8` on the main content containers.  
**Why:** These classes keep the content from stretching too wide on large screens and add breathing room on smaller screens.

### Decision 2
**Used:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for the coffee cards, with consistent `gap-5`, `rounded-xl`, `border`, `bg-white`, and `p-6` classes.  
**Why:** The cards stack on a phone, then use more columns as the screen gets wider. Reusing the same card classes gives it a cleaner look and  help them look like they belong together.

### Decision 3
**Used:** `hover:` and `focus-visible:` variants on navigation links, buttons, and card links.  
**Why:** The focus outline makes it easier to see where you are when moving through the page with a keyboard.

## Responsive and accessibility 
- I kept the heading structure, section IDs, navigation, and image alt text.
- Added a skip navigation link for keyboard users to jump straight into the main content.
- Used responsive Tailwind variants for the hero, product cards, story section, and footer which displays columns in different sizes.
- Check the page at narrow, medium, and wide browser widths and use Tab to test the visible focus styles.

## Live Site
**GitHub Pages URL:** 
https://rentiewill.github.io/WebworksStudiosCourseProjects/

