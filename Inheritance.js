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
}