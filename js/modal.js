var modal = document.getElementById("modal");
// Botón que abre el modal
var openModalButton = document.getElementById("openModal");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var closeButton = document.getElementsByClassName("close")[0];
var createTask = document.getElementsByClassName("create-task");

openModalButton.addEventListener("click",function() {
    modal.style.display = "block";
  });
  // Si el usuario hace clic en la x, la ventana se cierra
  closeButton.addEventListener("click",function() {
    modal.style.display = "none";
  });
  // Si el usuario hace clic fuera de la ventana, se cierra.
  window.addEventListener("click",function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  createTask.addEventListener('click', function(){
    var taskTittle = document.getElementById("task-tittle").value
var taskDescription = document.getElementById("task-description").value
    modal.style.display="none"
    localStorage.setItem("tasks",JSON.stringify({taskTittle:taskDescription}))

  })