//ctrl+shift+l=console.log('')

/*console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Priyanshi");
let a;
console.log(typeof a);
console.log(typeof null);
console.log(typeof 3*'hi');
console.log(typeof 3/'hi');
console.log(typeof(5+'hi'));
a=5;
let b="hello";
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);*/

/*let a='10';
let b=10;
let c='10.0';
console.log(a==b);
console.log(b==c);
console.log(a==c);
console.log('**********************************')
console.log(a===b);
console.log(b===c);
console.log(a===c);*/

/*//let is block scoped and var is function scoped
//2**3 =2*2*2
console.log(2**3);
const name='Priyanshi'
console.log(`hello ${name} welcome`);
console.log('string \n\
with \n\
multiple lines');
console.log(`Strings
in multiple lines
 using backtick`);*/

 /*//falsy values:0,undefined,null,NaN,''(empty string)
 //everything else is truthy value
 console.log(Boolean(undefined));
 console.log(Boolean({}));
 console.log(typeof {});
 console.log(Boolean(0));
 console.log(Boolean(''));
 console.log(Boolean(null));
 //internally converted to boolean
 let money=0;
 if(money)
    console.log('u have job');
else
    console.log('go get a job');*/


/*//type conversion:manually converted, type coercion:js(automatically)
//type converion
let a='10';
console.log(typeof Number(a));
console.log(typeof NaN);
console.log(typeof String(23), typeof 23)
//type coercion:
console.log('10'-'3'+5);//string converted to number if -
console.log('10'+1);//number converted to string if +
console.log(2+5+'9')
console.log('10'-'3'-'4'-2+'5')*/

//2+3, `a is ${a}`:expression(produces value)
//let a=2+3;//stmt
//a>0?console.log('a>0'):console.log('a<0'); condition?if:else

const numbers = [45, 4, 9, 16, 25];
numbers.forEach(n=>console.log(n));