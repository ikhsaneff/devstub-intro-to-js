// DOM Selection
// By ID (returns single element)
document.getElementById('myId');

// By Class (returns collection)
document.getElementsByClassName('myClass');

// By CSS selector (returns first match)
document.querySelector('.class');

// By CSS selector (returns all matches)
document.querySelectorAll('.class');

// DOM Manipulation
// Changing Content
element.textContent = "New text";
element.innerHTML = "<span>HTML content</span>";

// Modifying Styles
element.style.backgroundColor = "blue";
element.style.display = "none";

// Adding/Removing Classes
element.classList.add("highlight");
element.classList.remove("hidden");
element.classList.toggle("active");

