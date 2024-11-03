// For Loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// While Loop
let count = 0;
while (count < 5) {
    console.log(`Count: ${count}`);
    count++;
}

// For...of Loop (Arrays)
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

// For...in Loop (Objects)
const person = {name: "John", age: 30};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// forEach Method (Arrays)
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

