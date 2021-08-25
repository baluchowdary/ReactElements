import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));



class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    speak(){
        console.log('I am=', this.name, 'and I am= ', this.age, 'yeal old');
    }
}

const animal1 = new Animal('tiger',31);
animal1.speak();
console.log(animal1);

class childAnimal extends Animal {
constructor(name,age,color){
    super(name,age);
    this.color=color;
}//constructor

roar(){
    console.log('i am roar and color=', this.color);
}
} //childClass

const childAnimal1 = new childAnimal('childtiger',12,'blaclcolor');
childAnimal1.speak();
childAnimal1.roar();

console.log(childAnimal1);