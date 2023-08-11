var div = document.getElementsByClassName("cardTasks")[0];
var Tasks = document.getElementsByClassName("Tasks")[0];
var arrData = [];
let temporarysave;

function createHTML() {
    Tasks.innerHTML = '';
    for (let i = 0; i < arrData.length; i++) {
        var tasks = `<div class='tasks'>
    <h4 class="Task-name"> ${arrData[i]}<span class="iconbtn" ><button class="btnclick" onclick="update(${i})"><i class="bi bi-pencil" ></i></button><button class="btnclick" onclick="Delete(${i})"> <i class="bi bi-trash"></i></button></span> </h4></div>`;
        Tasks.innerHTML += tasks;
    }
}
function loadFromLocalStorage() {
    const storedData = localStorage.getItem('Tasks');
    if (storedData.length > 1) {
        arrData = JSON.parse(storedData);
        createHTML();
    }
}
loadFromLocalStorage();

let i = 0;
function create() {
    let createTask = document.getElementsByClassName('createtask')[0];
    arrData.push(createTask.value);
    localStorage.setItem('Tasks', JSON.stringify(arrData));
    createHTML();
}
function update(index) {
    var inedit = document.getElementsByClassName('inputedit')[0]
    inedit.value = arrData[index];
    document.getElementById("myDialog").open = true;
    temporarysave = index;
}
function save() {
    var inedit = document.getElementsByClassName('inputedit')[0]
    arrData[temporarysave] = inedit.value;
    localStorage.setItem('Tasks', JSON.stringify(arrData));
    document.getElementById("myDialog").open = false;
    createHTML();
}
function Delete(index) {
    arrData.splice(index, 1)
    localStorage.setItem('Tasks', JSON.stringify(arrData));
    window.confirm('Are you sure you want to delete this item?');
    createHTML();

}


function search(value) {
    let tasks = '';
    for (let i = 0; i < arrData.length; i++) {
        if (arrData[i].toLowerCase().includes(value) || arrData[i].toUpperCase().includes(value)) {

            tasks += `<div class='tasks'>
        <h4 class="Task-name"> ${arrData[i]}<span class="iconbtn" ><button class="btnclick" onclick="update(${i})" title="update"><i class="bi bi-pencil" ></i></button><button class="btnclick" onclick="Delete(${i})" title="delete"> <i class="bi bi-trash"></i></button></span> </h4></div>`;
        }
    }
    Tasks.innerHTML = tasks;
}