

function myFunction(){
    let txt = document.getElementById('demo').innerHTML;
    document.getElementById('demo').innerHTML = txt.toUpperCase();
}
const header = document.getElementById('main-hearder');
console.log(header)

const head = document.querySelector('#main-hearder');
head.style.color = 'blue';
console.log(head);


const listItems = document.getElementsByClassName('list-items');
console.log(listItems)

const txt = document.getElementsByTagName('li');
console.log(txt);

const text  = document.querySelector('p');
console.log(text);

const mark = document.querySelector('mark');
console.log(mark);

let button = document.querySelector('button');
console.log(button);

const main = "";
document.getElementById('demo');
console.log(main.length)

const man = document.querySelector('#demo');
man.style.color = '#f44336';
console.log(man);

const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);
li.innerText = "PHONE";
li.setAttribute('id','lists');

const listed = document.querySelectorAll(".lists");

for ( i = 0; i < lists.length; i++){
listed[i].style.fontSize = '5rem';

}
console.log(listed);








