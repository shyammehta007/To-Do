import { TaskListDetails } from './Tasklist.js'
let db = []

export function createTasklist({ title, description }) {
    const id = Date.now()
    const tasklist = new TaskListDetails({ id, title, description })
    db.push(tasklist)
    return id
}

export function deleteTasklist(id) {
    db = db.filter(tasklist => !(tasklist.id == id))
}

export function updateTasklistDetails(id, updates) {
    db = db.map((tasklist) => {
        if (tasklist.id == id) tasklist.updateDetails(updates)
        return tasklist
    })
}

export function getTasklist(id) {
    return db.find(tasklist => tasklist.id == id)
}

export function printDB() {
    console.log(db)
}