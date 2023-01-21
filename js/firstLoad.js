function createNotes() {

    let tasks = JSON.parse(localStorage.getItem("tasks"))
    var toDoColumn = document.getElementById("to-do-column")
    Object.keys(tasks).forEach(function (key, index) {
        let tittle = tasks[key].tittle
        let description = tasks[key].description
        console.log(`card${index}`);
        let div = document.createElement('div')
        div.setAttribute('draggable', true)
        div.classList.add('card')
        div.id = key
        div.innerHTML = `
        
            <div class="card--tittle">${tittle}</div>
            <div class="card--content">${description}</div>
        `
        div.addEventListener('dragstart', dragStart)
        toDoColumn.appendChild(div)

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