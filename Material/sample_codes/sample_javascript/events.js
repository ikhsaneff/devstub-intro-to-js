// Event Listeners
button.addEventListener('click', function() {
    console.log("Button clicked!");
});

// Multiple Events
const handleHover = () => {
    console.log("Mouse over!");
};

element.addEventListener('mouseover', handleHover);
element.addEventListener('mouseout', () => {
    console.log("Mouse out!");
});

