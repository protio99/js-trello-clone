function createNotes() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  const toDoColumn = document.getElementById('to-do-column');
  const doingColumn = document.getElementById('doing-column');
  const doneColumn = document.getElementById('done-column');

  Object.keys(tasks).forEach(function (key) {
    const title = tasks[key].tittle;
    const description = tasks[key].description;
    const position = tasks[key].position;
    const div = document.createElement('div');
    div.setAttribute('draggable', true);
    div.classList.add('card');
    div.id = key;
    /*
        Qué tal si te creas una función que devuelva este html el código queda más legible y puede ser más sencillo de manejar
    */
    div.innerHTML = `
            <div class="card--info">
                <div class="card--tittle">${title}</div>
                <div class="card--content">${description}</div>
            </div>
            <div class="card--actions">
            <i class="fa-solid fa-pencil" ></i>
            <i class="fa-solid fa-trash-can delete" id="delete-${key}" onclick="deleteCard(${key})"></i>
            </div>
        `;

    // dragstart is defined in other file
    div.addEventListener('dragstart', dragStart);

    if (position === 'to-do') {
      toDoColumn.appendChild(div);
    } else if (position === 'doing') {
      doingColumn.appendChild(div);
    } else {
      doneColumn.appendChild(div);
    }
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
