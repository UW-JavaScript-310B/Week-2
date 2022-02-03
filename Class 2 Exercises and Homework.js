// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const myInfo = {
  firstName: 'Joann',
  lastName: 'Cahill',
  'favorite food': 'Spaghetti',
  bestFriend: {
    firstName: 'Loretta',
    lastName: 'Piscatella',
    'favorite food': 'Pizza'
  }
}


// 2. console.log best friend's firstName and your favorite food
console.log(' ');
console.log('Response to My Info Exercise');
console.log(myInfo["favorite food"]);
console.log(myInfo.bestFriend['firstName']);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let row1Col1 = '-';
let row1Col2 = 'O';
let row1Col3 = '-';
let row2Col1 = '-';
let row2Col2 = 'X';
let row2Col3 = 'O';
let row3Col1 = 'X';
let row3Col2 = '-';
let row3Col3 = 'X';


let tictactoe = [
  [row1Col1, row1Col2, row1Col3],
  [row2Col1, row2Col2, row2Col3],
  [row3Col1, row3Col2, row3Col3],
]

console.log(' ');
console.log('Response to Tic Tac Toe Exercise');
console.log(tictactoe[0]);
console.log(tictactoe[1]);
console.log(tictactoe[2]);

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

//console.log(tictactoe.length -1)

console.log(' ');
console.log('Modify the last value of row 1');
tictactoe[0].pop();
console.log(tictactoe[0]);
tictactoe[0].push('O');
console.log(tictactoe[0]);

// 5. Log the grid to the console.
console.log(' ');
console.log('Response to Tic Tac Toe with change Exercise');
console.log(tictactoe[0]);
console.log(tictactoe[1]);
console.log(tictactoe[2]);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// expected output: Array ["T", "I"]

const email = 'j-cahill1@aol.com';
const email1 = 'jcahill@ aol.com';
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const found = email.match(regex);
const notFound = email1.match(regex);

console.log(' ');
console.log('Response to Regex validation of email Exercise');
console.log(' ');
console.log('Email is valid - array returns');
console.log(found);
console.log(' ');
console.log('Email is not valid - returns null');
console.log(notFound);


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date

const assignmentDate = Date.parse('2/03/2022');
let convertedAssignmentDate = new Date(assignmentDate);


console.log(' ');
console.log('Response to Assignment Date Exercise');
//console.log(assignmentDate);
console.log(' ');
console.log('Response for Converted Date');
console.log(convertedAssignmentDate);


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
//extendedDate = 

const assignmentDate3 = new Date(assignmentDate);
const unixExtendedDate = assignmentDate3.setDate(assignmentDate3.getDate() + 7);
const extendedDate = new Date(unixExtendedDate);
console.log(' ');
console.log('Response for Extended Date');
console.log(extendedDate);



// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

numericFullYear = extendedDate.getFullYear();
numericMonth = extendedDate.getMonth() + 1;
numericDate = extendedDate.getDate();
textMonth = months[extendedDate.getMonth()];
/*
console.log(numericFullYear);
console.log(numericMonth);
console.log(numericDate);
console.log(textMonth);
*/

// 10. log this value using console.log

dueDate = `${numericFullYear}-${numericMonth}-${numericDate}`;
dueDateText = `${textMonth} ${numericDate}, ${numericFullYear}`;
console.log(' ');
console.log('Display date format for HTML tag');
console.log(dueDate);
console.log(dueDateText);