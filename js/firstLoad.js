function createNotes() {

    let tasks = JSON.parse(localStorage.getItem("tasks"))
    var toDoColumn = document.getElementById("to-do-column")
    var doingColumn = document.getElementById("doing-column")
    var doneColumn = document.getElementById("done-column")

    Object.keys(tasks).forEach(function (key, index) {
        let tittle = tasks[key].tittle
        let description = tasks[key].description
        let position = tasks[key].position
        console.log("position-------------", position);
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
        if (position === "to-do") {
            console.log("$$$$$$$$$$$$to do colmn");
            toDoColumn.appendChild(div)
        } else if (position === "doing") {
            console.log("##############doing colmn");
            doingColumn.appendChild(div)

        } else {
            console.log("///////////done colmn");

            doneColumn.appendChild(div)

        }


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