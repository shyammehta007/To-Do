import { getTasklist } from './TasklistsDS.js'
//here id will be taskid
export function createTaskElement({ id, completed = false, title = '' }) {
    const task = document.createElement('li')
    task.className = 'task'
    task.setAttribute('id', id)

    const check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.className = 'task-checkbox'
    check.checked = completed

    const tasktitle = document.createElement('input')
    tasktitle.setAttribute('type', 'text')
    tasktitle.className = 'task-title'
    tasktitle.value = title

    const deleteTask = document.createElement('div')
    deleteTask.className = 'task-delete'

    task.append(check, tasktitle, deleteTask)
    return task
}


export function createTask(id) {
    const tasklist = getTasklist(id)
    const taskid = tasklist.addTask({ title: '' })
    const task = createTaskElement({ id: taskid })
    document.querySelector('.task-container').append(task)
    return taskid
}