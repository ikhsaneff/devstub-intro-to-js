// Event Listeners
element.addEventListener('mouseover', () => {
    console.log("Mouse over!");
});
element.addEventListener('mouseout', () => {
    console.log("Mouse out!");
});

// Function to log mouse click
mouseClick = () => {
    console.log("Mouse clicked!");
}

button.addEventListener('click', mouseClick);


