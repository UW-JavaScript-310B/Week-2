// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

let joel = {
  firstName: 'Joel',
  lastName: 'E',
  'favorite food': 'polvorone',
  bestFriend: {
    firstName: 'Ryan',
    lastName: 'V',
    'favorite food': 'soju'
  }
};

// 2. console.log best friend's firstName and your favorite food

console.log(joel.bestFriend.firstName);
console.log(joel.bestFriend['favorite food']);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let row1 = ['-', 'O', '-'];
let row2 = ['-', 'X', 'O'];
let row3 = ['X', '-', 'X'];
const ticTacToe = [row1, row2, row3];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

row1[2] = '0';

// 5. Log the grid to the console.

console.log(ticTacToe[0]);
console.log(ticTacToe[1]);
console.log(ticTacToe[2]);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

var myEmail = "foo@bar.baz";
const emailRegex = new RegExp("\S+[@]\S+[.]\S+");

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date

var assignmentDate = '1/21/2019';
const splitDate = assignmentDate.split("/");
const [month, date, year] = splitDate;
assignmentDate = new Date(year, month - 1, date);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

var dueDate = new Date(assignmentDate);
dueDate.setDate(dueDate.getDate() + 7);

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
var dueDay = dueDate.getDate();
var dueMonth = dueDate.getMonth();
var dueMonthStr = months[dueMonth];
dueMonth++;
var dueYear = dueDate.getFullYear();
let htmlDateTag = `<time dateTime=${dueYear}-0${dueMonth}-${dueDay}>${dueMonthStr} ${dueDay}, ${dueYear}</time>`;

// 10. log this value using console.log

console.log(htmlDateTag);