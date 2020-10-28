import { getTasklist } from './TasklistsDS.js'
//here id will be taskid
export function createTaskElement({ id, completed = false, title = '', taskImage }) {
    const task = document.createElement('li')
    task.className = 'task'
    task.setAttribute('id', id)

    const check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.className = 'task-checkbox'
    check.checked = completed

    const tasktitle = document.createElement('textarea')
    tasktitle.className = 'task-title'
    tasktitle.setAttribute('columns', '30')
    tasktitle.setAttribute('rows', '3')
    tasktitle.value = title


    const deleteTask = document.createElement('div')
    deleteTask.className = 'task-delete'

    const imageLabel = document.createElement('label')
    const imageIcon = document.createElement('img')
    imageIcon.src = './imageIcon.svg'
    imageIcon.className = 'image-attach'
    const attachment = document.createElement('input')
    attachment.type = 'file'
    attachment.accept = 'image/*'
    imageLabel.append(imageIcon, attachment)

    if (taskImage) { appendImagePreview(id, taskImage) }

    task.append(check, tasktitle, deleteTask, imageLabel)
    return task
}

export function appendImagePreview(id, taskImage) {
    const imageReader = new FileReader()
    imageReader.readAsDataURL(taskImage)
    imageReader.addEventListener('load', (e) => {
        const task = document.getElementById(id)
        const imagePreview = document.createElement('img')
        imagePreview.className = `image-preview`
        imagePreview.src = e.target.result
        task.querySelector('.image-preview')?.remove()
        task.append(imagePreview)
        task.style.height = '200px'
    })
}

export function taskImageRendering() { }


export function createTask(id) {
    const tasklist = getTasklist(id)
    const taskid = tasklist.addTask({ title: '' })
    const task = createTaskElement({ id: taskid })
    document.querySelector('.task-container').append(task)
    return taskid
}