//Part 1: Refactoring Old Code
//Part 1: Fizz Buzz
//refactor

// let num = 0;
// for (num <= 100; num++;) {
//     console.log((num % 3 ? "" : 'Fizz') + (num % 5 ? "" : 'Buzz') || num);
//     num = num++;
// }

//starting number
//while a number is less than 100 perform the following
//if the number is divided by 3 == 0 is true print fizz
// if the number is divided by 5 == 0 is true print buzz
//if both are true, print both fizzbuzz
//otherwise print the number
//new value for the number is numbert + 1
//contine loop until value reaches 100

//prime

//Part 3: Feeling Loopy

// const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// for(let char of str){
//     console.log(char)
// } for(cells=0; cells <=5; cells++){
//     for (const _comma of str) {
//         delete str[','];
//         console.log(str)
//         break
//     }   
// }   

//Part 2: Expanding Functionality

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// let columns = []
// let info = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// for(columns= 0; columns <= info.length; columns++){
//     let newList = []
//     let _split = info.split("\n");
//     console.log(_split);
//     break;
// }



//Transforming Data

let arrays = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
  ];

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let headers = [];
for (let i = 0; i <= 3; i++) {
  headers.push(arrays[0][i])
//   console.log(headers);
}
rows = [];
for (let i = 1; i < arrays.length; i++) {
    let items = arrays[i];
    let pair = {};
    for (let valuePairs = 0; valuePairs < items.length; valuePairs++){
        pair[headers[valuePairs]] = items[valuePairs];
    }
    rows.push(pair)
}
// console.log(rows)


// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

let chart = rows;
chart.push(`{ id: "7", name: "Bilbo", occupation: "None", age: "111" }`);
chart.splice(1,2, `{ id: "48", name: "Barry", occupation: "Runner", age: "25" }`)
console.log(chart)

// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
ages = [41, 25, 90, 26, 111]
let add = 0;
for(let x = 0; x < ages.length; x++){
    add =+ ages[x];
}
console.log(`average age is ` + add/ages.length);


// As a final task, transform the final set of data back into CSV format.
for(y= 0; y <= chart.length; y++){
    let _split = chart.splice("{");
    console.log(_split);
        break;
    }

