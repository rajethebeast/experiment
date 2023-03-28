// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world');
//     }, 20000);
// });

// promise.then(function(data) {
//     console.log(data);
// });

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world');
//     }, 2000);
// });

// promise.then(function(data) {
//     console.log(data + ' 1');
// });

// promise.then(function(data) {
//     console.log(data + ' 2');
// });

// promise.then(function(data) {
//     console.log(data + ' 3');
// });

//---multiple callbacks

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('We are all going to die');
//     }, 2000);
// });

// promise.then(function success(data) {
//     console.log(data + ' 1');
// }, function error(data) {
//     console.error(data + ' 3');
// });

// promise.then(function success(data) {
//     console.log(data + ' 2');
// }, function error(data) {
//     console.error(data + ' 2');
// });

// promise.then(function success(data) {
//     console.log(data + ' 3');
// }, function error(data) {
//     console.error(data + ' 1');
// });

//---calling multiple resolves
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world 1');
//         resolve('hello world 2');
//         resolve('hello world 3');
//         resolve('hello world 4');
//     }, 1000);
// });

// promise.then(function success(data) {
//     console.log(data);
// });

//----async/await

function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 500, 'Hello world 1');
    });
}

async function test() {
    let message = await job();
    console.log(message);

    return 'Hello world 2';
}

test().then(function(message) {
    console.log(message);
});