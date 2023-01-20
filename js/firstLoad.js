function createNotes() {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    var toDoColumn = document.getElementById("to-do-column")
    Object.keys(tasks).forEach(function (key, index) {
        let tittle = tasks[key].tittle
        let description = tasks[key].description
        console.log(`card${index}`);
        let newDivTask = `
        <div class="card" id="card${index}" draggable="true">
            <div class="card--tittle">${tittle}</div>
            <div class="card--content">${description}</div>
        </div>`
        toDoColumn.innerHTML += newDivTask

    });

}
function verifyTasksObject() {
    let tasks = localStorage.getItem("tasks")
    if (!tasks) {
        localStorage.setItem("tasks", JSON.stringify({}))
        return false
    }
    createNotes()
}