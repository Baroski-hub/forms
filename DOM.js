//GetElementById
const title = document.getElementById("Main heading");
title.style.color = 'orange';
console.log(title);
const listItems = document.querySelectorAll('.list-items');
   
for ( i = 0; i < listItems.length; i++){
    listItems[i].style.fontSize= '2rem';
}
console.log(listItems)

//const ul = document.querySelector('ul');
const li = document.createElement('li');
//ul.append(li)
const firstlistItems = document.querySelector('.list-items');
console.log(firstlistItems.innerText);
console.log(firstlistItems.textContent);
console.log(firstlistItems.innerHTML);
li.innerText = 'X-men';
li.setAttribute('id','mainHeading');
//li.removeAttribute('id')
li.classList.add('list-items')

//Modifying
console.log(li.classList.contains('list-items'));
li.remove();
//li.classList.revome('list-items')


//let ul = document.querySelector('ul');
//console.log(ul.parentNode.parentNode)
//console.log(ul.parentElement.parentElement)
const html = document.documentElement;
console.log(html);

let ul = document.querySelector('ul');
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = "blue";
ul.childNodes[3].style.backgroundColor = "green";
ul.childNodes[5].style.backgroundColor = "yellow";
ul.childNodes[7].style.backgroundColor = "gray";
ul.childNodes[9].style.backgroundColor = "pink";
ul.childNodes[11].style.backgroundColor = "violet";

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);



const head = document.getElementById("main-header")
head.style.color = "red";
console.log(head);
//elenemt.addEventListener("click",function)
const buttonTwo = document.querySelector(".btn-2");
function alertBtn(){
    alert('Remember it is a trap!');
}
buttonTwo.addEventListener("click",alertBtn);
//mouseover
const newBackgroundColor = document.querySelector('.box-3');
function changeBgColor(){
    newBackgroundColor.style.backgroundColor = 'blue';
}
newBackgroundColor.addEventListener("mouseover",changeBgColor);

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');
function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn');
    }else{
        hiddenContent.classList.add('reveal-btn');
    }
}
revealBtn.addEventListener('click',revealContent);


//window.addEventListener('click',function (){
  //  console.log('window');
//},false);

//document.addEventListener('click',function(){
  //  console.log('Document');
//},false);

//document.querySelector('.div2').addEventListener('click',function(){
  //  console.log('.div 2');

//},{once:true});
//document.querySelector('.div1').addEventListener('click',function(){
  //  console.log('div 1');
//},false);
//document.querySelector('button').addEventListener('click',function(e){
    //e.preventDefault()
  //  console.log(e.target.innerText = 'clicked');
//},false);

//document.querySelector('#football').addEventListener('click',function(e){
    //console.log('football is clicked');
   // const target = e.target;
   // if(target.matches('li')){
  //      target.style.backgroundColor = 'light gray';
 //   }
//});
//document.querySelector('#basketball').addEventListener('click',function(e){
    //console.log('basketball is clicked');
    //const target = e.target;
    //if(target.matches('li')){
    //    target.style.backgroundColor = 'light gray';
  //  }
//});
//document.querySelector('#boxing').addEventListener('click',function(e){
    //console.log('boxing is clicked');
    //const target = e.target;
    //if(target.matches('li')){
   //     target.style.backgroundColor = 'light gray';
  //  }
//});
//document.querySelector('#tennis').addEventListener('click',function(e){
    //console.log('tennis is clicked');
    //const target = e.target;
    //if(target.matches('li')){
   //     target.style.backgroundColor = 'light gray';
  //  }
//});
//document.querySelector('#golf').addEventListener('click',function(e){
    //console.log('golf is clicked');
    //const target = e.target;
   // if(target.matches('li')){
    //    target.style.backgroundColor = 'light gray';
  //  }
//});

document.querySelector('#sports').addEventListener('click',function(e){
    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor = 'gray';
    }
});
const sports = document.querySelector('#sports');
const newSports = document.createElement('li');
newSports.innerText = 'rugby';
newSports.setAttribute('id','rugby');
sports.appendChild(newSports);







