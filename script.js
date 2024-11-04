console.log('hello world')
var a;
var b = 2;
console.log(a)
var a = 7;
console.log(a)

//initialize these three variables
var a = 5;
var b = 10;
var c = "i am a ";

a = a + 1;
b = b + 5;
c = c + "string!";
console.log(a);
console.log(b);
console.log(c);

var sum = 10 + 10;
console.log(sum);
var difference = 45 - 33;
console.log(difference);

var product = 8 * 10;
console.log(product);

var quotient = 66 / 33;
console.log(quotient);

var myVar = 87;
myVar++
console.log(myVar);

var myVar = 11;
myVar--
console.log(myVar);

var product = 2.0 * 0.0;
console.log(product);

var remainder;
var remainder = 11 % 3;
console.log(remainder);

var firstname = "Opoku ";
var lastname = "Gideon";
var fullname = firstname + lastname;
console.log(fullname);

var myStr = "firstline\n\t\\secondline\nthirdline";
console.log(myStr);

var myStr = "This is the strat." + "This is the end."
console.log(myStr);

var myStr = "Jello world";
myStr = "Hello world.";
console.log(myStr);

function wordBlanks (myNoun,myAdjective,myVerb,myAdverb){
var result = "";
result += "The" +" "+myAdjective +" "+ myNoun +" "+ myVerb + " to the store " + myAdverb;
return result;
}
console.log(wordBlanks("dog","big","run","quikly"));
console.log(wordBlanks("bike","slow","flew","slowly"));

var myArray = ["quincy", 1];
console.log(myArray);

var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData);

var myArray =[["John", 23],["cat",2]];
myArray.push(["dog",3]);
console.log(myArray);

var myList = [["milk",2],["eggs",4],["banana",5],["milo",2]];
console.log(myList);

function ourReusablefunction(){
    console.log("Heyya, world");
}
ourReusablefunction();

function reusablefunction(){
    console.log("what's new");
}
reusablefunction();

function nextInLine(arr,item) {
    arr.push(item);
    return arr.shift();
}
var textArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(textArr));
console.log(nextInLine(textArr,6));
console.log("After: " + JSON.stringify(textArr));

function testStrict(val) {
    if (val === 7){
        return "Equal";
    }
    return "not equal";
}

console.log(testStrict(70));

function testLogicalAnd(val) {
    if (val <= 50 && val <= 25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(10));

function testSize(num){
    if(num < 5) {
        return "Tiny";
    }else if (num < 10) {
        return "Small";
    }else if (num < 15) {
        return "Medium";
    }else if (num < 20) {
        return "Large";
    }else  {
        return "Huge";
    }
}
console.log(testSize(20));

function caseInSwitch(val) {
    var answer = "";
    switch(val){
       case 1:
         answer = "alpha";
       break;
       case 2:
        answer = "beta";
      break;
      case 3:
        answer = "gamma";
      break;
      case 4:
        answer = "delta";
      break;  


    }
    return answer;
}
console.log(caseInSwitch(4));

function SwitchOfStuff(val) {
    var answer = "";
    switch(val){
       case a:
         answer = "apple";
       break;
       case b:
        answer = "bird";
      break;
      case c:
        answer = "cat";
      break;
      default:
        answer = "stuff";
       break;   


    }
    return answer;
}
console.log(SwitchOfStuff(a));

function isLess(a,b){
    return a < b;
}
console.log(isLess(10,15));

function abTest(a,b){
    if (a < 0 || b < 0){
    return undefined;
    }
   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2,2));

var count = 0;
function cc(card){
    switch (card){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          count++;
          break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":  
          count--;     

    }
     var holdbet = 'Hold'
     if (count > 0){
        holdbet = 'Bet'
     }


          
    return count + " " + holdbet;
}
cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4))

function PhoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "adams",
        "bravo": "Baston",
        "charlie": "chicago",
        "delta": "denver",
        "echo": "easy",
        "foxtrot": "frank"
    };
    result = lookup[val];
    return result;
}
console.log(PhoneticLookup("charlie"))

var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

var myArray = [];
for (var i = 1; i < 6; i++){
    myArray.push(i);
}
console.log(myArray);

var myArray = [];
for (var i = 1; i < 10; i += 2){
    myArray.push(i);
}
console.log(myArray)

var myArray = [];
for (var i = 10; i > 0; i -= 2){
    myArray.push(i);
}
console.log(myArray)

var myArr = [2,3,4,5,6];
var total = 0;
for (var i = 0; i < myArr.length; i++){
    total += myArr[i];
}
console.log(total)

function multiplyAll(arr){
    var product = 1;
    for(var i =0; i < arr.length; i++){
        for(var j =0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product)


var contacts = [
    {
        "firstName": "Akira",
        "lastName":  "Laine",
        "number":    "05555031767",
        "likes" :    ["pizza","coding","Brownie points"]
    },
    {
        "firstName": "Harry",
        "lastName":  "potter",
        "number":    "05555031440",
        "likes" :    ["magic","food","Brownie pie"]
    },
    {
        "firstName": "John",
        "lastName":  "pott",
        "number":    "0555502440",
        "likes" :    ["Rice","game","football"]
    },
    {
        "firstName": "Akon",
        "lastName":  "Brandly",
        "number":    "0550315767",
        "likes" :    ["Gobe","basketball"]
    },

]
function LookUpProfile(name,prop){
    for(var i =0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "no such property"
        }
    }
    return "no such contact";
}
var data = LookUpProfile("Akon", "number");
console.log(data);

function randomFraction(){
    return Math.random();
}
console.log(randomFraction())

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum(){
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum())

function checkScope(){
    "use strict";
    let i = "function scope";
    if (true){
        let i = "block sope";
        console.log("Block scope i is:", i);
    }
    console.log("Function scope i is:", i);
    return i;

}
checkScope();

const [z,x,,y] = [1,2,3,4,5,6];
console.log(z,x,y)

const person ={
    name:"Baroski dat",
    Age: 56
};
const greeting = `Hello, my name is ${person.name}! i am ${person.Age} years old.`;
console.log(greeting)



const createPerson=(name,age,gender) =>({name,age,gender})
    console.log(createPerson("Gideon",56,"Maale"));
    console.log('hello')

let Ticket = {
    'From' : 'Accra',
    'To' : 'Sunyani',
    'Price' : '140gh'
}
console.log(`Ticket From: ${Ticket.From}\n Ticket To: ${Ticket.To}\n Ticket Price: ${Ticket.Price}`);
