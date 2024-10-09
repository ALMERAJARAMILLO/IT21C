//Input
const person1 = {
    name: "Almera",
    age: 19,
    hobby: "Reading Wattpad",
}

//Process and Output
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);
console.log("Hobby: " + person1.hobby);
console.log("--------------------------------");

// Class definition
class Person {
    constructor(name, age, gender, hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Hobby: " + this.hobby);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Hobby:</strong> ${this.hobby}
        `;
    }
}

// Creating an object (instance) of the Person class
const personOne = new Person('Almera', 19,  'Reading Wattpad');

// Calling methods
personOne.displayInfo();