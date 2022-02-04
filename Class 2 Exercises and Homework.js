// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const person = {
  firstName: 'James',
  lastName: 'Crockett',
  'favorite food': 'Sushi',
  bestFriend: {
    firstName: 'Evan',
    lastName: 'Baty',
    'favorite food': 'Steak',
  }
};


// 2. console.log best friend's firstName and your favorite food

console.log(`${person.bestFriend.firstName}, ${person['favorite food']}\n`);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToe = [['-','0','-'],['-','X','O'],['X','-','X']];



// 4. After the array is created, 'O' claims the top right square.
// Update that value.

// splice (index, element to be deleted, )

ticTacToe.splice(0,0,['-','0','0']);

// 5. Log the grid to the console.
console.log(ticTacToe[0]);
console.log(ticTacToe[1]);
console.log(ticTacToe[2]);




// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const badEmail = 'random entry';
const goodEmail = 'good@times.com';

function emailChecker(email) {
  const emailChecker = /^[a-zA-Z\d\S]+@[a-zA-Z\d\S]+.[a-zA-Z\S]$/;
  if (emailChecker.test(email)) {
    console.log("a valid email.");
  } else {
    console.log("a invalid email.");
  }
}

console.log(`${badEmail} email format is`);
emailOne = emailChecker(badEmail);

console.log(`\n${goodEmail} email format is`);
emailTwo = emailChecker(goodEmail);

//console.log(`${badEmail} status is: ${emailChecker(badEmail)}`);


//console.log (`Cost per square inch of 13in Pizza is $${costPizza13.toFixed(2)}.`);

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
let convertDate = new Date(assignmentDate);
console.log(`\nDate string has been converted to ${convertDate}`);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const dueDate = convertDate.getDate() + 7;
console.log(`Due date is day ${dueDate}.`); 


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

for (let i = 0; i < months.length; i++) {
  let dueDate = months[i];
  
}



// 10. log this value using console.log
