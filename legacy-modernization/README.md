# Southtown Plant Co. — Legacy Website Modernization

## Sprint 2: Responsive Overhaul

This is the next step in the same legacy-modernization project from Week 2. I kept the existing page content and semantic sections, then updated the CSS so the page can adjust to different screen sizes instead of depending on a fixed 760px-wide layout.

## Responsive decisions (Problems,Solutions, Why)

1. **Problem:** The page wrapper had a fixed width, so a smaller screen could have horizontal overflow and a wide screen had too much unused space. **Solution:** The wrapper now uses a fluid width with a maximum width, and the main spacing uses flexible values. **Why:** The page can shrink to fit the screen while still staying readable on larger displays.

2. **Problem:** The plant cards needed to fit different available widths without forcing the same number of columns everywhere. **Solution:** I used CSS Grid with `auto-fit` and `minmax()` for the plant cards. **Why:** Cards can wrap into fewer columns as the space gets tighter and add columns when there is room.

3. **Problem:** The hero and the quick-links/details area become cramped when their side-by-side content no longer fits. **Solution:** I used Grid for those content relationships and added a breakpoint to stack them. I also used Flexbox for the header, navigation links, and the about image/text row. **Why:** Grid handles the larger page relationships, while Flexbox keeps items aligned and lets navigation wrap without needing a JavaScript menu.

## Layout choices

- **Grid:** hero, plant cards, quick-links/details columns, and visit information.
- **Flexbox:** header, main navigation, footer navigation, and the about image/text row.
- **Media:** images and video/iframe elements are limited to their container width; images keep their aspect ratio unless a cropped presentation is needed.
- **Breakpoints:** `46rem` stacks the hero and secondary columns when they become cramped. `30rem` tightens spacing and stacks visit information and the about row on very narrow screens. These values should be checked by resizing the browser, including between the breakpoints.

## Live site

https://rentiewill.github.io/webworks-studio/legacy-modernization/


## Project link for Canvas:
https://github.com/RentieWill/webworks-studio/tree/main/legacy-modernization
