//complete this code
class Animal {
    constructor(species){
        this.species=species;
    }
   
    get speciesName(){
        return this.species;
    }

    makeSound(){
        console.log(`${this.species} makes sound`)
    }
}

class Dog extends Animal {
    constructor(){
        super("Bulldog")
    }
    bark(){
        console.log("woof")  
    }
}

class Cat extends Animal {
    constructor(){
        super("Persian cat")
    }
    purr(){
        console.log("purr")  
    }
}

var animal = new Animal("Asian elephant")
animal.makeSound();

var cat = new Cat()
cat.purr();

var dog = new Dog()
dog.bark();



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
