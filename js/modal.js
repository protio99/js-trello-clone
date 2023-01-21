var modal = document.getElementById("modal");
// Botón que abre el modal
var openModalButton = document.getElementById("openModal");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var closeButton = document.getElementsByClassName("close")[0];
var createTask = document.getElementById("create-task");
var taskTittle = document.getElementById("task-tittle")
var taskDescription = document.getElementById("task-description")

createTask.addEventListener('click', addTaskToLocalStorage)
openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});
// Si el usuario hace clic en la x, la ventana se cierra
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});
// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

function addTaskToLocalStorage(e) {
  e.preventDefault()
  let tasks = localStorage.getItem("tasks")
  let tasksParse = JSON.parse(tasks)
  let tasksLength = Object.keys(tasksParse).length
  let key = `card${tasksLength}`
  modal.style.display = "none"
  tasksParse[key] = {
    "tittle": taskTittle.value,
    "description": taskDescription.value,
    "position": "to-do"
  }
  console.log(tasksParse);
  localStorage.setItem("tasks", JSON.stringify(tasksParse))
}


