
function deleteCard(element) {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    let task = tasks[element.id]
    let column = document.querySelector(`.${task.position}`)
    delete tasks[element.id]
    localStorage.setItem("tasks", JSON.stringify(tasks))
    column.removeChild(element)

}