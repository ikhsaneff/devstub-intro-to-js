// TASK: Create a Dark Mode Toggle
// Your goal is to implement a button that switches between light and dark themes.
// Follow the clues to create this feature.

// STEP 1: Initial Setup
// CLUE: You need two things to start:
// 1. Reference to the theme toggle button (id: 'themeButton')
// 2. A variable to track the current theme state


// STEP 2: Add Click Event
// CLUE: Add a click event listener to the button
// The function will handle switching between themes


// STEP 3: Inside the click handler:

// CLUE A: Toggle the Theme State
// HINT: Flip the boolean value of the theme state
// HINT: Use the NOT operator (!)


// CLUE B: Apply Theme Changes
// HINT: Use an if-else statement to check theme state
// For Dark Mode (if isDark is true):
// - Change background to dark (#333)
// - Change text to white
// - Update button text for next action
// For Light Mode (if isDark is false):
// - Change background to white
// - Change text to black
// - Update button text for next action
// Write your code here...


/* 
Expected Behavior:
1. Initially the page is in light mode
  - White background
  - Black text
  - Button says "Toggle Dark Mode"

2. After first click:
  - Background becomes dark (#333)
  - Text becomes white
  - Button says "Toggle Light Mode"

3. After second click:
  - Returns to light mode
  - Process repeats

HTML Reference:
<button id="themeButton" class="theme-toggle">Toggle Dark Mode</button>

Tips:
- Use document.body.style to change page styles
- Remember to update the button text to indicate the next action
- Test the toggle multiple times to ensure it switches correctly
- Make sure the theme state variable (isDark) stays in sync with the visual changes
*/

// Write your code below...
