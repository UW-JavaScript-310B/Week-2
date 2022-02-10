// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const person = {
  firstName:'Sonal',
  lastName: 'Gupta',
  favoritefood:'Pizza',
  bestFriend : {
    bestFriendFirstName:'Sonia',
    bestFriendLastName:'Singh',
    bestFriendFavoriteFood:'Pasta'
  }
};
console.log('Q1 --> Answer');
console.log(person.favoritefood);
console.log(person.bestFriend);

// 2. console.log best friend's firstName and your favorite food
console.log('Q2 --> Answer');
console.log(person.bestFriend.bestFriendFirstName);
console.log(person.bestFriend.bestFriendFavoriteFood);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
console.log('Q3 --> Answer');
const arr = [['-O-'],['-XO'],['X-X']];
console.log(arr[0]+'\n'+arr[1]+'\n'+arr[2]);

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
console.log('Q4 --> Answer');
arr[0] = '--O';
console.log(arr[0]);

// 5. Log the grid to the console.
console.log('Q5 --> Answer');
console.log(arr);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
console.log('Q6 --> Answer');
const myEmail1 = 'foo@bar.2';
const myEmail2 = 'foo@bar.baz';
const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
console.log(regex.test(myEmail1));
console.log(regex.test(myEmail2));

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
Date.parse(assignmentDate);
console.log('Q7 Answer --> ' +assignmentDate);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
var dueDate = new Date(assignmentDate);
dueDate.setDate(dueDate.getDate()+7);
console.log('Q8 Answer -->'+dueDate);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help

console.log('Q9. --> Answer');
const currentDate = new Date(dueDate);
const date = currentDate.getDate();
const month = currentDate.getMonth(); 
const year = currentDate.getFullYear();
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
const dateWithFullMonthName = date + "-" + months[month] + "-" + year;

// 10. log this value using console.log
var newDate = new Date(dueDate.setMonth(dueDate.getMonth()+8));
console.log('Q10 --> Answer');
console.log(dateWithFullMonthName);
