const head = document.querySelector('h1');
head.style.color = '#f44336';

document.getElementById('addtskBtn').addEventListener('click',addtsk);

function addtsk() {
         const tskinput = document.getElementById('tskinput');
         const tskValue = tskinput.value.trim();
}
if(tskValue === ""){
    alert("Please enter a valid task!");
    return;
}

//create list

const tsklist = document.getElementById('tsklist');
let li = document.createElement('li');
li.classList.add('task');
li.textContent = tskValue;
