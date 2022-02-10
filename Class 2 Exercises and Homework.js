// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const person2 = {firstName: 'Kelly' , lastName: 'Clarkson' , food: 'Pancakes'};
const person = {firstName: 'Ryan', lastName: 'Reynolds', food: 'Spam Musubi', bestFriend: person2};
//const bestFriend = {firstName: 'Kelly', lastName: 'Clarkson', food: 'Pancakes'}; 
let {firstName, lastName} = person;

// 2. console.log best friend's firstName and your favorite food
console.log(person.bestFriend.firstName);
console.log(person.food);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const ticTacToe = 
[['-', '0', '-'],
['-', 'X', '0'],
['X', '-', 'X']];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

ticTacToe[0] = ['-', '0', '0'];

// 5. Log the grid to the console.
console.log(
`${ticTacToe[0]}
${ticTacToe[1]} 
${ticTacToe[2]}`)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const emailString = "foo@bar.baz";

const regexEmail = 
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailString);

console.log(regexEmail);

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const startDate = new Date(assignmentDate);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const dueDate = '1/28/2019';
const endDate = new Date (dueDate);
//output Mon Jan 28 2019 00:00:00 GMT-0800 (Pacific Standard Time)

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
let day = endDate.getDate();
let monthNum = endDate.getMonth();
let monthStr = months[monthNum];
let year = endDate.getFullYear();
let timeTag = `<time datetime="${year}-${monthNum + 1}-${day}">${monthStr} ${day}, ${year}</time>`;

// 10. log this value using console.log

console.log(timeTag);
