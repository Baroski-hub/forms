//Add taskbtn
document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("please enter a valid task.");
    return;
  }

  //create list
  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.classList.add("task");
  li.textContent = taskValue;
//push
  const taskArray = [];
  const allTasks = document.getElementsByClassName("task");
  document.getElementById("form").addEventListener("click", function () {
    for (i = 0; i < allTasks.length; i++) {
        taskArray.push(allTasks[i]);
    }
});

  console.log(allTasks);

  //create edit btn
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = function () {
    const newTaskValue = prompt("Edit Task:", taskValue);
    if (newTaskValue && newTaskValue.trim() !== "") {
      li.firstChild.textContent = newTaskValue.trim();
    } else {
      alert("Please enter a valid task.");
    }
  };
  //Create delete btn
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  //clear input
  taskInput.value = "";
}
