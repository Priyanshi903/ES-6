//thread of execution:part of execution context that actually executes the code in CPU
//synchronous code:exec line by line, each line of code waits for prev. line to finish, for eg. alert
//setTimeout work in a async. way in the background
//Async. code is executed after the task that runs in the background finishes
//Async. code is non blocking
//callback functions alone do not make code async. For eg. map() on array can accept callback but it is not async.
//addEventListener does not automatically make code async. eg.click event
//img.src='dog.jpg' is async.(loading image in backgorund is async)




/*AJAX:Asynchronous Javascript and XML:allows us to communicate with remote web servers in an async. way
With AJAX calls,we can request data from web servers dynamically
*/


let countriesContainer;
let btn;

// document.addEventListener("DOMContentLoaded", () => {
//     countriesContainer = document.querySelector(".countries");
//     btn = document.querySelector('.btn-country');
//     btn.addEventListener('click', function () {
//         getCountryData('portugal');

//     })
// });

// req.open('GET','http://localhost:9000/product/searchProductById/product-010');//rest-api


const renderCountry = function (data) {

    const html = `
    <div class="row">
        <div >
            <div class="card" >
                <img class="card-img-top" src="${data.flag}" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.region}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${(data.population / 1000000).toFixed(1)}</li>
                    <li class="list-group-item">${data.languages[0].name}</li>
                    <li class="list-group-item">${data.currencies[0].name}</li>
                </ul>
            </div>
        </div>
    </div>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);


}

//nested callbacks(2 AJAX requests therefore 2 callbacks here)
const getCountryAndNeighbour = function (country) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://restcountries.com/v2/name/${country}`);
    req.send();
    req.addEventListener('load', function () {
        // console.log(this);//XMLHttpRequest
        // console.log(typeof this.responseText);//string
        // data_arr = JSON.parse(this.responseText);
        // console.log(data_arr);//[{...}]
        const [data] = JSON.parse(this.responseText);
        console.log(data);//{...} object

        //Render country:-
        renderCountry(data);

        //get neighbour country:-
        const [neighbour] = data.borders;

        if (!neighbour) return;

        //only after first AJAX call:-
        const req2 = new XMLHttpRequest();
        req2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        req2.send();
        req2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);//data2 is object as country code is unique
            renderCountry(data2);
        })

    });
};
// getCountryAndNeighbour('portugal');

//DNS:maps the url request to the real ip address
//callback hell:multiple callbacks

/*Promises:An object that is used as a placeholder for the future result of an async. operation
It is like a container for an asynchronously deliverd value.
it is a container for a future value.
We no longer need to rely on events and callbacks passed into async. functions
to habdle async. results.
Instead of nesting callbacks , we can chain promises for a sequence of async operations:escaping callback hell
Fetch promise only rejected when offline
*/

const req3 = fetch('https://restcountries.com/v2/name/usa')
console.log(req3);//promise

/*const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`).then(function (response) {
        console.log(response);
        return response.json();//this will also return promise therefore one more 'then'
    }).then(function (data) {
        console.log(data);
        renderCountry(data[0])
    })
};*/

//this method will return promise
const getJSON = function (url, errorMsg = 'Something went wrong!!!') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
};

// using arrow func:-
/*const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => {
            if (!response.ok)
                throw new Error(`Country not found (${response.status})`);
            return response.json()//this will also return promise therefore one more 'then'

        },
            // err => alert(err)//err if promise failed
        )
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            if (!neighbour) return;
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then(response => response.json(),
        // err => alert(err)
    )
        .then(data => renderCountry(data))
        .catch(err => {
            console.error(`${err} 🛑🛑🛑`);
            renderError(`Something went wrong 🛑🛑🛑 ${err.message}`, 'Try Again!')
        })
        .finally(() => {

        })
};*/

const getCountryData = function (country) {
    getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found `)
        .then(data => {
            renderCountry(data[0]);
            console.log(data[0]);
            const neighbour = data[0].borders[0];//error
            console.log(neighbour);
            if (!neighbour)
                throw new Error('No neighbour found');
            return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, `Country not found `);
        })
        .then(data => renderCountry(data))
        .catch(err => {
            console.error(`${err} 🛑🛑🛑`);
            renderError(`Something went wrong 🛑🛑🛑 ${err.message}. Try Again!`);
        })
        .finally(() => {

        })
};

const renderError = function (mssg) {
    countriesContainer.insertAdjacentHTML('beforeend', mssg);
}

window.onload = function () {
    countriesContainer = document.querySelector(".countries");
    btn = document.querySelector('.btn-country');
    btn.addEventListener('click', function () {
        getCountryData('australia');
    })
}


/*
//Event loop:
console.log('Test Start');
//both timeout and promise will give callbacks but microtask queue(contains promises callbacks) has more priority than callback queue(contains setTimeout and other callbacks)
//timers in setTimeout are not guranteed, it will only execute after the callbacks of multitask queue
setTimeout(() => console.log('0 second times'), 0);
Promise.resolve('resolved promise 1').then(res => console.log(res));
console.log('Test End');
// Output: -
// Test Start
// Test End
// resolved promise 1 ....microtaskqueue
// 0 second times ....callback queue
*/


/*
//Promisifying:to convert callback based async. behaviour to promise based
//building a promise:-
const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lottery draw is happening 👀');
    setTimeout(function () {
        if (Math.random >= 0.5) {
            resolve('You win 💰');
        }
        else {
            reject(new Error('You Lost your money 😕'));
        }
    }, 2000);
});
lotteryPromise.then(res => console.log(res))
    .catch(err => console.log(err));

//promisifying setTimeout:
const wait = function (seconds) {
    //only resolve becz promise can't be rejected
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
wait(2).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
}).then(() => console.log('I waited for 1 second'));
*/


/*async:return promise
await:return control back from the function until await work is over
The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style,
avoiding the need to explicitly configure promise chains.
Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. 
The await keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a SyntaxError
Code after each await expression can be thought of as existing in a .then callback. 
*/
console.log('First line of this async/await learning');
async function hello() {
    console.log('Inside hello function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();//response.json() also returns promise
    console.log('users resolved');
    return users;
}
console.log('Before calling hello');
let h = hello();
console.log('After calling hello');
console.log(h);
h.then(data => console.log(data))
console.log('Last line of this async/await learning');
//output:-
// First line of this async/await learning
// Before calling hello
// Inside hello function
// After calling hello
// Promise {<pending>}
// Last line of this async/await learning
// before response
// users resolved ....as no other task therefore waiting for await response.json();
// (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

/*
const whereAmI = async function (country) {
    try {
        const res = await fetch(`https://restcountries.com/v2/name/${country}`);
        console.log(res);
        //is same as-
        // fetch(`https://restcountries.com/v2/name/${country}`)
        // .then(res=>console.log(res))
        if (!res.ok) throw new Error('Problem in fetching country');
        const data = await res.json();
        console.log(data);
        renderCountry(data[0]);
    } catch (err) {
        console.error(`${err} ❌❌❌`);
        renderError(`Something went wrong 😕😕😕 ${err.message}`);
    }
};
whereAmI('portugal');
// whereAmI('gfdfdg');
//output:-
//Error: Problem in fetching country ❌❌❌
console.log('After calling whereAmI');
//output:-
//After calling whereAmI
//Response {type: "cors", url: "https://restcountries.com/v2/name/portugal", redirected: false, status: 200, ok: true, …}
//[{…}]
*/

const whereAmI = async function (country) {
    try {
        const res = await fetch(`https://restcountries.com/v2/name/${country}`);
        console.log(res);
        //is same as-
        // fetch(`https://restcountries.com/v2/name/${country}`)
        // .then(res=>console.log(res))
        if (!res.ok) throw new Error('Problem in fetching country');
        const data = await res.json();
        console.log(data);
        renderCountry(data[0]);
        //return value from a async functions:-
        return `You are in ${country}`;
    } catch (err) {
        console.error(`${err} ❌❌❌`);
        renderError(`Something went wrong 😕😕😕 ${err.message}`);
    }
};

// whereAmI('usa').then(country => console.log(country));
//.catch .finally
//watch video for rethrowing the error


//above(line 317)i.e., resolving promise using IIFE:-
console.log('1. started getting country');
(
    async function () {
        try {
            const countrie = await whereAmI('portugal');
            console.log(`2. ${countrie}`);
        } catch (err) {
            console.error(`2: ${err.message} ❌`)
        }
        //following behaves like finally
        console.log('3. finished getting country');
    }
)();
//output:-
// 1. started getting country
// 2. You are in portugal
// 3. finished getting country


//Running promises in parallel:
//Combinator functions:race,allsetteled,any,all,etc.

// Promise.all() takes the array of promises and return the new promise that will run all the promises at the same time
//if any one promise gets rejected,all promises will get rejected
const get3Countries = async function (c1, c2, c3) {
    try {
        console.log('*****************************');
        //promises in sequence:->
        // const [countrie1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
        // const [countrie2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
        // const [countrie3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
        // console.log(countrie1);
        // console.log(countrie1.capital, countrie2.capital, countrie3.capital);//Dodoma Washington, D.C. Ottawa

        const countries = Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`)
        ]);
        console.log((await countries).map(c => c[0].capital));//["Dodoma", "Washington, D.C.", "Ottawa"] ....notice it is array
    } catch (err) {
        console.error(err);
    }
}
get3Countries('tanzania', 'usa', 'canada');

//Promise.race:returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects,
// with the value or reason from that promise.Returns single promise
(
    async function () {
        const response = await Promise.race([
            getJSON(`https://restcountries.com/v2/name/italy`),
            getJSON(`https://restcountries.com/v2/name/egypt`),
            getJSON(`https://restcountries.com/v2/name/mexico`),
            getJSON(`https://restcountries.com/v2/name/jdkkjds`),
        ]);
        console.log(response[0]);//not fixed ...can be even the rejected one promise(here in example, last fetch)
    }
)();

//if request took too long, reject it:-
const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long!'));
        }, sec * 1000)
    });
};
Promise.race([
    getJSON(`https://restcountries.com/v2/name/tanzania`),
    timeout(0.5)//try with multiple values
])
    .then(res => console.log(res[0]))
    .catch(err => console.log(err));//Error: Request took too long! ...if timeout is 0.5sec


//Promise.allSettled(): returns a promise that resolves after all of the given promises have either fulfilled or rejected, 
// with an array of objects that each describes the outcome of each promise.
Promise.allSettled([
    //promise will be resolved always
    Promise.resolve('Success'),
    //promise will be rejected always
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
]).then(res => console.log(res));
// output:-
// (3)[{… }, {… }, {… }]
// 0: { status: "fulfilled", value: "Success" }
// 1: { status: "rejected", reason: "ERROR" }
// 2: { status: "fulfilled", value: "Another Success" }

Promise.all([
    //promise will be resolved always
    Promise.resolve('Success'),
    //promise will be rejected always
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
]).then(res => console.log(res))
    .catch(err => console.log(err));
//output:-
// ERROR ....Promise.all() shortcircuits

//Promise.any():It returns a single promise that resolves as soon as any of the promises in the iterable fulfills, 
//with the value of the fulfilled promise.If no promises in the iterable fulfill(if all of the given promises are rejected), 
//then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.
Promise.any([
    //promise will be resolved always
    Promise.resolve('Success'),
    //promise will be rejected always
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
]).then(res => console.log(res))
    .catch(err => console.log(err));
// output:-
// Success ...return first fulfilled promise