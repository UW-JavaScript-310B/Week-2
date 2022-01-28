// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

let me = {
  firstName: 'Joseph',
  lastName: 'O\'Donnell',
  'favorite food': 'Pasta',
  bestFriend: {
    firstName: 'Max',
    lastName: 'Power',
    'favorite food': 'Duff Beer'
  }
}
// 2. console.log best friend's firstName and your favorite food

console.log(me.bestFriend.firstName);
console.log(me['favorite food']);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const ttt = [['-','O','-'],['-','X','O'],['X','-','X']];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

ttt[0][2] = 'O';

// 5. Log the grid to the console.

ttt.map(row => console.log(row.join(' ')));

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const email = "foo@bar.baz";
let regex = /^([^\s@]+)@([^\s\.,@]+)\.{1}([^\s\.,]+)$/;

if(regex.test(email)) {
  console.log(`Valid email address\n--\n$Username = ${email.match(regex)[1]}\nHost = ${email.match(regex)[2]}\nTLD = ${email.match(regex)[3]}`);
}
else {
	console.log(`Invalid email address`);
}
// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date

const assignmentDate = '1/21/2019';
const dateString = new Date(assignmentDate);
const utcDate = dateString.toUTCString();

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

const assignmentDateMilli = new Date(assignmentDate).getTime();
const dueDate = new Date(assignmentDateMilli + (7*24*60*60*1000));
const dueDateString = dueDate.toUTCString();

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

const date = dueDate.getDate();
const month = dueDate.getMonth();
const year = dueDate.getFullYear();

const dateTime = (`<time datetime="${year}-${month+1}-${date}">${months[month]} ${date}, ${year}</time>`);

// 10. log this value using console.log

console.log(dateTime);