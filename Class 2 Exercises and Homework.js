// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const myObj = {
  firstName: 'Rick',
  lastName: 'Dalton',
  'favorite food': 'Salmon',
  bestFriend: {
    firstName: 'Bob',
    lastName: 'Smith',
    'favorite food': 'potatoes'
  }
}

// 2. console.log best friend's firstName and your favorite food
console.log(myObj['favorite food'])
console.log(myObj.bestFriend.firstName)

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToe = [
  ['-', 'O', '-'],
  ['-', 'X', 'O'],
  ['X', '-', 'X']
]

function printGrid(grid)
{
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i]
    for (let j = 0; j < row.length; j++) {
      if (j != 0) {
        process.stdout.write('\t')
      }
      process.stdout.write(grid[i][j])
    }
    process.stdout.write('\n')
  }
}

console.table(ticTacToe)
printGrid(ticTacToe)

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToe[0][2] = 'O'

// 5. Log the grid to the console.
console.table(ticTacToe)
printGrid(ticTacToe)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

// apparently the RFC 2822 standard email validation is this ugly string
// /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|
// \\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|
// \[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:
// (?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

// but for this exercise I will use this one. It adds the ability to have multiple components separated by dots or dashes
// both in the name and the domain components to the problem specification. It covers a significant portion of email addresses
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)+$/

console.log(emailRegex.test('a.b.c@x.com'))
console.log(emailRegex.test('a.b@x.com'))
console.log(emailRegex.test('a@x.com'))
console.log(emailRegex.test('a.b@x.y.com'))
console.log(emailRegex.test('a.b@x.y-z.com'))
console.log(emailRegex.test('a.b@x.y-z-com'))
console.log(emailRegex.test('a.b.@x-y.com'))
console.log(emailRegex.test('.b.@x-.com'))
console.log(emailRegex.test('a.b.@.com'))


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
let dateComponents = assignmentDate.split('/')
console.log(dateComponents)
let newDate = new Date(parseInt(dateComponents[2]), parseInt(dateComponents[0] ) - 1, parseInt(dateComponents[1]), 0, 0, 0, 0)
console.log(newDate.toString())
console.log(newDate.getTime())

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
function addDaysToDate(dateIn, days)
{
  const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000
  return new Date(dateIn.getTime() + (days * MILLISECONDS_PER_DAY))
}

let dueDate = addDaysToDate(newDate, 7)
console.log(dueDate.toString())

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

let timeTag = `<time datetime="${dueDate.getFullYear()}-${(dueDate.getMonth() + 1).toString().padStart(2,'0')}-${dueDate.getDate().toString().padStart(2, '0')}">${months[dueDate.getMonth()]} ${dueDate.getDate()}, ${dueDate.getFullYear()}</time>`

// 10. log this value using console.log
console.log(timeTag)