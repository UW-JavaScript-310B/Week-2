// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

let person = {firstName: "Yuhong",
              lastName: "Wang",
              "favorite food": "pasta",
              bestFriend: person};
person.bestFriend = {firstName: "Jenny", lastName: "Smith", "favorite food": "pizza"}
console.log(person) 
// result is as follows:
//{firstName: 'Yuhong', lastName: 'Wang', favorite food: 'pasta', bestFriend: {…}}
//bestFriend: {firstName: 'Jenny', lastName: 'Smith', favorite food: 'pizza'}
//favorite food: "pasta"
//firstName: "Yuhong"
//lastName: "Wang"

// 2. console.log best friend's firstName and your favorite food
console.log(person.bestFriend.firstName) // result: Jenny
console.log(person["favorite food"]) //result: pasta

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let arrTicTacToe = [["_", "O", "_"], ["_", "X", "O"], ["X", "_", "X"]];
arrTicTacToe
//result is as follows:
//(3) [Array(3), Array(3), Array(3)]
//0: (3) ['_', 'O', '_']
//1: (3) ['_', 'X', 'O']
//2: (3) ['X', '_', 'X']

length: 3
// 4. After the array is created, 'O' claims the top right square.
// Update that value.
arrTicTacToe[0][2] = "O"


// 5. Log the grid to the console.
console.log(arrTicTacToe)
//result is as follows:
//(3) [Array(3), Array(3), Array(3)]
//0: (3) ['_', 'O', 'O']
//1: (3) ['_', 'X', 'O']
//2: (3) ['X', '_', 'X']
//length: 3
//[[Prototype]]: Array(0)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

let regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
regex1.test("a@b.com") //result is: true

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
function convertToDate(dateString) {
  //  Convert a "dd/MM/yyyy" string into a Date object
  let d = dateString.split("/");
  let dat = new Date(d[2], d[0] - 1, d[1]);
  return dat;     
}
//function call
convertToDate(assignmentDate) //result is: Wed Jan 29 2020 00:00:00 GMT-0800 (Pacific Standard Time)

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
function getDueDate (assignmentDate) {
  let date = convertToDate(assignmentDate);
  date = new Date(date.getTime()+(7*24*60*60*1000));
  return date;
}
//function call
let dueDate = getDueDate('1/21/2020') //result is: Tue Jan 28 2020 00:00:00 GMT-0800 (Pacific Standard Time)

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
function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

let htmlStr = `<time datetime="${getFormattedDate(dueDate)}">${months[dueDate.getMonth()]} ${dueDate.getDate()}, ${dueDate.getYear() + 1900}</time>` 
//result above is: '<time datetime="2020-01-28">January 28, 2020</time>'

// 10. log this value using console.log
console.log(htmlStr) //result is: <time datetime="2020-01-28">January 28, 2020</time>