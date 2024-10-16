class Person {

    //Private Fields
    #name;
    #age;
    #hobby;

    constructor(name, age, hobbies) {
        this.#name = name;
        this.#age = age;
        this.#hobby = hobby;
    }
    //Getters
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get hobby() {
        return this.#hobby;
    }
    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Hobbies: " + this.hobby);
    }
    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Hobbies:</strong> ${this.hobby}
        `;
    }
}
class Student extends Person {
    constructor(name, age, hobbies, program) {
        super(name, age, hobby);
        this.program = program;
    }
    // Overriding the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log("Program: " + this.program);
    }
    // Extending the displayInfoHTML method
    displayInfoHTML() {
        super.displayInfoHTML();
        const personElement = document.getElementById('personOne');
        personElement.innerHTML += `<br><strong>Program:</strong> ${this.program}`;
    }
}
// Creating an object (instance) of the Person class
const studenOne = new Student('Amera S. Jaramillo', 19, 'Reading Wattpad', 'Information Technology');

// Calling methods
studenOne.displayInfo();
