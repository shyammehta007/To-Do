import { toEpoch } from './utills.js'

class TaskListDetails {
    constructor({ title, description, id }) {
        this.id = id;
        this.title = title
        this.description = description
        this.tasklist = []
    }
    addTask(details) {
        const id = Date.now() + 1 // two differenciate b/w the taskList id and taskid
        const task = new Task({ id, ...details })
        this.tasklist.push(task)
        return id
    }
    deleteTask(id) {
        this.tasklist = this.tasklist.filter((task) => !(task.id == id))
    }

    updateTask(id, updates) {
        this.tasklist = this.tasklist.map((task) => {
            if (task.id == id) {
                task.updateDetails(updates)
            }
            return task
        })
    }
    updateDetails(updates) {
        const { task } = updates
        if (task) {
            const { title, completed, taskImage } = updates
            if (title) this.title = title
            if (completed) this.completed = completed
            if (taskImage) this.taskImage = taskImage
            this.updatedAt = toEpoch()
        } else {
            const { title, description } = updates
            if (title) this.title = title
            if (description) this.description = description
        }
    }
    clearUntitledTask() {
        this.tasklist = this.tasklist.filter((task) => task.title !== '')
    }
    readTask() {
        return this.tasklist
    }
}


class Task extends TaskListDetails {
    constructor({ title, completed = false, id }) {
        super({ title, id })
        this.completed = completed
        delete this.tasklist
        delete this.description
        this.createdAt = toEpoch() // to save the creation time
        this.updatedAt = toEpoch() // to save the last update time to provide the filter feature
    }
}

export { TaskListDetails }
