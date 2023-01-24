
function deleteCard(element) {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    console.log(tasks);

    delete tasks[element.id]
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(element.id);
    /* Debes de redibujar el tablero o eliminar de el a quien se saca tu decides :) */
    // location.reload()
}