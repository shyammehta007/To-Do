import { createTasklist } from './TasklistsDS.js'

function createLIElement(details) {
    const id = createTasklist(details)
    const tasklist = document.createElement('li')
    tasklist.setAttribute = tasklist.setAttribute('id', id)
    tasklist.className = 'tasklist-li'

    const titleinput = document.createElement('input')
    titleinput.value = details.title
    titleinput.className = `tasklist-names`

    const deleteTasklist = document.createElement('div')
    deleteTasklist.className = 'tasklist-delete'

    tasklist.append(titleinput, deleteTasklist)

    return tasklist
}


export function addTasklistElement(details) {
    const tasklistLIElement = createLIElement(details)
    document.getElementById('list-of-tasklist').appendChild(tasklistLIElement)
}

