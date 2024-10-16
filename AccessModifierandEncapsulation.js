class Person {

    //Private Fields
    #name;
    #age;
    #hobby;

    constructor(name, age, hobby) {
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
const personOne = new Person('Almera S. Jaramillo', 19, 'Reading Wattpad');

// Calling methods
personOne.displayInfo();

