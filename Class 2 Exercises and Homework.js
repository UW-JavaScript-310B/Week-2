// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const person = {
  firstName: 'Meghan',
  lastName: 'Cahill',
  favoriteFood: 'Carbohydrates',
  bestFriend: {
    firstName: 'Jack',
    lastName: 'Cahill',
    favoriteFood: 'Paper towels',
  }
};
console.log(person)

// 2. console.log best friend's firstName and your favorite food
console.log(person.bestFriend.firstName)
console.log(person.favoriteFood)

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
let ticTacToe =
[['-', 'O', '-'],
['-', 'X', 'O'],
['X', '-', 'X']]

console.log(ticTacToe[0])
console.log(ticTacToe[1])
console.log(ticTacToe[2])

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToe[0].splice(2, 1,'O')

// 5. Log the grid to the console.

console.log(ticTacToe[0])
console.log(ticTacToe[1])
console.log(ticTacToe[2])

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const myEmail = 'cahillmn@aol.com';
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const found = myEmail.match(re);

console.log(found);

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const convertedDate = Date.parse(assignmentDate);
const convertedDate2 = new Date(convertedDate);
console.log(convertedDate2);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const unixDate = convertedDate2.setDate(convertedDate2.getDate() + 7);
const dueDate = new Date(unixDate);
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
const dueDateYear = (dueDate.getFullYear());
console.log(dueDateYear);
const dueDateMonth = (dueDate.getMonth() + 1);
console.log(dueDateMonth);
const dueDateDay = dueDate.getDate();
console.log(dueDateDay);
const formattedDueDate = `${dueDateYear}-${dueDateMonth}-${dueDateDay}`;
console.log(formattedDueDate);

const fullMonth = months[dueDate.getMonth()];
console.log(fullMonth)
const longDate = `${fullMonth} ${dueDateDay}, ${dueDateYear}`;

const html = `'<time datetime="'${formattedDueDate}'">${longDate}</time>'`

// 10. log this value using console.log
console.log(html)