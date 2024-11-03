// DOM Selection Demo
function demonstrateSelection() {
    const byId = document.getElementById('myId');
    byId.style.backgroundColor = '#e3f2fd';
    
    const byClass = document.getElementsByClassName('myClass');
    Array.from(byClass).forEach(el => {
        el.style.backgroundColor = '#bbdefb';
    });
}

// Content Manipulation Demo
function changeText() {
    const element = document.getElementById('content-demo');
    element.textContent = "Text changed with textContent!";
}

function changeHTML() {
    const element = document.getElementById('content-demo');
    element.innerHTML = "<span style='color: blue'>HTML content changed with innerHTML!</span>";
}

// Style Manipulation Demo
function changeBackground() {
    const element = document.getElementById('style-demo');
    element.style.backgroundColor = element.style.backgroundColor === 'blue' ? 
        'transparent' : 'blue';
    element.style.color = element.style.backgroundColor === 'blue' ? 
        'white' : 'black';
}

function toggleVisibility() {
    const element = document.getElementById('style-demo');
    element.style.display = element.style.display === 'none' ? 
        'block' : 'none';
}

// Class Manipulation Demo
function addClass() {
    document.getElementById('class-demo').classList.add('highlight');
}

function removeClass() {
    document.getElementById('class-demo').classList.remove('highlight');
}

function toggleActive() {
    document.getElementById('class-demo').classList.toggle('active');
}

// Event Listeners Demo
document.getElementById('event-button').addEventListener('click', function() {
    alert("Button clicked!");
});

const hoverArea = document.getElementById('hover-area');

const handleHover = () => {
    hoverArea.style.backgroundColor = '#e0e0e0';
    hoverArea.textContent = "Mouse over!";
};

hoverArea.addEventListener('mouseover', handleHover);

hoverArea.addEventListener('mouseout', () => {
    hoverArea.style.backgroundColor = '#f5f5f5';
    hoverArea.textContent = "Hover over this area";
});