# Week 8 — JavaScript Interaction Handoff
## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors
1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection
I used `document.querySelector()` to select `#difficulty-toggle` and `#difficulty-panel` because the button controls that panel. I also selected `#hike-form` and `#form-feedback` so the script can listen for the form submission and show a message in the area already provided by the HTML. I kept the supplied HTML and CSS in place.

### Decision 2 — Event Handling
I used a `click` event on the difficulty button because it is a real button and already works with Enter and Space from the keyboard. For the planning form, I used the form's `submit` event instead of listening only for a click on the submit button. I also listened for `invalid` in the capture phase to clear an old success message if the browser finds a required field that is not valid.

### Decision 3 — State / DOM Update
The disclosure checks the panel's `hidden` property. It changes that property to show or hide the explanation, then updates the button's `aria-expanded` attribute to the same open/closed state. When the form is valid, the script stops the classroom form from navigating away, reads the selected trail, experience level, and available time with `FormData`, and writes a short plan summary into `#form-feedback`.

### Decision 4 — Accessibility
I kept the supplied semantic button, form controls, labels, required attributes, and live feedback region. The button remains keyboard-operable because it is a native HTML button. Its `aria-expanded` value is set to `true` when the panel is shown and `false` when it is hidden. I did not add `novalidate` or replace the browser's built-in required-field validation. The feedback is placed in the supplied `role="status"` / `aria-live="polite"` region.

---

## Testing Notes

### Difficulty Disclosure
- Mouse: The click listener is in place to open and close the panel. Verified both directions in the browser.
- Keyboard: The supplied native button can be reached with Tab and activated with Enter or Space. verified in the browser.
- `aria-expanded`: The script sets it to `true` when the panel is visible and `false` when it is hidden. Checked the button in Developer Tools while testing.
- Console errors: The JavaScript syntax check passed with Node.js. Also checked the browser Console after opening the page.

### Planning Form
- Empty/invalid submission: The required fields and checkbox remain native HTML validation controls. The browser should block submission and show its validation prompt until the required information is supplied.
- Valid submission: The script prevents a real page submission and displays a summary of the selected trail, experience level, and available time.
- Keyboard: The form can be completed with Tab and the native controls; submit with Enter when needed. Verified in the browser.
- Console errors: The JavaScript syntax check passed with Node.js. 
## Live Site
[](https://github.com/RentieWill/WebworksStudiosCourseProjects/tree/main/week08-hill-country-trail-guide)
