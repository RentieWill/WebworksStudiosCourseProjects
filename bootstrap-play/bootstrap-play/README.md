# bootstrap-play

Mini assignment for WebWorks Studio: a Cedar & Stone Home Services page made with Bootstrap 5.3.3.

## Rows that work differently
1. **Service cards** - `row-cols-1 row-cols-md-2 row-cols-lg-3` so cards are equal width and the count changes by screen size.
2. **About + sidebar** - `col-md-8` and `col-md-4`, uneven columns that stack on phones.
3. **Testimonial carousel** - `justify-content-center` with a narrow column to center it.
4. **Stats row** - `offset-md-1` and `order-*` classes to move things around on mobile vs desktop.
5. **Form** - nested columns with `g-3` gutters (two fields side by side on desktop).

## Components used
Navbar, alert, cards, badges, progress bars, list group, carousel, accordion, form + validation, buttons.

## What I learned
- The 12 column grid is way less scary than it looked. Once you get that columns add up to 12 it clicks.
- `h-100` on cards fixes uneven card heights, which I would have spent an hour trying to do myself.
- Bootstrap's JS bundle is needed or the modal/carousel/accordion/navbar menu just don't work. I forgot it at first.
- I still needed a little custom CSS for colors since Bootstrap doesn't come in "cedar brown".
- Things I checked: resized the browser to phone, tablet, and desktop widths and the layout changed the way I expected. Menu collapses into the hamburger on small screens.

## Live Link