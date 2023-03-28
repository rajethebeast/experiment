// const num = arrayFromRange(-10, -4);

// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i = min; i <= max; i++)
//     output.push(i);
//     return output;
// }

// console.log(num);

//---without include---
// 

// ---except method adds everything except given array

// const num = [1, 2, 3, 4, 5, 6];

// const output = except(num, [1,2]);

// console.log(output);

// function except(array, exclude) {
//     const output = [];
//     for (let element of array) {
//         if (!exclude.includes(element))
//             output.push(element);
//     }
//     return output;
// }


//----Moving an element

// const num = [1, 2, 3, 4, 5];
// const output = move(num, 0, -1);

// console.log(output);

// function move(array, index, offset) {

//     const position = index + offset;
//     if(position>=array.length || position<0){
//         console.error('Invalid Offset');
//         return;
//     }

//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(position, 0, element);
//     return output;
// }

//----Count occurance
// const num = [1, 2, 3, 1, 2, 4, 1];

// const count = countOccurance(num, 3);

// function countOccurance(array, searchElement) {

//     return array.reduce((count, current) => {
//         const occur = (current === searchElement) ? 1 : 0;
//         return occur + count;
//     }, 0);
// }
// console.log(count);


//---- max in array

const num = [1, 2, 10, 3, 4, 5];

let max = getMax(num);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    return array.reduce((count, current) => {
        return (current > count) ? current : count;
    });

}
