# Week 7  Wireframes & Prototype Handoff
## Hill Country Trail Guide

**Primary user:** Maya Torres  
**Primary task:** Choose a beginner-appropriate Saturday hike that can be completed in about three hours or less.

---

## 1. Project Overview

For this project, I planned an easier way for Maya to compare trails before she chooses one. Maya is new to hiking, usually looks things up on her phone, and wants a scenic trail that will not take more than about three hours. The interface puts the most useful comparison information close together and explains hiking difficulty in regular language.


---

## 2. Three Design Requirements

### Requirement 1
**Week 6 problem:** Difficulty labels do not explain what a beginner or easy rating means, so Maya may not know whether a trail is actually manageable.

**Design requirement:** Trail difficulty information must explain the expected path conditions and effort in plain language.

**How this helps Maya:** Maya is still learning hiking terms. A short explanation helps her judge whether a trail fits her experience instead of guessing from a label.

### Requirement 2
**Week 6 problem:** Trail filters appear interactive, but the controls do not help users select  the available choices.

**Design requirement:** Maya must be able to narrow trail choices using clear criteria that match her experience and available time.

**How this helps Maya:** She can focus on beginner-friendly trails that fit her Saturday schedule instead of scanning every option.

### Requirement 3
**Week 6 problem:** Important comparison details such as estimated time, distance, and elevation are difficult to scan together.

**Design requirement:** Estimated time, distance, and elevation information must be easy to identify while Maya compares trails.

**How this helps Maya:** She can compare the practical details without opening m pages or reading long descriptions.

---

## 3. Figma Prototype Link

**Figma file:** [(https://www.figma.com/design/6YajeyOuNN0It3OluR5Cla/HillCountry?node-id=2-3&t=9AhRSryHey5X0emR-1)]  

**Prototype link:** [https://www.figma.com/proto/6YajeyOuNN0It3OluR5Cla/HillCountry?node-id=2-3&viewport=34%2C169%2C0.25&t=03eHTMSK6qFPqI4F-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A91&page-id=0%3A1]

---

## 4. Required Wireframe Exports

1. `wireframes/desktop-primary.png` - desktop trail comparison experience.
2. `wireframes/mobile-primary.png` - phone layout with filters and stacked trail cards.
3. `wireframes/task-state-01.png` - difficulty explanation before it is opened.
4. `wireframes/task-state-02.png` - difficulty explanation after it is opened.

---

## 5. Prototype Flow

**Starting point:** Desktop/Task State 1, the Cibolo Nature Loop detail view with the difficulty explanation closed.

**User action:** Maya selects the Begginer/Explain difficulty control.

**System/interface response:** The interface reveals a short explanation of what beginner difficulty means, including path conditions and the level of effort she can expect.

**End state:** Task State 2, where the explanation is visible. Maya can read the information and make a selected choice.


---

## 6. Design Rationale

### Decision 1  Put trail facts together
**Problem:** Maya has to compare more than a trail name or difficulty label. Time, distance, and climbing all affect whether a hike fits her plan.

**Design response:** The trail cards show estimated time, distance, and elevation/climb in one consistent row.

**Why:** Keeping these facts together makes it easier to compare options quickly, especially when Maya is using her phone.

### Decision 2  Use plain-language difficulty help
**Problem:** A label like beginner does not explain what the path will actually feel like.

**Design response:** The trail detail view includes an explanation that can be opened when Maya needs more information.

**Why:** It gives her extra context without making every trail card too crowded. The wording avoids assuming that she already knows hiking vocabulary.

### Decision 3  Make filters match Maya's task
**Problem:** Maya wants a beginner-friendly hike she can finish in about three hours, but non-working filter controls create the expectation that she can narrow the results.

**Design response:** The primary layout gives beginner and under-three-hour and requires a clear place above the trail results.

**Why:** These are the first two requirements tied directly to her task. The controls should be implemented as real controls in the next development module, not left as decorative text.



## 7. Accessibility Notes

### Accessibility Decision 1  Do not rely on color alone
The selected filter uses both a visible outline/fill change and a text label. Difficulty is written out as a word, and the explanation uses sentences instead of depending on a color or icon. This helps people understand the interface even if they have difficulty distinguishing colors.

### Accessibility Decision 2  Use readable labels and plain language
The difficulty explanation describes the path. Buttons have action labels such as "Explain difficulty" and "View trail details", rather than simple labels like More. This makes the next action easier to understand.

### Accessibility Decision 3  Keep my mobile controls easy to use
The mobile layout stacks trail information and gives the main action a wide touch area. This reduces the need for precise tapping and simply keeps the important details in a scannable order.



## Week 8 Handoff

The next development step can turn the difficulty explanation into something like a disclosure interaction and make the trail-planning filters or form provide clear feedback. 


