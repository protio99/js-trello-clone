const modal = document.getElementById('modal');
// Botón que abre el modal
const openModalButton = document.getElementById('openModal');
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
const closeButton = document.getElementsByClassName('close')[0];
const createTask = document.getElementById('create-task');
const taskTitle = document.getElementById('task-tittle');
const taskDescription = document.getElementById('task-description');

function addTaskToLocalStorage(e) {
  // Con esto no recargas la app - acá debes de alguna manera generar de nuevo las notas
  e.preventDefault();

  const tasks = localStorage.getItem('tasks');
  const tasksParse = JSON.parse(tasks);
  const tasksLength = Object.keys(tasksParse).length;
  /* 
    Esta forma de generar los ids no son unicos. podrías usar new Date().getTime() devuelve un numero grande 
    y presumiblemente único
  */
  const key = `card${tasksLength}`;
  modal.style.display = 'none';
  tasksParse[key] = {
    tittle: taskTitle.value,
    description: taskDescription.value,
    position: 'to-do',
  };
  console.log(tasksParse);
  localStorage.setItem('tasks', JSON.stringify(tasksParse));
}

// Submit del formulario
createTask.addEventListener('click', addTaskToLocalStorage);

openModalButton.addEventListener('click', function () {
  modal.style.display = 'block';
});
// Si el usuario hace clic en la x, la ventana se cierra
closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});
// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
