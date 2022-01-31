// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const joseph = {
  firstName: 'Duc',
  lastName: 'Tran',
  'favorite food': 'Sea food',
  bestFriend: {
    firstName: 'Therese',
    lastName: 'Tran',
    'favorite food': 'Vegetarian food'
  }
};

// 2. console.log best friend's firstName and your favorite food
console.log(joseph.bestFriend.firstName);
console.log(joseph['favorite food']);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const myTicTacToe = [['-','O','-'],['-','X','O'],['X','-','X']];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
myTicTacToe[0][2] = 'O';

// 5. Log the grid to the console.
console.log(myTicTacToe[0]);
console.log(myTicTacToe[1]);
console.log(myTicTacToe[2]);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const myEmail = 'dt67@uw.edu';
const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);

console.log(emailRegExp.test(myEmail));


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
// Convert 'date string' to date
const assignDate = new Date(assignmentDate);
console.log(assignDate.toDateString());

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
//Set dueDate = assignmentDate
let dueDate = new Date(assignmentDate);
// Add 7 days more to dueDate
dueDate.setDate(dueDate.getDate() + 7);
// Display the result
console.log(dueDate.toDateString());

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
// Get the day of the month of dueDate and convert it to string with format "dd"
const dueDay = dueDate.getDate().toString().padStart(2,'0');
//get the month of dueDate
const dueMonth = dueDate.getMonth()+1;
//Get the name of the month of dueDate
const dueMonthName = months[dueDate.getMonth()];
// Get the year of dueDate
const dueYear = dueDate.getFullYear().toString();
// Create an HTML tag called "timeTag"
const timeTag =`<time datetime="${dueYear}-${dueMonth.toString().padStart(2,'0')}-${dueDay}">${dueMonthName} ${dueDay}, ${dueYear}</time>`;
// Display time tag in HTML page
const para = document.createElement('p')
const node = document.createTextNode(timeTag);
para.appendChild(node);
const elementDueDate = document.getElementById("dueDate");
elementDueDate.appendChild(para);

// 10. log this value using console.log
console.log(timeTag);