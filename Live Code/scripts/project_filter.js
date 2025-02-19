// TASK: Create a Project Filter System
// Your goal is to make the filter buttons show/hide projects based on their category.
// Follow the clues below to implement the filtering system.

// STEP 1: Select Elements
// CLUE: You need two main things:
// 1. All the filter buttons (class: 'filter-btn')
// 2. All the project cards (class: 'project-card')
// HINT: Use querySelectorAll to select multiple elements


// STEP 2: Add Click Events to Buttons
// CLUE: Loop through all filter buttons using forEach
// Add a click event listener to each button


// STEP 3: Inside the click event handler:

// CLUE A: Update Button Styles
// HINT: First, remove 'active' class from all buttons
// HINT: Then add 'active' class to the clicked button

// CLUE B: Get the Category
// HINT: Use getAttribute to get 'data-category' from the clicked button

// CLUE C: Filter the Projects
// HINT: Loop through all project cards
// HINT: Check if:
//       - category is 'all' OR
//       - card's data-category matches the selected category
// HINT: Use classList.add('hidden') or classList.remove('hidden')

/* 
Expected Behavior:
1. When a filter button is clicked:
   - The clicked button should become active (blue background)
   - Other buttons should become inactive (gray background)
   - Only projects matching the selected category should be visible
2. When 'All Projects' is clicked:
   - All projects should become visible

HTML Structure Reference:
<button class="filter-btn" data-category="all">All Projects</button>
<button class="filter-btn" data-category="web">Web Development</button>
<button class="filter-btn" data-category="mobile">Mobile Apps</button>

<div class="project-card" data-category="web">Project 1</div>
<div class="project-card" data-category="mobile">Project 2</div>

Tips:
- The 'hidden' class controls visibility through CSS
- Use data-category attributes to match buttons with projects
- Remember to handle the 'all' category as a special case
- Test each category to make sure projects show/hide correctly
*/

// Write your code below...