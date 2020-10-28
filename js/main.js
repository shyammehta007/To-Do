import { addTasklistElement } from './TasklistRendering.js'
import { openModal, closeModal } from './modal.js'
import { debounce } from './utills.js'
import { deleteTasklist, getTasklist, updateTasklistDetails } from './TasklistsDS.js'
import { createPreview, removePreviewTemplate } from './tasklistPreview.js'

// to open Task-list details modal
const addTasklistButton = document.querySelector('.add-tasklist')
addTasklistButton.addEventListener('click', () => { openModal() })

// to close task-list details modal
document.querySelectorAll('.closemodal').forEach(ele => ele.addEventListener('click', closeModal))

//create task-list
document.querySelector('.submit-button').addEventListener('click', () => {
    const title = document.querySelector('#task-title').value
    const description = document.querySelector('#task-description').value
    if (title && description) {
        addTasklistElement({ title, description })
        document.querySelector('.tasklist-form').reset()
        setTimeout(() => {
            closeModal()
        }, 500);
    } else {
        alert('title and description both are required feilds')
    }
})

document.querySelector('.tasklists-container').addEventListener('input', debounce((e) => {
    const tasklistID = e.target.parentNode.id
    const title = e.target.value
    updateTasklistDetails(tasklistID, { title })
    const tasklist = getTasklist(tasklistID)
    createPreview(tasklist)
}, 500))

document.querySelector('.tasklists-container').addEventListener('click', (e) => {
    const type = e.target.className
    if (type === 'tasklist-names') {
        const tasklistid = e.target.parentNode.id
        const tasklist = getTasklist(tasklistid)
        createPreview(tasklist)
    }
    if (type === 'tasklist-delete') {
        const tasklistid = e.target.parentNode.id
        deleteTasklist(tasklistid)
        setTimeout(() => {
            document.getElementById(tasklistid).remove()
            removePreviewTemplate()
        }, 1000)
    }
})