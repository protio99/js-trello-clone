//querySelector select the first coincidence with 
//the specific css selector, in this case id "card"
const card = document.querySelectorAll(".card")
const boxes = document.querySelectorAll('.board--column')



function dragStart(e) {
    console.log('id', e.target.id);
    e.dataTransfer.setData('text/plain', e.target.id)
    // e.target.classList.add('hide')
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
    console.log("Drag start", e);

}

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', drop)
})

function dragEnter(e) {
    e.preventDefault();
    // console.log("Drag enter", e);
    e.target.classList.add('drag-over');

}
function dragOver(e) {
    e.preventDefault();
    // console.log("Drag over", e);
    e.target.classList.add('drag-over');

}

function dragLeave(e) {
    console.log("Drag leave", e);
    e.target.classList.remove('drag-over');
}
function drop(e) {
    console.log("Drop", e);
    var toDoColumn = document.getElementById("to-do-column")
    var doingColumn = document.getElementById("doing-column")
    var doneColumn = document.getElementById("done-column")
    const id = e.dataTransfer.getData('text/plain');
    let div = document.getElementById(id)
    console.log(div);
    let cardData = JSON.parse(localStorage.getItem("tasks"))
    const draggable = document.getElementById(id);
    // add it to the drop target
    e.target.appendChild(draggable);
    // display the draggable element
    draggable.classList.remove('hide');
    e.target.classList.remove('drag-over');
    let newPosition = e.target.classList[1]
    cardData[id].position = newPosition

    localStorage.setItem('tasks', JSON.stringify(cardData))
    div.parentNode.removeChild(div)

    if (newPosition === "to-do") {
        div.addEventListener('dragstart', dragStart)
        toDoColumn.appendChild(div)
    } else if (newPosition === "doing") {
        div.addEventListener('dragstart', dragStart)
        doingColumn.appendChild(div)

    } else {
        div.addEventListener('dragstart', dragStart)
        doneColumn.appendChild(div)

    }
}