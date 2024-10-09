class Person {

    //Private Fields
    #name;
    #age;
    #hobbies;

    constructor(name, age, hobbies) {
        this.#name = name;
        this.#age = age;
        this.#hobbies = hobbies;
    }
    //Getters
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get hobbies() {
        return this.#hobbies;
    }
    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Hobbies: " + this.hobbies);
    }
    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Hobbies:</strong> ${this.hobbies}
        `;
    }
}
class Student extends Person {
    constructor(name, age, hobbies, program) {
        super(name, age, hobbies);
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
        personElement.innerHTML += `<br><strong>Major:</strong> ${this.program}`;
    }
}