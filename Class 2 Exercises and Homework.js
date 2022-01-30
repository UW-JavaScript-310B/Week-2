// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const me = {
  firstName: 'Arthur',
  lastName: 'Rodrigues',
  'favorite food': 'cheeseburger',
  bestFriend: {
    firstName: 'John',
    lastName: 'Jacob',
    'favorite food': 'hot dogs'
  }
}


// 2. console.log best friend's firstName and your favorite food
console.log(me.bestFriend.firstName, me['favorite food']);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let nineGrid = [
  [" ", "O", " "],
  [" ", "X", "O"],
  ["X", " ", "X"],
]

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
nineGrid[0][2] = "O"

// 5. Log the grid to the console.
console.log(nineGrid)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const emailPattern = new RegExp('([0-9A-Za-z]+)@([0-9A-Za-z]+)\.([A-Za-z]+)');
const emailList = [
  'dw80085@optonline.net',      // true
  'nasor@att.net',              // true
  'yruan@outlook.com',          // true
  'wilson@yahoo.com',           // true
  'fallorn@live.com',           // true
  'dkrishna@hotmail.com',       // true
  'dcoppit@att.net',            // true
  'thomasj@optonline.net',      // true
  'brainless@att.net',          // true
  'psharpe@gmail.com',          // true
  'barlow@live.com',            // true
  'mchugh@hotmail.com',         // true
  'r777@something.awsome',      // true
  'This was hard',              // false
  'This is a way @ too fool',   // false
  'confuse @ me. Dude.'         // false
]


for (let i = 0; i < emailList.length; i++ ) {
  console.log(emailPattern.test(emailList[i]));
}

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const objAssignmentDate = new Date(assignmentDate);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

/* STUDENT NOTE: Convert assingment date to milliseconds and then add the numbe of milliseconds for
    7 days was the easiest solution I came up with.
*/
const dueDate = new Date(objAssignmentDate.getTime() + (7*24*60*60*1000));

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

function htmlTag() {
  let year = dueDate.getFullYear();
  let month = dueDate.getMonth();
  let date = dueDate.getDate();

  let monthWrite = month + 1;     // Because it's zero-indexed

  if ( monthWrite < 10 ) {
    monthWrite = "0" + monthWrite;
  }

  if (date < 10 ) {
    date = "0" + date;
  }
  let tagContent = '<time datetime="' + year + '-' + monthWrite + '-' + date + '">' + 
    months[month] + ' ' + date + ', ' + year +  '</time>'
  
  return tagContent
}
// 10. log this value using console.log
console.log(htmlTag());