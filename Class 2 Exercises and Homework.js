// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)


const me = { firstName: 'alicia',
              lastName: 'goodwin',
              favFood: 'cupcakes',
              bestFriend: { firstName: 'kelly',
                            lastName: 'Maz',
                            favFood: 'pizza'},

            };

// 2. console.log best friend's firstName and your favorite food

console.log("my best friend is named", me.bestFriend.firstName);
console.log("My favorite food is", me.favFood);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const ticTac = [ ["-", "O", "-"],
                 ["-", "X", "O"],
                 ["X", "-", "X"] ];


// 4. After the array is created, 'O' claims the top right square.
// Update that value.

let row1 = ticTac[0];
let row2 = ticTac[1];
let row3 = ticTac[2];

row1[0] = "O";

// 5. Log the grid to the console.
console.log(row1)
console.log(row2)
console.log(row3)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const emailAddresses = [ "myEmail", "alicia@foo", "me@you.com" ]  
const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

emailAddresses.forEach( (email) => { 
          console.log("Is email valid?", email, regex.test(email))
          } ); 

// NOTE TO TEACHER - I found this example online. Unless I absolutely have to, I find regular expressions online rather 
// than struggling with them. I just do not have the time and so far, have not needed to develop this expertise.
// foreach loops super common in ruby so this structure very familiar to me.


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

let divideStr = assignmentDate.split('/');

let newDate = new Date(divideStr[2], divideStr[0] - 1, divideStr[1]);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

let dueDate = newDate.setDate(newDate.getDate() + 7);
//dueDate is a number in milliseconds

let newDueDate = new Date(dueDate);
//I do not understand why I need to declare dueDate as a date here?
// why can't I use dueDate.convert this date object with some date method
// the date stuff in JS is confusing -- why setDate and getDate above?
// I wonder what's happening -- is this consistent js or some outlier?
//Also, I suspect I will find out as the class goes on

console.log("DUE DATE", newDueDate);

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

 const parseDate = new Date (newDueDate);

 
 const month = parseDate.getMonth();
 const day = parseDate.getDate();
 const year = parseDate.getFullYear();



// 10. log this value using console.log

console.log(`<time datetime = "${year}-${month + 1}-${day}"> ${months[month]} ${day}, ${year}</time>`);
