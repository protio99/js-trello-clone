
function deleteCard(element) {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    console.log(tasks);

    delete tasks[element.id]
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(element.id);
    location.reload()

}