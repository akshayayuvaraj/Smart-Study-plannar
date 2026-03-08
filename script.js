let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function addTask(){

let text = document.getElementById("taskInput").value
let subject = document.getElementById("subject").value
let time = document.getElementById("timeInput").value

if(text === ""){

alert("Enter task")

return

}

let task = {

text:text,
subject:subject,
time:time,
done:false

}

tasks.push(task)

saveData()

displayTasks()

document.getElementById("taskInput").value=""

}

function displayTasks(){

let list = document.getElementById("taskList")

list.innerHTML=""

tasks.forEach((task,index)=>{

let li = document.createElement("li")

if(task.done){

li.classList.add("completed")

}

li.innerHTML = `
${task.text} (${task.subject}) - ${task.time}

<div>

<button onclick="completeTask(${index})">✔</button>

<button onclick="deleteTask(${index})">❌</button>

</div>
`

list.appendChild(li)

})

updateProgress()

}

function completeTask(index){

tasks[index].done = !tasks[index].done

saveData()

displayTasks()

}

function deleteTask(index){

tasks.splice(index,1)

saveData()

displayTasks()

}

function updateProgress(){

let done = tasks.filter(t=>t.done).length

let total = tasks.length

let percent = total===0 ? 0 : (done/total)*100

document.getElementById("progress").style.width = percent+"%"

}

function saveData(){

localStorage.setItem("tasks",JSON.stringify(tasks))

}

displayTasks()


document.getElementById("darkBtn").onclick=function(){

document.body.classList.toggle("dark")

}