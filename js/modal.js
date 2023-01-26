
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeButton = document.getElementsByClassName('close')[0];
const createTaskButton = document.getElementById('create-task');
const taskTitle = document.getElementById('task-tittle');
const taskDescription = document.getElementById('task-description');

function addTaskToLocalStorage(e) {
  e.preventDefault();
  const today = new Date()
  const tasks = localStorage.getItem('tasks');
  const tasksParse = JSON.parse(tasks);
  const cardId = today.getTime()
  const key = `card${cardId}`;
  modal.style.display = 'none';
  let divData = {
    key: key,
    tittle: taskTitle.value,
    description: taskDescription.value,
    position: 'to-do'

  }
  tasksParse[key] = divData;
  localStorage.setItem('tasks', JSON.stringify(tasksParse));
  createDivHtmlElement(divData)
}


createTaskButton.addEventListener('click', addTaskToLocalStorage);

openModalButton.addEventListener('click', function () {
  modal.style.display = 'block';
});
closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});


