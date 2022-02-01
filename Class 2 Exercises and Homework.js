// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const person = {
  'firstName': 'Himanshi',
  'lastName': 'Gupta',
  'favorite food' : 'Indian cusine',
  'bestFriend':{
    'firstName': 'Tvesha',
  'lastName': 'Singhal',
  'favorite food' : 'Indian cusine',
  }
}

// 2. console.log best friend's firstName and your favorite food
console.log("My best friend's firstName is " + person.bestFriend.firstName + " and my favorite food is " + person['favorite food'] +".")

// 3. Create an array to represent this tic-tac-toe board
// -O- 
// -XO
// X-X
let ticTacToe = [['-','o','-'],['-','x','o'],['x','-','x']];
console.log(`${ticTacToe[0].join('')} \n` + 
`${ticTacToe[1].join('')} \n` +
`${ticTacToe[2].join('')}`);

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToe[0][ticTacToe[0].length-1] = 'o';


// 5. Log the grid to the console.
console.log(`${ticTacToe[0].join('')} \n` + 
`${ticTacToe[1].join('')} \n` +
`${ticTacToe[2].join('')}`);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const myEmail = 'foo@bar.baz';
const regExp = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/);

console.log(regExp.test(myEmail));


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

const newDate = new Date(assignmentDate); 
console.log(newDate.toDateString());


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

const dueDate = new Date(assignmentDate);
dueDate.setDate(dueDate.getDate()+7)
console.log(dueDate.toDateString());
console.log(dueDate.toLocaleDateString());

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
const dueDateMonth = months[dueDate.getMonth()];
const year = dueDate.getFullYear();

let datestring =  dueDate.getFullYear()+ "-" +("0"+(dueDate.getMonth()+1)).slice(-2) + "-" +("0" + dueDate.getDate()).slice(-2);

const timeTag = document.createElement("time");
timeTag.setAttribute('datetime', datestring);
timeTag.innerText = dueDateMonth + " " +("0" + dueDate.getDate()).slice(-2) + ", " +year;

// 10. log this value using console.log
console.log(timeTag);