// let points = 1010;
// let type = points > 100 ? 'gold':'silver';
// console.log(type);

// //-------

//  let a = 'RED';
//  let b = 'BLUE';
//  let c;
//  c=a;
//  a=b;
//  b=c;

//  console.log(a);
//  console.log(b);

//  const person={
//     name:'Advait',
//     age: 22
//  }

//  for( let index in person)
//  console.log(index, person[index]);

// function maxi(a,b){
//     return (a>b)?a:b
// }
// let num = maxi(22,23);
// console.log(num);

// function isLandscape(wd, ht) {
//     return (wd > ht)
// } 
// console.log(isLandscape(300,500));

// const output = fizzBuzz('ki');
// console.log(output);

// function fizzBuzz(input) {
//     if ((input % 3 === 0) &&(input % 5 === 0)) return 'FizzBuzz';
//     else if (input % 5 === 0) return 'Buzz';
//     else if (input % 3 === 0) return 'Fizz';
//     else if (typeof input !== 'number') return NaN;
//     else return input;
// }

// checkSpeed(200);

// function checkSpeed(speed) {
// const speedLimit = 70;
// const kmPerPoint = 5;
//     if (speed < speedLimit + kmPerPoint) console.log('Ok');
//     else {
//         const points = Math.floor((speed-speedLimit)/kmPerPoint);
//         if(points>=12)
//         console.log('License Suspended');
//         else
//         onsole.log('Points', points);
//     }
// }

// showNumbers(10);

// function showNumbers(lim) {

//     for (i = 0; i <= lim; i++) {
//         const msg = (i%2 === 0)?'EVEN':'ODD';
//         console.log(i,msg);
//     }
// }

showStars(5);

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for (i = 0; i < row; i++)
//         pattern+='*';
//         console.log(pattern);
//     }

// }