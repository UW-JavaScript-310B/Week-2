// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const friendName = 'bestFriend'
const friendLast = 'G'

const bestFriend ={
  friendName,
  friendLast,
  'favorite food': 'tacos',
  friendFood: ''
}

const selfName = 'Pablo'
const selfLast = 'Marcel'

const personMe ={
  selfName,
  selfLast,
  'favorite food': 'Salmon',
  bestFriend: bestFriend
}

// 2. console.log best friend's firstName and your favorite food

console.log('my best friend\'s name '+personMe.bestFriend['friendName'])
// console.log(personMe.bestFriend['friendLast'])
// console.log(personMe.bestFriend['favorite food'])
// console.log(personMe.bestFriend['friendFood'])
console.log('my favorite food '+personMe['favorite food'])

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const twoDimensions =[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(twoDimensions[0], twoDimensions[1],twoDimensions[2])

const ticTac =[
  ['-','o','-'],
  ['-','x','o'],
  ['x','-','x']
]

console.log('\n')

ticTac[0][2]='o'

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

// 5. Log the grid to the console.

console.log(ticTac[0].join(""))
console.log(ticTac[1].join(""))
console.log(ticTac[2].join(""))

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

email = 'foo@bar-bar.baz'

// var emailTest = email.match(/^\w+@[a-zA-Z0-9_-]+?\.[a-zA-Z]{1,3}$/)

var emailTest = email.match(/^\w+@[a-zA-Z0-9_-]+?\.[a-zA-Z]+$/)

console.log(emailTest)

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date

const assignmentDate = '1/21/2019';

//date is zero indexed

const date = new Date(assignmentDate);
const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];

console.log("month index is " +month);
console.log("day is " +day);
console.log("year is " +year);
console.log("date is " +date);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

var dueDate = new Date(assignmentDate);

dueDate.setDate(dueDate.getDate()+7);

console.log(dueDate)

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help

const [dueMonth, dueDay, dueYear]       = [dueDate.getMonth(), date.getDate(), date.getFullYear()];

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

console.log(months[dueMonth]);
console.log(dueDay);
console.log(dueYear);

htmlTimeTag= '<time dateTime="YYYY-MM-DD">'+months[dueMonth]+" "+dueDay+","+" "+dueYear+"</time>";

// 10. log this value using console.log

console.log(htmlTimeTag);