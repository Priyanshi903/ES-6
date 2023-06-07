/*function hello(thing) {
  console.log(thing.length);
  for (let i = 0; i < thing.length; i++) {
    console.log(thing[i]);
  }
  console.log(this + " says hello " + thing);
}
//welcome ignored
//Priyanshi is this(calling object) and others are arguments
hello.call("Priyanshi", "world", "welcome");

function hellonew(thing) {
  console.log("Hello " + thing);
}

// this:
hellonew("world");

// desugars to:                (before ES5 window was there instead of undefined)
hellonew.call(undefined, "world");*/

/*//Member Functions
var person = {
  name: "Brendan Eich",
  hello: function(thing) {

//The default conversion from an object to string is "[object Object]".
    console.log(this + " says hello " + thing);
    for(var property in this) {
      console.log(property + "=" + this[property]);
  }
  }
}

// this:
person.hello("world")

// desugars to this:
//   person.hello.call(person, "world");*/

/*function hello(thing) {
    console.log(this + " says hello " + thing);
  }

  person = { name: "Brendan Eich" }
  //attach fun to object dynamiclly, notice no parenthesis()
  //reference of hello is being passed instead of caling fun
  person.hello2 = hello;
  console.log(typeof hello2)
  person.hello2("world1") // still desugars to person.hello.call(person, "world")

  hello("world2") // "[object DOMWindow]world"*/

/* var person = {
   name: "Brendan Eich",
   hello: function(thing) {
       console.log(this);
       // console.log(this+"hii");
     console.log(this.name + " says hello " + thing);
   }
 }

 var boundHello = function(thing) {
   //   console.log(this);//this is global
   //    return person.hello.call(person, thing);
   return person.hello(thing);}
 //notice this is not global in final
 boundHello("world");*/

/*
 // closures
// function x() {
//     // console.log("hii")
//     return function y() {
//         console.log("inner function")
//     }
// }
// var a = x();
// var b = x;
// x()();//calls inner function
// var outer = x();
// outer();//o/p:-inner function
// console.log(a);
// console.log(b);

function outest() {
    var a = 10;
    return function outer(c) {
        var b = 20;
        return function inner() {
            console.log(a, b, c)
        }
    }
}
var close = outest()("Parameter passed to outer aftr outest return outer function")
close();
console.log(close)*/

/*
//constructor function:regular fun used to create multiple similar object
//capital frst letter nd new keyword used to create object using cons func
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return firstName + " " + lastName;
    }
}
let person1 = new Person('Priyanshi', 'Chauhan');
let person2 = new Person('James', 'Bond');
console.log(person1);
console.log(typeof person1);
console.log(person1.fullName());
console.log(person2.fullName());*/

/*
//arrow vs regular function
const person = {
  firstName: 'Priyanshi',
  lastName: 'Chauhan',
  fullname: function () {
    console.log(this);//person object(parent scope)
    console.log(`${this.firstName} ${this.lastName}`);
  },
  greet: () => {
    console.log(this);//window object
    console.log("Welcome Person");
    namastey = () => {
      console.log(this);//window object
      console.log("Namastey");
    }
    namastey();
  }
}
//global scope
function hello() {
  console.log(this);//window object
  console.log("Hello World");
}
// script scope(global)
//arrow fun take this from lexical environement i.e.,window here
const welcome = () => {
  console.log(this);//window object,arrow func do not get there 'this'
  console.log("welcome to JS")
}
const greet = function () {
            console.log(this);//undefined
            console.log("function expression");
        }
        greet();
// person.fullname();
// hello();
// welcome();
person.greet();
const p=person.greet();
p();//typeerror for 'this' eg. this.name
*/

/*
//types of scope:global,fun,block
//functions r block scoped in strict mode
//let nd const variables r not hoisted(temporal dead zone)
//fun declaration hoisted nd r block scope, fun exp nd arrow fun behave same as const nd let depends
function name() {
  //fun name nd frstname is global scoped,therefore able to access frstname inside func name
  console.log(firstName);
}
const firstName = 'Priyanshi';
name();

console.log(declaration());
console.log(varExpression);//undefined(notice no parenthesis)
console.log(varArrow);//undefined
// console.log(constArrow());//Cannot access 'arrow' before initialization
// console.log(constExpression());//Cannot access 'expression' before initialization
function declaration() {
  return "I am function decl nd can be called ";
}
const constExpression = function () {
  return "I am function exp nd cannot be called ";
}
const constArrow = () => "I am arrow function nd cannot be called ";
var varExpression = function () {
  return "I am function exp nd cannot be called ";
}
var varArrow = () => "I am arrow function nd cannot be called ";*/

/*
//primitives vs objects
//objects r stored in heap while primitives in call stack
const priya = {
  age: 23,
  family: ['mumma', 'papa', 'bro']
}
const friend = priya;
friend.age = 22;
// console.log(priya);//22
// console.log(friend);//22(same values)
const newfriend = Object.assign({}, priya);//to create new object by merging 2 objects,shallow copy
newfriend.age = 25;
// console.log(newfriend);//age=25
newfriend.family.push('dog');
console.log(newfriend);//all 4 family members
console.log(priya);// 4 family members,changed here too(shallow copy)*/

/*
//destructuring array
const arr = [1, 2, 3, 4];
// const [a, b, c] = arr;//1 2 3
const [a, b, c, d, e] = arr;
let [x, , , z] = arr;
console.log(a, b, c, d, e);//1 2 3 4 undefined
console.log(x, z);//1 4
[x, z] = [z, x];//swap(mutating variables)
console.log(x, z);//4 1
const nested = [5, 6, [7, 8]];
const [i, , j] = nested;
console.log(i, j);//5 [7, 8]
const [k, , [l, m]] = nested;//nested destructuring
console.log(k, l, m);//5 7 8
const [p = 0, q = 0, r = 0] = [2, 3];//giving default values
console.log(p, q, r);//2 3 0

//destructuring object
const person = {
  firstname: 'Priyanshi',
  lastname: 'chauhan',
  age: 23,
  //passing whole object
  greet: function (obj) {
    return (index + ' ' + wish + ' ' + time);
  },
  //destructuring
  greetnew: function ({ wish, time, index, age = '18+' }) {
    return (index + ' ' + time + ' ' + wish + ' default age:' + age);
  },
  mother: {
    motherfirstname: 'Rita',
    motherlastname: 'chauhan',
  }
}
const { firstname, lname, age } = person;// we have to use exact prop name, otherwise it will give undefined
console.log(firstname + ' ' + lname, +' ' + age);//Priyanshi undefined 23
const { lastname: laname } = person;//changing default name
console.log(laname);//giving error
const { firstname1, lastname1, age1, nicknames = ['priya', 'bittu'] } = person//adding default values
// console.log(nicknames);
//mutation in object
let vara = 12;
let varb = 17;
// console.log(vara, varb);//12 17
const num = {
  vara: 45,
  varb: 90
};
({ vara, varb } = num);//note the syntax...if const is not written
// console.log(vara, varb);//45 90(overrided)
//nested object destructuring
const { mother: { motherfirstname, motherlastname } } = person;//mother is object
// console.log(motherfirstname, motherlastname);//Rita chauhan
//destructuring object while passing to the function as parameter
// console.log(person.greetnew({
//   wish: 'good morning',
//   index: 2,
//   time: '5:30'
// }));//order doesnt matters*/

/*
//spread operator(...), at the right side of '='
const arr = [1, 2, 3];
const arr2 = [7, 8, arr];
console.log(arr2);//[7, 8, [1, 2, 3]]
const new_arr = [7, 8, ...arr];//takes out all elements of array nd add it to the new array
console.log(new_arr);//[7, 8, 1, 2, 3]
console.log(...arr);//1 2 3 ............to print array(no brackets)
const str = 'Priya';//spread operator with string
const name = [...str, "n", 's', 'h', 'i'];
console.log(name);//['p','r','i','y','a','n','s','h','i']
console.log(...name);//P r i y a n s h i
//spread operators while passing arguments in func
function sum(a, b, c) {
  console.log(a + b + c);
}
//will show error here..bt works fine in browser
// const numbers = [
//   prompt("number 1?"),
//   prompt('number 2?'),
//   prompt('number 3?')
// ];
// console.log(numbers);
// sum(...numbers);//to pass multiple values
//spread operator with objects
const me = {
  firstname: 'Priyanshi',
  lastname: 'chauhan',
  age: 23
}
const friend = { ...me, profession: 'singing' };//added new properties too
friend.firstname = 'Neha';
friend.lastname = 'Ratiya';
console.log(me);//{ firstname: 'Priyanshi', lastname: 'chauhan', age: 23 }
console.log(friend);//{ firstname: 'Neha', lastname: 'Ratiya', age: 23, profession: 'singing' } ....notice values updated
*/

/*
//rest operator(...), at the left side of '=', opp. of spread
const [a, b, ...others] = [1, 2, 3, 4, 5];//put rest elements into new array nd always is the last element
console.log(a, b, others);//1 2 [3, 4, 5]
//rest operator with functions
function add(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
}
add(2, 3, 4);//9
add(7, 8, 9, 4, 5);//33  .....any no of elements in array
//similarly for objects*/

/*
//&& ,||:used in short circuiting
// we can use any data type nd can return any data type with &&, ||
// || returns first truthy value or last value if all r falsy
// && returns first falsy value or last value if all r truthy
console.log(3 || 'Priya');//3 .... returns 3 becz 3 is truthy value nd thts why another or is not evaluated,evaluated until reach 1st truthy value
console.log('' || 'Priya');//Priya
console.log(true || 0);//true
console.log(undefined || null);//null
console.log(null || 'Priya');//Priya
console.log('' || null || 'Priya' || 7 || undefined);//Priya
console.log('--------*-------');
console.log(3 && 'Priya');//Priya .... returns priya becz 3 is truthy value nd it will evaluate till it gets truthy values
console.log('' && 'Priya');//'':it is falsy
console.log(true && 0);//0
console.log(undefined && null);//undefined:immediately returns falsy value not even evaluate further
console.log(null && 'Priya');//null

//nullish coalescing operator(??)
//nullish values:null and undefined , not (0 or '')
const people = 0;
const guests = people || 10;
console.log(guests);//10 ...but it should give 0
const guests_new = people ?? 10;
console.log(guests_new);//0

//logical assignment operators
let num = 0;
let num1 = 0;
// console.log(num ||= 20);//20 ......logical assignment operator(similar as || )
console.log('--------*-------');
console.log(num ??= 20);//0 ......nullish assignment operator(similar as ?? ),if 353 uncommented then value of num will change
console.log(num1 &&= 10);//0
*/

/*
//for-of loop
const arr = [2, 3, 4, 5];
for (let i of arr)
  console.log(i);//2 3 4 5(logged one by one)
for (let i of arr.entries())
  console.log(i);//[0, 2][ 1, 3 ][ 2, 4 ][ 3, 5 ](logged in new lines) ....[index, value]
console.log(...arr.entries());//[ 0, 2 ] [ 1, 3 ] [ 2, 4 ] [ 3, 5 ]
nicknames = ['priya', 'bittu', 'priyanshi']
//entries() gives the array
for (let n of nicknames.entries())
  console.log(`${n[0] + 1} : ${n[1]}`);
//output:
//1 : priya
//2 : bittu
//3 : priyanshi

//using destructuring:-
for (let [i, n] of nicknames.entries())
  console.log(i + ":" + n); //OR console.log(`${i + 1} : ${n}`);
//output:
//0:priya
//1:bittu
//2:priyanshi*/

/*
//enhanced object literals
const name = {
  firstname: 'Priyanshi',
  lastname: 'Chauhan'
}
//adding object literal to the object , adding function without function keyword
const person = {
  age: 23,
  name,
  welcome() {
    console.log('Welcome');
  }
}
console.log(person);//{ age: 23, name: { firstname: 'Priyanshi', lastname: 'Chauhan' }, welcome: [Function: welcome] }

//looping through the object, objects r not iterable(for-of):will give error but with for in objects r iterable
for (let obj in person)
  console.log(obj);
// for (let obj of person)
//   console.log(obj);//error
// output:
//age
//name
//welcome

const var_values = Object.values(name);
console.log(var_values);//[ 'Priyanshi', 'Chauhan' ]

const var_keys = Object.keys(name);
console.log(var_keys);//[ 'firstname', 'lastname' ]

for (let obj of Object.keys(name))
  console.log(obj);// firstname lastname(logged on one by one)
for (let obj of Object.values(name))
  console.log(obj);//Priyanshi Chauhan(logged on one by one)
//entries():array of arrays(key-value pair )
console.log(Object.entries(name));// [ [ 'firstname', 'Priyanshi' ], [ 'lastname', 'Chauhan' ] ]
*/

/*
//set(unique elements),iterable,order is not maintained nd has no concept of indexes
const order_set = new Set([1, 2, 3]);//const order_set = new Set()
order_set.add(6);
order_set.add(6);
console.log(order_set);//Set(4) { 1, 2, 3, 6 }
console.log(order_set.size);//4
console.log(order_set.has(3));//true
order_set.delete(2);
console.log(order_set);//Set(3) { 1, 3, 6 }
// order_set.clear();//to delete all elements
console.log(order_set);//Set(0) {}
for (let obj of order_set)
  console.log(obj);//1 3 6(new lines)

//to get array of unique elements from the existing array
const arr = [1, 1, 2, 2, 3, 4, 5, 6, 6]
const arr_set = new Set(arr);
console.log(arr_set);//Set(6) { 1, 2, 3, 4, 5, 6 }
const unique_arr = [...new Set(arr)];
console.log(unique_arr);//[ 1, 2, 3, 4, 5, 6 ] .....array
console.log(new Set([1, 1, 2, 2, 3, 4, 5, 6, 6]).size);//6 ...to directly get total unique positions
console.log(new Set('priyanshichauhan').size);//10 ....diff letters in a string
const new_set = new Set('1', '2', '3');
//note:works for a single string only otherwise create array..nd put strings inside it
console.log(new_set);//Set(1) { '1' }
*/

/*
//map:keys can be of any type(object/array/map) but in objects keys r string only
const map = new Map();
map.set('name', 'Priyanshi Chauhan');
map.set(1, 'Java');
map.set(2, 'Javascript');
map.set(3, 'C++');
console.log(map);
// output:
// Map(4) {
//   'name' => 'Priyanshi Chauhan',
//   1 => 'Java',
//   2 => 'Javascript',
//   3 => 'C++'
// }
map.set('subjects', ['electrical', 'physics', 'C', 'Maths-1']).set('sem', 1);
console.log(map);
// output:
// Map(6) {
//   'name' => 'Priyanshi Chauhan',
//   1 => 'Java',
//   2 => 'Javascript',
//   3 => 'C++',
//   'subjects' => [ 'electrical', 'physics', 'C', 'Maths-1' ],
//   'sem' => 1
// }
console.log(map.get('sem'));//1
console.log(map.has('parent'));//false
map.delete(1);
console.log(map);
// output:
// Map(5) {
//   'name' => 'Priyanshi Chauhan',
//   2 => 'Javascript',
//   3 => 'C++',
//   'subjects' => [ 'electrical', 'physics', 'C', 'Maths-1' ],
//   'sem' => 1
// }
console.log(map.size);//5
// map.set([1, 2], 'first year');//array as a key
// console.log(map.get([1, 2]));//undefined
//instead use:->
const arr = [1, 2];
map.set(arr, 'first year')
console.log(map.get(arr));//first year
map.clear();
console.log(map);//Map(0) {}

const quiz = new Map([
  ['question', 'Which is the best prog language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  [4, 'Python'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again']
]);
console.log(quiz);
// Output:
// Map(8) {
//   'question' => 'Which is the best prog language?',
//   1 => 'C',
//   2 => 'Java',
//   3 => 'JS',
//   4 => 'Python',
//   'correct' => 3,
//   true => 'Correct',
//   false => 'Try again'
// }
console.log(quiz.get('question'));
for (let [key, value] of quiz) {
  if (typeof key === 'number') {
    console.log(`Option ${key}:${value}`);
  }
}
const ansr = 3;
console.log(quiz.get(quiz.get('correct') === ansr));
// output:
// Which is the best prog language?
// Option 1:C
// Option 2:Java
// Option 3:JS
// Option 4:Python
// Correct
//convert map to array
console.log([...quiz]);
// output:
// [
//   [ 'question', 'Which is the best prog language?' ],
//   [ 1, 'C' ],
//   [ 2, 'Java' ],
//   [ 3, 'JS' ],
//   [ 4, 'Python' ],
//   [ 'correct', 3 ],
//   [ true, 'Correct' ],
//   [ false, 'Try again' ]
// ]
*/

/*
// strings
//when a method on string is called , string is converted to Object:autoboxing nd aftr operation is completed it is converted back to string
const str = 'Priyanshi';
const str2 = "Welcome to javascript"
console.log(str.indexOf('r'));//1
console.log(str.lastIndexOf('i'));//8
console.log(str.indexOf('yan'));//3
console.log(str.slice(2));//iyanshi(starts from index 2),gives new string
console.log(str2.slice(9));//o javascript(space counted as index)
console.log(str2.slice(8, 10));//to ...length=10-8(end-beg)
console.log(str2.slice(0, str2.indexOf(' ')));//Welcome
console.log(str2.slice(-3));//ipt ...frm the end
console.log(str.slice(0, -1));//Priyansh
console.log(str.toLowerCase());
const str3 = 'Priyanshi nd 23 nd Delhi nd Btech';
console.log(str3.replace(/nd/g, 'and'));// JS doesnt have replaceAll, therefore we r using reg exp where g stands for global
console.log(str3.includes('Btech'));//true
const [fname, lname] = 'Priyanshi Chauhan'.split(" ");
console.log(fname, lname);//Priyanshi Chauhan
const name = ['Ms.', 'Priyanshi', 'Chauhan'].join(' ');//Ms. Priyanshi Chauhan ...specify on wht we have to join , otherwise it will add ','(Ms.,Priyanshi,Chauhan)
console.log(name);
console.log(name.padStart(30, '+'));//+++++++++Ms. Priyanshi Chauhan
console.log(name.padEnd(30, '+'));//Ms. Priyanshi Chauhan+++++++++
const maskCreditCard = function (number) {
  const number_str = number + '';//converting to string
  const last = number_str.slice(-4);
  return last.padStart(number_str.length, '*')
}
console.log(maskCreditCard(766547665));//*****7665
const mssg = 'Bad weather:stay inside\n';
console.log(mssg.repeat(5));*/

/*
//functions
//no pass by reference in JS
const bookingList = [];
const createBooking = function (flightNum, numPassengers = 1, price = numPassengers * 199) {
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price
  };
  console.log(booking);
  bookingList.push(booking);
}
createBooking('LH123');
createBooking('LH123', 3);
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 1000);

//passing primitive to the func if changed will not affect the original while if object prop is changed , it will affect the original one
flightNum = 'LH123';
passenger = {
  name: 'Priyanshi',
  passport: 7656763287643
}
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH199';
  passenger.name = 'Ms. ' + passenger.name;
}
checkIn(flightNum, passenger);
console.log(flightNum);//LH123 ...not changed
console.log(passenger);//{ name: 'Ms. Priyanshi', passport: 7656763287643 } ...name changed


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}
//higher order function
//can pass fun as an argument
const transformer = function (str, fun) {
  console.log(`Original sring: ${str}`);
  console.log(`Transformed String: ${fun(str)}`);
  console.log(`Transformed by: ${fun.name}`);
};
//upperFirstWord and oneWord are the callback functions->
transformer('Javascript is the best!', upperFirstWord);//Transformed String: JAVASCRIPT is the best!    //Transformed by: upperFirstWord
transformer('Javascript is the best!', oneWord);//Transformed String: javascriptisthebest!    //Transformed by: oneWord

const hello = function () {
  console.log('Hello');
}
// ['Priyanshi', 'Aditya', 'Neha'].forEach(hello); .....hello is callback
['Priyanshi', 'Aditya', 'Neha'].forEach(hello);

let array3= ['a', 'b', 'c'];
let sayHello = function (e,v,x,y) {
  console.log(`Hello ${e} ${v} ${x} ${y}`);
}

array3.forEach(sayHello);
//output:-
// Hello a 0 a,b,c undefined
// Hello b 1 a,b,c undefined
// Hello c 2 a,b,c undefined


//function returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}
const greeterHey = greet('Hey');
greeterHey('Priyanshi');//Hey Priyanshi
greeterHey('Alice');//Hey Alice
greet('Hello')('James');//Hello James
//above example using arrow:->
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greet('Hii')('Neha');//Hii Neha

//const welcome=person.welcome where welcome is the arr fun in person will create new copy of welcome nd 'this' keyword becomes undefined
//welcome.call(calling object,.. other params) use to set this
//welcome.apply(calling object,array of params) use to set this

const modules = {
  x: 42,
  getX: function () {
    return this.x;
  }
};

const unboundGetX = modules.getX;
console.log(unboundGetX());//undefined ....unboundGetX is new method in global
// p();//x is undefined , 'this' keyword is window
const boundGetX = unboundGetX.bind(modules);//bind creates new function, we can pass parameters too as in call
console.log(boundGetX());//42

//
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));//220
//partial application:setting some params while binding
const addVAT = addTax.bind(null, 0.23);//here we not binding to any object(not reqd)
console.log(addVAT(100));//123
console.log(addVAT(23));//28.29
//doing above in a prev way as in greet example:->
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));//123
console.log(addVAT2(23));//28.29

//Immediately Invoked Function Expression(IIFE)
//invoked only once nd disappears aftr that
(
  function () {
    const isPrivate = 23;
    console.log('This will never run again');
  }
)();//This will never run again ...notice immediately called

(() => console.log('This will also never run again'))();//This will also never run again
//IIFE mostly used for data hiding
// console.log(isPrivate);//error not defined
//instead of IIFE we r using blocks these days
{
  const isPrivate = 23;
}
// console.log(isPrivate);//error not defined
*/

/*
//closures
//a function remember all the variables(var environment) of the execution context in which it is created even aftr that exec context is gone:closure
const a = function () {
  let count = 0;
  return function () {
    count++;
    console.log('Counter is: ' + count);
  }
}
const b = a();//a is removed from ex. context after this and b is added to global but b still can access a members
//acc. to the scope chain b cannot access count(becz global doesnt contains count) but closure is on priority therefore b can access count
b();//Counter is: 1
b();//Counter is: 2
b();//Counter is: 3

let f;
const g = function () {
  const var1 = 23;
  f = function () {
    console.log(var1 * 2);
  };
};
const h = function () {
  const var2 = 777;
  f = function () {
    console.log(var2 * 2);
  };
};
g();
f();//46
h();
f();//1554 ...f is reassigned
*/

//Arrays
let arr = [2, 3, 4, 5, 7, 8];
console.log(arr.slice(2)); //[ 4, 5, 7, 8 ] ...does not affect the original array(gives new array)
console.log(arr.slice(2, 4)); //[ 4, 5] ...excludes end
// console.log(arr.splice(2));//[ 4, 5, 7, 8 ] ...change the original array
console.log(arr); //[ 2, 3 ]
const arr2 = ["a", "b", "c", "d", "e"];
console.log(arr2.reverse()); //[ 'e', 'd', 'c', 'b', 'a' ]
console.log(arr2); //[ 'e', 'd', 'c', 'b', 'a' ] ...change the original array
const arr1_2 = arr.concat(arr2); //does not change original array
console.log(arr1_2); //[2,   3,   4,   5,   7,8,   'e', 'd', 'c', 'b','a']
console.log(...arr, ...arr2); //2 3 4 5 7 8 e d c b a
console.log(arr1_2.join("-")); //2-3-4-5-7-8-e-d-c-b-a
console.log(arr.at(1)); //3
console.log(arr.at(-1)); //8 ...to get last element
console.log(arr.at(-2)); //7 ...to get 2nd last

const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));
array1.forEach( console.log);
//output:-
// a 0 [ 'a', 'b', 'c' ]
// b 1 [ 'a', 'b', 'c' ]
// c 2 [ 'a', 'b', 'c' ]
array1.forEach(function (params) {
  //anonymous func
  console.log("Hii ");
});
function hello() {
  console.log("Hello "); // 3 times Hello
}
array1.forEach(hello); //callback func

//Syntax
// Arrow function
// forEach((element) => { /* ... */ })
// forEach((element, index) => { /* ... */ })
// forEach((element, index, array) => { /* ... */ })

// Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// Inline callback function
// forEach(function (element) { /* ... */ })
// forEach(function (element, index) { /* ... */ })
// forEach(function (element, index, array) { /* ... */ })
// forEach(function (element, index, array) { /* ... */ }, thisArg) thisArg is use to set this

const movements = [230, 450, -100, 300, 456, 780, -320, -220];
//notice movement is variable, frst element is variable nd 2nd index its vice versa in for-of,cannot break the loop
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else console.log(`Movement ${index + 1}:You withdraw ${movement}`);
});
//foreach on Map
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
//foreach in set
const currenciesUnique = new Set(["USD", "EUR", "RUPEE", "EUR", "USD"]);
currenciesUnique.forEach(function (value1, value2, set) {
  console.log(`${value1}: ${value2}`,set);
});
// output:-
// USD: USD Set(3) { 'USD', 'EUR', 'RUPEE' }
// EUR: EUR Set(3) { 'USD', 'EUR', 'RUPEE' }
// RUPEE: RUPEE Set(3) { 'USD', 'EUR', 'RUPEE' }
