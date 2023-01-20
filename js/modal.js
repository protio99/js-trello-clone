var modal = document.getElementById("modal");
// Botón que abre el modal
var openModalButton = document.getElementById("openModal");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var closeButton = document.getElementsByClassName("close")[0];
var createTask = document.getElementById("create-task");
var taskTittle = document.getElementById("task-tittle")
var taskDescription = document.getElementById("task-description")

createTask.addEventListener('click', addTaskToLs)
console.log(openModalButton);
openModalButton.addEventListener("click", function () {
  console.log("I enter here");
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

function addTaskToLs(e) {
  // e.preventDefault()
  let tasks = localStorage.getItem("tasks")
  let tasksParse = JSON.parse(tasks)
  let newPosition = Object.keys(tasksParse).length + 1
  modal.style.display = "none"
  tasksParse[newPosition] = {
    "tittle": taskTittle.value,
    "description": taskDescription.value
  }
  console.log(tasksParse);
  localStorage.setItem("tasks", JSON.stringify(tasksParse))
}


