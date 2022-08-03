class Animal {
    constructor(name) {
        this.name = name ;
    }

    speak() {
        console.log(`${this.name} makes a noise`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    barks() {
        console.log(`${this.name} barks`)
    }
}

var animal = new Dog('Pug');
animal.speak()
animal.barks()