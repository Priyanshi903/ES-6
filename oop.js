//each object nd func are linked to a prototype object, thats why we r able to call methods on func as functions too r objects
//prototype obj is a prop of cons func
//Prototypal inheritance/delegation:The prototype contains methods(behaviour) that r accessible to all objects linked to that prototype
//The Object.prototype is on the top of the prototype inheritance chain:Date.prototype,Array.prototype,Person.prototype
//The JavaScript prototype property allows you to add new properties to object constructors otherwise can not add a new property to an existing object constructor
// Function's prototype property can be accessed using <function-name>.prototype. However, an object (instance) does not expose prototype property, instead you can access it using __proto__.
//dom elements like h1 etc. also have __proto__ object(HTMLElement->Element-Node)
//3 ways of implementing protoype inheritance:
//1.Constructor function:creating object through func,Arrays,maps or Sets use this
//2.ES6 Classes:Modern alternative to cons. func. , works same as cons func not as class concept in other prog. lang.
//3.Object.create()

//Constructor function:1st capital letter,arrow func does not work(does not have this)
//Steps:1.New {}(object) is created
// 2.func is called, this={}(newly ceated object)
// 3.{} linked to prototype, creates __proto__ object nd link it to prototype obj of cons. func
// 4.func automatically return {}
const Person = function (firstName, birthYear) {
    console.log(this);//person {} ....in browser
    this.firstName = firstName;
    this.birthYear = birthYear;
};
const priya = new Person('Priya', 1999);
console.log(priya);
function Student() {
    this.name = 'John';
    this.gender = 'M';
}

var studObj = new Student();

console.log(Student.prototype); // object
console.log(studObj.prototype); // undefined
console.log(studObj.__proto__); // object

console.log(typeof Student.prototype); // object
console.log(typeof studObj.__proto__); // object

//__proto__ is the actual object that is used in the lookup chain to resolve methods, etc. prototype is the object that is used to build __proto__ when you create an object with new
// So prototype is not available on the instances themselves (or other objects), but only on the constructor functions
// Student.prototype is just a blueprint for __proto__
// prototype is a property of a Function object. It is the prototype of objects constructed by that function.
// __proto__ is an internal property of an object, pointing to its prototype.
console.log(Student.prototype === studObj.__proto__); // true
Student.prototype.sayHi = function () {
    alert("Hi");
};

var studObj1 = new Student();
var proto = Object.getPrototypeOf(studObj1);  // returns Student's prototype object
console.log(proto);
console.log(proto.constructor);// returns Student function

//ES6 classes
//classes r the special type of functions
//classes r not hoisted
// classes r first class citizens(can be passed to the func nd can be returned from the func)
//classes r executed in strict mode
//class expression:   const PersonClass=class{}
//we dont write let,var,function inside class

//class declaration
class PersonClass {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}
const jessica = new PersonClass('Jessica', 1996)