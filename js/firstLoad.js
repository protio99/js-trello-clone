
function verifyTasksObject() {
    let tasks = localStorage.getItem("tasks")
    if (!tasks) {
        localStorage.setItem("tasks", {})
        return false
    }
}