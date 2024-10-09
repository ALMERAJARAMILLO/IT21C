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
}