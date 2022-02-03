// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const bestFriendObj = {
  firstName:'Micheal',
  lastName:'Jordan',
  'favorite food': 'Steak'

}

const CarlosObj = {
  firstName : 'Carlos',
  lastName : 'Caceres',
  'favorite food': 'Steak',
  bestFriend: bestFriendObj
}
// 2. console.log best friend's firstName and your favorite food

console.log(`
  I'm ${CarlosObj.firstName} and this is my friend ${CarlosObj.bestFriend.firstName},
  My favorite food is ${CarlosObj['favorite food']}

`)

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
let ticTacArray = [
  ['-'],['O'],['-'],['-'],['X'],['O'],['X'],['-'],['X']
]

console.log(`
Grid 1:

    ${ticTacArray[0]} ${ticTacArray[1]} ${ticTacArray[2]}
    ${ticTacArray[3]} ${ticTacArray[4]} ${ticTacArray[5]}
    ${ticTacArray[6]} ${ticTacArray[7]} ${ticTacArray[8]}
`)
// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacArray[2]=['O']


// 5. Log the grid to the console.

console.log(`
Grid 2:

    ${ticTacArray[0]} ${ticTacArray[1]} ${ticTacArray[2]}
    ${ticTacArray[3]} ${ticTacArray[4]} ${ticTacArray[5]}
    ${ticTacArray[6]} ${ticTacArray[7]} ${ticTacArray[8]}
`)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const email1 = "carlos.com"
const email2 = "carlos@.com"
const email3 = "carlosmail.com"
const email4 = "carlos@mail.com"

const basic_regex_email= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;
const unicode_and_basic_email_regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let emailList = [email1, email2, email3, email4]

for(let i = 0 ; i < emailList.length; i++){
    if(!emailList[i].match(unicode_and_basic_email_regex)){
      console.log(`
        ${emailList[i]} : \u2717 Invalid`)
    }
    else{
      console.log(`
        ${emailList[i]} : \u2713 Valid`)
    }

}

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
let parsedDate = Date.parse(assignmentDate)
let date = new Date(parsedDate)
console.log(`

String: ${parsedDate} or ${assignmentDate}


String -> Date : ${date}`)
// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
let day = (((1000)*60)*60)*24
let sevenDays = day * 7
let date_in_milli = new Date(date).getTime()
let laterDate= new Date(date_in_milli + sevenDays)
console.log(`

String -> Date + 7 Days: ${laterDate}`)


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

let htmlTag = `<time datetime="${laterDate.getFullYear()}-${laterDate.getMonth()}-${laterDate.getDate()}">${months[laterDate.getMonth()]} ${laterDate.getDate()}, ${laterDate.getFullYear()}</time>`
document.write(htmlTag)



// 10. log this value using console.log
console.log('html Tag:',htmlTag, '\n','JS Script:', '<time datetime="${laterDate.getFullYear()}-${laterDate.getMonth()}-${laterDate.getDate()}">${months[laterDate.getMonth()]} ${laterDate.getDate()}, ${laterDate.getFullYear()}</time>'   ) 


