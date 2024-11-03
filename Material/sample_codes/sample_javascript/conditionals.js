let input = 18; 

// If Statement
if (input >= 18) {
    console.log("Adult");
} else if (input >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}

// Switch Statement
switch (input) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("Weekend soon!");
        break;
    default:
        console.log("Regular day");
}

// Ternary Operator (Short If)
const ageStatus = age >= 18 ? "Adult" : "Minor";

console.log(ageStatus)

