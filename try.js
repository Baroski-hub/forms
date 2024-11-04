console.log("This is trials");
var a;
var b = 2;
console.log(a);
var a = 7;
console.log(a);
var a = "baroski on ";
var b = " a mission ";
console.log(a + b);
var sum = 23 + 54 + 73;
console.log(sum);
var product = 33 * 123;
console.log(product);
var quotient = 1112 / 6;
console.log(quotient);
var difference = 29 - 32;
console.log(difference);
var myVar = 200;
myVar++;
console.log(myVar);
var myName = "Allan Dovberg";
console.log(myName);
var myIn = 11100;
myIn--;
console.log(myIn);
var remainder;
var remainder = 12 % 5;
console.log(remainder);
var firstName = "OPOKU ";
var lastName = "GIDEON,";
var age = 10;
var sen = " I am ";
var sent = " years old.";
var fullname = firstName + lastName + sen + age + sent;
console.log(fullname);
var myStr = "Thisline\n\tOr thisline\nlastline";
console.log(myStr);
var myArr = ["Baroski", 50, 60, 20];
console.log(myArr);
var myArr = ["So", "is", 1, 2, 3, 4, 5, "numbers"];
console.log(myArr);
var my = ["So", "is", 1, 2, 3, 4, 5, "numbers"];
console.log(my);
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "That " +
    " " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " over the wall " +
    myAdverb;
  return result;
}
console.log(wordBlanks("dog", "big", "jump", "quickly"));

const createObject = (TicketFrom, Ticketto, TicketPrice) => ({
  TicketFrom,
  Ticketto,
  TicketPrice,
});
console.log(createObject("POKUASE", "SUNYANI", "120gh"));


let Ticket = {
    "from" :"Pokuase",
    "to": "Sunyani",
    "price": "120gh"
}

console.log(`Ticket from: ${Ticket.from}, Ticket to : ${Ticket.to}, Ticket Price: ${Ticket.price}`);




let ticket ={
"From": "Accra",
"To": "Berekum",
"Price": "140gh",
"Distance": "1200km"
}
console.log(`Ticket from: ${ticket.From}\n Ticket to: ${ticket.To}\n Ticket price: ${ticket.Price}\n Distance: ${ticket.Distance}`);
function randomFraction(){
    return Math.random();
}
console.log(randomFraction());
function randomNumberBetween1and100(){
    return Math.random();
}
console.log(randomNumberBetween1and100());
const [x,,y,,z] = [1,2,4,5,6,3];
console.log(x,y,z)
const object = {
    Name: 'Willson Beau',
    Age: 11,
    Gender: 'male',
    Likes: 'football',
    Fav: 'music',
    Sch: 'STU',
    Class: 'Bict 2a',
    Level: '300'

}
const person = (`My name is ${object.Name},I am ${object.Age} years old, my gender is ${object.Gender}, I like ${object.Likes},
    my favoriate thing to do is listen to ${object.Fav}, i attend school at ${object.Sch}, a class of ${object.Class}, 
    and i am in level ${object.Level}.`);
    console.log(person);
    console.log('Hello')

    function multiplyAll(arr){
      var product = 1;
      for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
          product *= arr[i][j];
        }
      }
      return product;
    }
    var product = multiplyAll([[1,2],[6,5],[10,34,333]]);
    console.log(product);
    var a = 29;
    console.log(a)
    function PhoneticLookup (val){
      var result = "";
      var lookup = {
        "Alphar" : "Martins",
        "Bravo" : "Baroski",
        "Vlahovic" : "Dusan",
        "Jovic" : "Baros"

      }
      result = lookup[val];
      return result;
    }
    console.log(PhoneticLookup('Bravo'));
    var myStr = "i am a \"double quoted\" string in a \"double quote"
    console.log(myStr);
    let Greeting = {
      'Him1' : 'Good morning ',
      'Her1' : 'Morning!',
      'Him2' : 'How are you doing today?',
      'Her2' : 'I am doing well, hope you do same?',
      'Him3' : 'Yeah sure i am!'
    }
    console.log(`HIM: ${Greeting.Him1}\n HER: ${Greeting.Her1}\n HIM: ${Greeting.Him2}\n HER: ${Greeting.Her2}\n HIM: ${Greeting.Him3}`);