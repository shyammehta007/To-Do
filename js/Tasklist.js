import Task from './Task.js'

class TaskList {
    constructor({ title, description, id }) {
        this.id = id;
        this.title = title
        this.description = description
        this.tasks = []
    }
    addTask(details) {
        const id = Date.now() + 1 // two differenciate b/w the taskList id and taskid
        const task = new Task({ id, ...details })
        this.tasks.push(task)
        return id
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => !(task.id == id))
    }

    updateTask(id, updates) {
        this.tasks = this.tasks.map((task) => {
            if (task.id == id) {
                task.updateDetails(updates)
            }
            return task
        })
    }
    updateDetails(updates) {
        const { title, description } = updates
        if (title) this.title = title
        if (description) this.description = description
    }
    clearUntitledTask() {
        this.tasks = this.tasks.filter((task) => task.title !== '')
    }
    readTask() {
        return this.tasks
    }
}

export default TaskList
