//variable

const accordion = document.getElementsByClassName('content-container');

var array2 = [];
array2.push("dog")
console.log(array2);


for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
};




array2