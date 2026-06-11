let taskCount = 0;

function goToTasks(){

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const message =
document.getElementById("message").value.trim();

if(name === "" || email === "" || message === ""){

document.getElementById("error").innerText =
"Please fill all fields";

return;
}

document.getElementById("page1").classList.remove("active");
document.getElementById("page2").classList.add("active");
}

function addTask(){

const taskInput =
document.getElementById("taskInput");

const taskText =
taskInput.value.trim();

if(taskText === "") return;

const li =
document.createElement("li");

li.innerHTML = `
${taskText}
<span class="delete">X</span>
`;

li.querySelector(".delete")
.addEventListener("click",function(){

li.remove();
taskCount--;

});

document.getElementById("taskList")
.appendChild(li);

taskCount++;

taskInput.value="";
}

function showSuccess(){

if(taskCount === 0){

alert("Please add at least one task");

return;
}

document.getElementById("page2")
.classList.remove("active");

document.getElementById("page3")
.classList.add("active");

const user =
document.getElementById("name").value;

document.getElementById("userInfo")
.innerHTML = `
Name: ${user}<br>
Tasks Added: ${taskCount}
`;
}

function restartApp(){

location.reload();

}