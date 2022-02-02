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
console.log('Response to My Info Exercise')
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


console.log('Response to Tic Tac Toe Exercise');
console.log(tictactoe[0]);
console.log(tictactoe[1]);
console.log(tictactoe[2]);

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

//console.log(tictactoe.length -1)


console.log('Modify the last value of row 1')
tictactoe[0].pop()
console.log(tictactoe[0])
tictactoe[0].push('O')
console.log(tictactoe[0])

// 5. Log the grid to the console.
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
//^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '2/03/2022';
const endDate = new Date(2020, 3, 1);
const unixAssignmentDate = assignmentDate.getTime();
console.log(unixAssignmentDate)

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
//extendedDate = 

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


// 10. log this value using console.log