let initialValue = 0;
let endValue = 5;
let incrementValue = 1;

// For Loop
for (let i = initialValue; i < endValue; i += incrementValue) {
    console.log(`Step ${i}`);
}

// While Loop
while (initialValue < endValue) {
    console.log(`Step: ${initialValue}`);
    initialValue += incrementValue;
}

// For...of Loop (Arrays)
const arrayOfFruits = ["apple", "banana", "orange"];
for (let value of arrayOfFruits) {
    console.log(value);
}

// For...in Loop (Objects)
const fruitObject = {name: "apple", color: "red", price: 1};
for (let key in fruitObject) {
    console.log(`${key}: ${fruitObject[key]}`);
}

// forEach Method (Arrays)
arrayOfFruits.forEach((value, index, array) => {
    console.log(`${index}: ${value} from ${array}`);
});

for (let value of arrayOfFruits) {
    if (value === "banana") {
        console.log("Found Banana, stopping loop!");
        break;
    }
    console.log(fruit);
}

for (let value of arrayOfFruits) {
    if (value === "banana") {
        continue; // Skip "Banana" and go to the next fruit
    }
    console.log(fruit);
}