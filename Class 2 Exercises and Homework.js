// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

//trying to keep personally identifying information off GitHub
const redacted = {
  firstName: "redacted-first-name",
  lastName: "redacted-last-name",
  "favorite food": "Panang Curry",
  bestFriend: {
    firstName: "redacted-friend-first-name",
    lastName: "redacted-friend-last-name",
    "favorite food": "unknown",
  }
};

// 2. console.log best friend's firstName and your favorite food

console.log(`${redacted.bestFriend.firstName}, ${redacted["favorite food"]}`);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let ticTacToe = [
  ['-','O','-'],
  ['-','X','O'],
  ['X','-','X']
];

console.log(`${ticTacToe[0]}
${ticTacToe[1]}
${ticTacToe[2]}`);

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

ticTacToe[0][2] = "O"; 

// 5. Log the grid to the console.

console.log(`${ticTacToe[0]}
${ticTacToe[1]}
${ticTacToe[2]}`);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

/\w+[@]\w+[.]\S/
/\S+[@{1}]\S+[.{1,}]+\w{1,}/

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

function getDate (inputDate) {
  let dateDate = new Date(inputDate);
  return dateDate;
}

console.log(getDate(assignmentDate));

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

function getDueDate (inputDate, days) {
  let dateDateUTC = new Date(inputDate).getTime();
  let assignmentPeriod = days * 86400000; // 1 day = 86400000ms
  let dueDateMilliSec = dateDateUTC + assignmentPeriod;
  let dueDate = new Date(dueDateMilliSec);
  return dueDate;
}

console.log(getDueDate(assignmentDate, 7));

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

function getDueDate4HTML (inputDate, days) {
  let dateDateUTC = new Date(inputDate).getTime();
  let assignmentPeriod = days * 86400000; // 1 day = 86400000ms
  let dueDateMilliSec = dateDateUTC + assignmentPeriod;
  
  let dueDate = new Date(dueDateMilliSec);

  let answerYear = dueDate.getFullYear();
  let answerMonth = dueDate.getMonth() + 1;
  let monthName = months[answerMonth - 1];

  let answerDate = dueDate.getDate();
  let answer = `${monthName} ${answerDate}, ${answerYear}`;

  return `<time datetime="${answerYear}-${answerMonth}-${answerDate}">${answer}</time>`;
}

getDueDate4HTML(assignmentDate, 7);

// 10. log this value using console.log

console.log(getDueDate4HTML(assignmentDate, 7));
