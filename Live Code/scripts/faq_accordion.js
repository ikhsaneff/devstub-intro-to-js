// TASK: Create an Interactive FAQ Section
// Your task is to make the FAQ questions expandable/collapsible when clicked.
// Follow the clues below to complete the implementation.

// STEP 1: Select Elements
// CLUE: Use querySelectorAll to select all CSS elements with class 'faq-question'
// Write your code here...


// STEP 2: Add Click Events
// CLUE: Loop through all questions using forEach
// For each question, add a click event listener
// Write your code here...


// STEP 3: Inside the click event handler:
// CLUE A: Toggle the 'active' class on the clicked question
// Write your code here...


// CLUE B: Find and toggle the answer
// HINT: The answer is the next element after the question
// HINT: Use nextElementSibling to find it (e.g. currentQuestion.nextElementSibling)
// HINT: Toggle the 'show' class on the answer
// Write your code here...


// BONUS CHALLENGE: Close Other Questions
// CLUE: Loop through all questions again
// HINT: Check if the question is NOT the one that was clicked (q !== this)
// HINT: Remove 'active' class from other questions
// HINT: Remove 'show' class from their answers
// Write your code here...


/* 
Expected Behavior:
1. When a question is clicked:
   - The question should get an 'active' class
   - Its answer should get a 'show' class
   - The '+' symbol should rotate 45 degrees (CSS handles this)
2. When another question is clicked:
   - Previous question/answer should close
   - New question/answer should open
3. Clicking an open question should close it

Tips:
- Test the classList.toggle() method
- Use nextElementSibling to find the answer div
- The CSS is already set up for you!
*/