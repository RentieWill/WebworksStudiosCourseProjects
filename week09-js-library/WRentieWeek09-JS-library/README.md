# Week 9: Work Smarter — JavaScript Libraries & Components

## Project Overview

**Role:** Junior Front-End Developer  
**Assigned Library:** Splide  
**Project:** Responsive Featured-Projects Carousel

Briefly describe the feature you integrated.

[Write 2–3 sentences here.]
I changed the featured project cards from a regular grid into a carousel using Splide. The same six Northline Creative projects and their descriptions are still here. Visitors can move through the cards with the arrows or the pagination dots.
---

# Library Evaluation

Review the official Splide documentation before completing this section.

## 1. Purpose

**What problem does Splide solve?**

Splide is a JavaScript slider/carousel library. It handles the slide movement, arrows, pagination, and responsive behavior so I do not have to write all of that interaction myself.

## 2. Dependencies

**Does Splide require another JavaScript library?**


Splide does not require jQuery or another JavaScript framework. This project loads the Splide CSS and JavaScript from jsDelivr.

## 3. Accessibility

**What accessibility support does Splide document?**

Splide supports accessible carousel markup and adds useful attributes to slides and controls. The carousel has a descriptive accessible label. I kept the arrows and pagination enabled, left focus indicators visible, and did not turn on autoplay. Splide also supports keyboard interaction for its pagination.

## 4. Configuration

**What kinds of behavior can developers change through Splide options?**

Splide options let a developer set things like the number of slides shown, slide spacing, movement, arrows, pagination, keyboard behavior, autoplay, and breakpoints. I used breakpoints to show fewer cards as the screen gets smaller.

## 5. Project Fit

**Why is a carousel library reasonable for this supplied client feature?**

The client already has a small set of featured projects. A carousel lets visitors browse them without making the page feel like a long list. I kept the design and project details instead of changing the whole page.

---

# Dependency Record

**Library:** Splide  
**Version:** 4.1.4  
**Official Documentation:** https://splidejs.com/  
**Loading Method:** jsDelivr CDN

Briefly explain where the library CSS and JavaScript are loaded in your project.

The stylesheet is linked in the document head. The Splide JavaScript file is loaded near the bottom of the page before `js/script.js`, so the Splide class is available when my code runs.


---

# Integration Decisions

Document approximately three meaningful decisions.

## Decision 1

**Decision:** I changed the project collection to a `section.splide` with a `splide__track`, `splide__list`, and one `splide__slide` for each project.

**Documentation Used:** Splide Getting Started — HTML structure: https://splidejs.com/guides/getting-started/

**Reason:** This is the structure Splide looks for when it mounts. I kept the original card text and headings inside each slide.

### Decision 2 — Responsive slide count

**Decision:** The carousel shows three cards on wider screens, two below 850px, and one below 620px.

**Documentation Used:** Splide Options — `perPage` and `breakpoints`: https://splidejs.com/guides/options/

**Reason:** Three cards fit the desktop content area, while fewer cards are easier to read on tablets and phones.

### Decision 3 — Controls and accessibility

**Decision:** I kept arrows and pagination on, used `keyboard: "focused"`, added an accessible label, and set `autoplay: false`.

**Documentation Used:** Splide Accessibility: https://splidejs.com/guides/accessibility/ and Splide Options: https://splidejs.com/guides/options/

**Reason:** Visitors can choose when to move through the work. The controls are available without relying on automatic movement.
---

# Live Site

**GitHub Pages URL:** [Paste your live Week 9 URL here]

---

# Testing Notes

- [ ] Splide CSS loads in the browser.
- [ ] Splide JavaScript loads and the carousel mounts.
- [ ] Previous and next arrows work.
- [ ] Pagination dots move to the selected page.
- [ ] Autoplay is disabled.
- [ ] Wide layout checked (three cards).
- [ ] Medium layout checked (two cards).
- [ ] Narrow layout checked (one card).
- [ ] Keyboard navigation and visible focus checked.
- [ ] Browser console checked for errors.
- [ ] Published GitHub Pages version tested.

---

# Final Handoff Check

- [ ] I used Visual Studio Code.
- [ ] I used the instructor-approved Splide version.
- [ ] My HTML follows Splide's required structure.
- [ ] My project-specific JavaScript is in `js/script.js`.
- [ ] My responsive settings are intentional.
- [ ] I did not enable autoplay.
- [ ] I completed the library evaluation.
- [ ] I documented the dependency.
- [ ] I documented approximately three integration decisions.
- [ ] I committed and pushed the completed project.
- [ ] My live site works.
