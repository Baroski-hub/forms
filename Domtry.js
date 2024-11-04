//Variables
let btn = document.querySelector('#new-quote');
let person = document.querySelector('.person');
let quote = document.querySelector('.quote');

const quotes = [{
    quote: `'The best way to find yourself is to lose yourself in the service of Others.'`,
    person:`Mahatma Gandhi`
}, {
    quote: `'If you want to live a Happy life, tie it to a goal, not to people or things.'`,
    person:`Albert Einstein` 
}, {
    quote: `'Good Morning, Always Remember It's All Hustle Not Luck,You Have To Get Your Head Right,Big Motion Or No Motion. '`,
    person:`Baroski_Dat`
}, {
    quote: `'Don't Get Tired,Remember It Is a Trap!.'`,
    person:`Baroski_Dat`
}, {
    quote: `'At this Age,I am only interested in peace,consistency,stability,respect and loyalty'`,
    person:`Gideon Baroski`
}, {
    quote: `'Tell me and I forget,Teach me and I remember.Involve me and I learn.'`,
    person:`Baroski Franklin`
}, {
    quote: `'At his best,Man is the noblestof all Animals; seperated from law and Justice he is the worst.'`,
    person:`Aristotle`
}, {
    quote: `'The journey of a thousand miles begins with one step.'`,
    person:`Lao Tzu`
}, {
    quote: `'Our lives begin to end the day we become silent about things that matters.'`,
    person:`Martin Luther King jnr`
}, {
    quote: `'It does not matter how slowly you go as long as you do not stop'`,
    person:`Confucius`
} 
];

btn = addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})