"use strict";

/*
  WEBWORKS STUDIO — WEEK 8
  Hill Country Trail Guide

  This file adds the two interactions requested for the project:
  1. An accessible difficulty disclosure
  2. Hike-planning form feedback after valid submission
*/


// ======================================================
// PART 1 — DIFFICULTY DISCLOSURE
// ======================================================

const difficultyButton = document.querySelector("#difficulty-toggle");
const difficultyPanel = document.querySelector("#difficulty-panel");

// Only add the interaction if both supplied elements are on the page.
if (difficultyButton && difficultyPanel) {
  difficultyButton.addEventListener("click", function () {
    // The hidden property tells us whether the panel is currently closed.
    const isClosed = difficultyPanel.hidden;

    // Show the panel when closed, or hide it when it is already open.
    difficultyPanel.hidden = !isClosed;

    // Keep the accessibility state in sync with what is visible.
    difficultyButton.setAttribute("aria-expanded", String(isClosed));
  });
}


// ======================================================
// PART 2 — HIKE PLANNING FORM
// ======================================================

const hikeForm = document.querySelector("#hike-form");
const formFeedback = document.querySelector("#form-feedback");

if (hikeForm && formFeedback) {
  // Clear an old success message if the browser finds a required field invalid.
  // The invalid event does not bubble, so capture it on the form.
  hikeForm.addEventListener("invalid", function () {
    formFeedback.textContent = "";
  }, true);

  hikeForm.addEventListener("submit", function (event) {
    // Keep native browser validation in place. A normal submit event only
    // happens after the browser's required-field checks pass, but this check
    // also protects the form if its validation behavior is changed later.
    if (!hikeForm.checkValidity()) {
      hikeForm.reportValidity();
      formFeedback.textContent = "";
      return;
    }

    // This is a classroom demo, so there is no server to receive the form.
    event.preventDefault();

    // Read the selected values from the form.
    const formData = new FormData(hikeForm);
    const trail = formData.get("trail");
    const experience = formData.get("experience");
    const hours = formData.get("hours");

    const timeLabel = hours === "2"
      ? "about 2 hours"
      : hours === "3"
        ? "about 3 hours"
        : "4 or more hours";

    // Give the user a clear summary instead of silently submitting the form.
    formFeedback.textContent =
      "Your hike plan is ready to review: " + trail +
      ", " + experience.toLowerCase() +
      " experience, and " + timeLabel +
      ". Before you leave, check the weather, trail conditions, and official park information.";
  });
}
