# Week 6 — UX Evaluation Brief
## Hill Country Trail Guide

**Primary User:** Maya Torres  
**Primary Task:** Choose a beginner-appropriate Saturday hike that can be completed in about three hours or less.

---

## 1. Task Walkthrough

Maya would probably start by scanning the home page on her phone because she usually researches hikes the night before. She would look for a way to narrow the trail list to beginner-friendly options, then compare the distance, elevation, difficulty, and estimated time for the trails. She would also want to check practical details such as parking, fees, access rules, and whether dogs are allowed before sharing a choice with her companion.

On the larger-screen layout, the three featured trail cards are visible side by side, so Maya can quickly compare their names, difficulty labels, distances, elevation figures, and short descriptions. However, none of the cards shows an estimated hiking time. The page also does not explain what “Easy” means. The filter choices appear to be controls, but they do not actually narrow the list when selected. Maya would have to open or read the separate detail sections to find more information, and even those sections leave some practical questions unanswered.

On a phone-sized viewport, the navigation wraps and the trail cards change to a single-column layout. The page remains readable, but Maya has to scroll through the cards one at a time to compare them. The same missing time estimate, unexplained difficulty label, and non-working filter choices remain problems on mobile. Based on the supplied responsive CSS, the layout adapts to a narrow screen, but the task still takes extra effort and leaves Maya uncertain whether any trail fits her three-hour limit.

**Task outcome:** Maya cannot confidently choose a trail for this task from the information and interactions provided. She can identify a possible candidate, but she cannot verify that it is beginner-appropriate and can be completed in about three hours or less.

---

## 2. Five UX Findings

### Finding 1 — Trail filters look interactive but do not work

**Observation:**  
The trail-filter options look like buttons or selectable chips, but they are only visual text elements. There is no actual filtering interaction.

**Evidence:**  
In the “Find a trail” section, “Easy,” “Moderate,” “Hard,” “Under 5 miles,” and “Dog friendly” are displayed as `.fake-control` spans. The HTML does not give them button behavior or connect them to a filtering function. The note below them says, “Choose a category above to narrow the list,” which creates an expectation that selecting a category will change the results.

**User Impact:**  
Maya would likely try to select “Easy” or “Under 5 miles” to narrow her choices. Since nothing happens, she may think she did something wrong or waste time trying the options again. This makes it harder to quickly find a suitable beginner trail.

**Principle:**  
Match between the system and the real world; clear affordances and feedback; consistency between an element's appearance and its behavior.

**Priority:** High

**Recommendation:**  
Make the filtering options function as real controls, and provide clear feedback when a filter is selected and when the trail results change.

### Finding 2 — Estimated hiking time is missing

**Observation:**  
The interface provides trail distance and elevation, but it does not provide an estimated completion time.

**Evidence:**  
The featured cards show measurements such as “4.8 mi · 620 ft,” “3.2 mi · 840 ft,” and “6.1 mi · 410 ft.” The detail sections also do not give an estimated duration. The primary task specifically asks Maya to choose a hike she can finish in about three hours or less.

**User Impact:**  
Maya is a beginner and may not know how to turn mileage and elevation gain into a realistic time estimate. A shorter trail with a steep climb may take her longer than expected. Without a time estimate, she cannot confidently tell whether a trail fits her available Saturday time.

**Principle:**  
Recognition rather than recall; visibility of important information; support for users' decision-making.

**Priority:** High

**Recommendation:**  
Provide a realistic estimated completion time for each trail in a place where visitors can easily find and compare it.

### Finding 3 — Difficulty labels do not explain what “Easy” means

**Observation:**  
The interface uses simple difficulty labels, but it does not explain the experience or trail conditions behind those labels. Some of the descriptions may make an “Easy” trail sound more challenging than the label suggests.

**Evidence:**  
Juniper Creek Loop is labeled “Easy,” but its description mentions rocky creek crossings and limestone shelves. Its detail section also warns hikers to use caution after rain and notes that some portions have limited shade. No plain-language explanation describes what a beginner should expect from an “Easy” classification. Painted Bluff is labeled “Moderate,” but its description mentions exposed sections and a climb without explaining how those conditions compare with the other trails.

**User Impact:**  
Maya has limited experience with traditional hiking trails and may not know whether rocky crossings or exposed sections are comfortable for her. She could choose a trail based on the “Easy” label and then feel surprised or unsafe when she encounters conditions she did not expect.

**Principle:**  
Plain language; match between system information and user expectations; informed decision-making.

**Priority:** High

**Recommendation:**  
Explain difficulty levels in plain language and describe important trail conditions so beginners can understand what each rating means before choosing.

### Finding 4 — Important planning details are incomplete or difficult to confirm

**Observation:**  
The trail information does not give Maya a clear, complete picture of the practical requirements for visiting a trail.

**Evidence:**  
The Juniper Creek Loop details say that dogs “may be allowed depending on current park rules” and that fees and gate hours are “subject to change.” The page does not provide a direct source or clear next step for confirming those rules. The Painted Bluff and Live Oak Ridge detail sections also provide limited information about parking, fees, access restrictions, and other visit requirements. The general “Before you go” section only says to check current park information.

**User Impact:**  
Maya wants to research the hike the night before and feel prepared. Vague or missing information could make her unsure whether she can bring a dog, where to park, whether she needs to pay a fee, or whether the trail will be accessible when she arrives. She may have to leave the site and search elsewhere before making a decision.

**Principle:**  
Completeness of information; error prevention; user control and confidence.

**Priority:** Medium

**Recommendation:**  
Make essential visit-planning information easier to find and provide clear directions to current, authoritative park information when details can change.

### Finding 5 — Comparing trails takes more effort on a phone

**Observation:**  
The mobile layout places each trail card in a single vertical column, so comparing several options requires scrolling back and forth.

**Evidence:**  
The CSS media query at widths of 760 pixels or less changes `.trail-grid` from three columns to one column. The trail cards remain in the same order, with each card's information separated vertically. Maya's phone is her primary research device, and the page does not provide a compact comparison view or a way to keep key details visible together.

**User Impact:**  
Maya compares several trails rather than choosing the first one she sees. On a phone, she must remember details from one card while scrolling to the next. This adds effort and makes it easier to lose track of which trail best fits her experience and time limit.

**Principle:**  
Reduce memory load; responsive usability; support comparison and recognition.

**Priority:** Medium

**Recommendation:**  
Make the most important trail information easy to compare on small screens without requiring visitors to remember details from cards they have already passed.

---

## 3. Top Three Priorities

1. **Make the trail filters work (Finding 1 — High).**  
   Maya needs to narrow the list to beginner-friendly options. The current controls promise that ability but do not respond. Fixing this would remove a major point of confusion at the start of her task.

2. **Show estimated hiking time (Finding 2 — High).**  
   Her main requirement is a hike that takes about three hours or less. Distance and elevation alone do not tell a beginner how long a route may take. Without duration information, she cannot verify that a trail fits her available time.

3. **Explain trail difficulty in plain language (Finding 3 — High).**  
   Maya wants a scenic hike without accidentally choosing something beyond her comfort level. The “Easy” and “Moderate” labels are not enough when the descriptions mention rocky crossings, climbing, and exposed areas. She needs to understand what those conditions mean before committing to a trail.

These three issues most directly prevent Maya from finding, evaluating, and confidently selecting a trail for her Saturday outing. The remaining findings about visit-planning details and mobile comparison are also important, but the top three are the biggest barriers to completing her primary task.

---

## Week 7 Handoff

For Week 7, the design work should focus first on helping visitors narrow the trail list, understanding how long a hike may take, and judge difficulty using clear language. The design should also keep Maya's need to compare options on a phone in mind. These are design requirements for the next unit, not solutions created in this evaluation.

