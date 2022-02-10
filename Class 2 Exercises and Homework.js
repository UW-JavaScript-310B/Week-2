// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

let me = {
  firstName : 'Miguel',
  lastName : 'Marin',
  'favorite food' : 'Pizza',
  bestFriend: {
      firstName : 'Jane',
      lastName : 'Doe',
      'favorite food' : 'Pasta'
  }
};

// 2. console.log best friend's firstName and your favorite food

console.log(me.bestFriend);

console.log (me['favorite food']);


// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let row1 = ['-','o','-'];
let row2 = ['-','x','o'];
let row3 = ['x','-','x'];

let ticTacToe = [row1,row2,row3];

console.log(ticTacToe)

console.log(row1);
console.log(row2);
console.log(row3);

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

row1[2] = 'o';


// 5. Log the grid to the console.

console.log(row1);
console.log(row2);
console.log(row3);


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test


const regex = /(\w+)+(@)+(\w+)+(.)+(\w+)/;
regex.test('foo@bar.baz');

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

const strToDate = new Date(assignmentDate);

console.log(strToDate);


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

const dueDateDay = strToDate.getDate() + 7;

console.log (dueDateDay);


const assignmentDateTime = new Date(assignmentDate);

const dueDate = new Date(assignmentDateTime.getTime() + 86400000 * 7); //milliseconds in a day * 7

console.log(dueDate);



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

const year = dueDate.getFullYear();

const htmlTimeTagStart = '<time datetime="2019-28-01">';
const htmlTimeTagBody = `${months[0]} ${dueDateDay}, ${year}`;
const htmlTimeTagEnd= '</time>';

const htmlTimeTag = `${htmlTimeTagStart} ${htmlTimeTagBody} ${htmlTimeTagEnd}`;


// 10. log this value using console.log

console.log(htmlTimeTag);
