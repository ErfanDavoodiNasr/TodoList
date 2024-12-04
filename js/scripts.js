let tasks = document.getElementById("list")
let input = document.getElementById("input")
let submit = document.getElementById("submit")
let reset = document.getElementById("reset");

submit.addEventListener("click", function (e) {
    let taskInput = input.value
    let htmlElement = document.createElement("li");
    htmlElement.classList.add("li")
    htmlElement.innerText = taskInput
    tasks.appendChild(htmlElement)
    alert(`new task ${taskInput} successfully added`)
})

reset.addEventListener("click", function (e){
    tasks.innerHTML = "";
})