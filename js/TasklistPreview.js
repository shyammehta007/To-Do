import { createTask, createTaskElement } from './TaskRendering.js'
import { getTasklist } from './TasklistsDS.js'
import { debounce } from './utills.js'

function createPreviewTemplate(details) {
    const { id, title, description } = details
    const container = document.createElement('div')
    container.className = 'preview-container'
    container.setAttribute('id', id)

    // task-status change handler
    container.addEventListener('change', (e) => {
        e.preventDefault()
        const taskId = e.target.parentNode.id
        const completed = e.target.checked
        const tasklist = getTasklist(id)
        tasklist.updateTask(taskId, { completed })
    })

    //task title change handler
    container.addEventListener('input', debounce((e) => {
        e.preventDefault()
        if (e.target.type === 'checkbox') {
            return
        }
        const taskId = e.target.parentNode.id
        const title = e.target.value
        const tasklist = getTasklist(id)
        tasklist.updateTask(taskId, { title })
    }, 1000))
    //task delete handler
    container.addEventListener('click', (e) => {
        if (!(e.target.className === 'task-delete')) return
        e.preventDefault()
        const taskId = e.target.parentNode.id
        const tasklist = getTasklist(id)
        tasklist.deleteTask(taskId)
        setTimeout(() => {
            document.getElementById(taskId).remove()
        }, 100)
    })

    const tasklistDetails = document.createElement('div')
    tasklistDetails.className = 'pre-tasklist-details'

    const tasklistTitle = document.createElement('div')
    tasklistTitle.className = 'pre-tasklist-title'
    tasklistTitle.innerHTML = title.toUpperCase()
    tasklistTitle.setAttribute('title', title)

    const tasklistDescription = document.createElement('div')
    tasklistDescription.className = 'pre-tasklist-description'
    tasklistDescription.innerHTML = '- ' + description
    tasklistDescription.setAttribute('title', description)

    const createTaskButton = document.createElement('div')
    createTaskButton.className = 'create-task-button'
    createTaskButton.innerHTML = 'Add Task'
    createTaskButton.addEventListener('click', () => {
        const taskid = createTask(id);
        document.getElementById(taskid).querySelector('.task-title').focus()
    })

    tasklistDetails.append(tasklistTitle, tasklistDescription, createTaskButton)


    const taskContainer = document.createElement('ul')
    taskContainer.className = 'task-container'

    container.append(tasklistDetails, taskContainer)

    document.querySelector('.right-container').appendChild(container)
}

export function removePreviewTemplate() {
    const preview = document.querySelector('.preview-container')
    if (preview) {
        preview.parentNode.removeChild(preview)
    }
}

function renderTaskList(id) {
    const tasklist = getTasklist(id)
    tasklist.clearUntitledTask()
    const tasks = tasklist.tasks
    const taskContainer = document.querySelector('.task-container')
    tasks.map(task => {
        const temp = createTaskElement(task)
        taskContainer.append(temp)
    })
}

export function createPreview(details) {
    removePreviewTemplate()
    createPreviewTemplate(details)
    renderTaskList(details.id)
}




