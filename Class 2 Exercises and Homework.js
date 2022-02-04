// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const bestFriend = {
  firstName: "Rhys",
  lastName: "Fisher",
  favoriteFood: "Teriyaki"
};
const myself = {
  firstName: "Evan",
  lastName: "Thomas",
  favoriteFood: "Pho",
  bestFriend: bestFriend
};

console.log(myself);
console.log(bestFriend);

// 2. console.log best friend's firstName and your favorite food
console.log(bestFriend.firstName);
console.log(myself.favoriteFood);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
let arr = [['-'],['O'],['-'],['-'],['X'],['O'],['X'],['-'],['X']]

console.log(`
    ${arr[0]} ${arr[1]} ${arr[2]}
    ${arr[3]} ${arr[4]} ${arr[5]}
    ${arr[6]} ${arr[7]} ${arr[8]}
`)


// 4. After the array is created, 'O' claims the top right square.
// Update that value.

arr[2] = ['O']


// 5. Log the grid to the console.
console.log(`
    ${arr[0]} ${arr[1]} ${arr[2]}
    ${arr[3]} ${arr[4]} ${arr[5]}
    ${arr[6]} ${arr[7]} ${arr[8]}
`)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const goodEmail = 'foo@bar.baz'
const badEmail1 = 'foobarbaz'
const bademail2 = 'foobar.baz'
const bademail3 = 'foobar@.baz'
const bademail4 = '@baz.com'
const bademail5 = '@baz.com'

const emailArray = [goodEmail, badEmail1, bademail2, bademail3, bademail4, bademail5]

const emailChecker = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g


for(let i = 0 ; i < emailArray.length; i++){
  if(emailArray[i].match(emailChecker)){
    console.log(`${emailArray[i]} is a valid email`)
  
  } else {
  
    console.log(`${emailArray[i]} is not a valid email`)
  }

};

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const parse = Date.parse(assignmentDate);
const date = new Date(parse);
console.log(date);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const assignmentDueDate = new Date(parse + 604800000);

console.log(assignmentDueDate);

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
// Need help with this in class. My fault but I can't really figure out what is being asked of me. //

// 10. log this value using console.log
