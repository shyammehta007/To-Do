import { toEpoch } from './utills.js'

//to create the basic task object

class Task {
    constructor({ title, completed = false, id }) {
        this.id = id
        this.title = title
        this.completed = completed
        this.createdAt = toEpoch() // to save the creation time
        this.updatedAt = toEpoch() // to save the last update time to provide the filter feature
    }

    updateDetails(updates) {
        const { title, completed } = updates
        if (title) this.title = title
        if (completed) this.completed = completed
        this.setUpdationTime()
    }

    setUpdationTime() {
        this.updatedAt = toEpoch()
    }
}

export default Task

