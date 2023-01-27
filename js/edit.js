let tittleInput = document.getElementById('edit-task-tittle');
let descriptionInput = document.getElementById('edit-task-description');
const modalEdit = document.getElementById('modal-edit');
const closeButtonEdit = document.getElementsByClassName('close-edit')[0];
const editTaskButton = document.getElementById('edit-task');

let data
function showEditForm(element) {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    modalEdit.style.display = 'block';
    console.log(element);
    let taskTittle = tasks[element.id].tittle
    let taskDescription = tasks[element.id].description
    tittleInput.value = taskTittle
    descriptionInput.value = taskDescription
    data = tasks[element.id]


}

function EditFormButton(e) {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    e.preventDefault();
    let newTittle = document.getElementById('edit-task-tittle')
    let newDescription = document.getElementById('edit-task-description')
    let card = document.getElementById(data.key)
    tasks[data.key].tittle = newTittle.value;
    tasks[data.key].description = newDescription.value;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    let divData = {
        key: data.key,
        tittle: newTittle.value,
        description: newDescription.value,
        position: data.position

    }
    let column = document.querySelector(`.${data.position}`)
    column.removeChild(card)
    createDivHtmlElement(divData);
    modalEdit.style.display = 'none';



}

editTaskButton.addEventListener('click', EditFormButton);

closeButtonEdit.addEventListener('click', function () {
    modalEdit.style.display = 'block';

});
window.addEventListener('click', function (event) {
    if (event.target == modalEdit) {
        modalEdit.style.display = 'none';
    }
});