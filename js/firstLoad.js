const toDoColumn = document.getElementById('to-do-column');
const doingColumn = document.getElementById('doing-column');
const doneColumn = document.getElementById('done-column');
function createNotes() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  Object.keys(tasks).forEach(function (key) {
    let divData = {
      key: key,
      tittle: tasks[key].tittle,
      description: tasks[key].description,
      position: tasks[key].position

    }
    createDivHtmlElement(divData)

  });
}

function initApp() {
  let tasks = localStorage.getItem('tasks');
  if (!tasks) {
    localStorage.setItem('tasks', JSON.stringify({}));
    return false;
  }
  createNotes();
}

function createDivHtmlElement(data) {
  const { key, tittle, description, position } = data;
  const div = document.createElement('div');
  div.setAttribute('draggable', true);
  div.classList.add('card');
  div.id = key;
  div.innerHTML = `
            <div class="card--info">
                <div class="card--tittle">${tittle}</div>
                <div class="card--content">${description}</div>
            </div>
            <div class="card--actions">
            <i class="fa-solid fa-pencil" id="edit-${key}" onclick="showEditForm(${key})" ></i>
            <i class="fa-solid fa-trash-can delete" id="delete-${key}" onclick="deleteCard(${key})"></i>
            </div>
        `;

  // dragstart is defined in other file
  div.addEventListener('dragstart', dragStart);
  if (position === 'to-do') {
    toDoColumn.appendChild(div);
  } else if (position === 'doing') {
    doingColumn.appendChild(div);
  } else if (position === 'done') {
    doneColumn.appendChild(div);
  }

}


