// export function toggleModalState() {
//     const modal = document.querySelector('#task-modal');
//     let classes = modal.className.split(' ');
//     (classes[classes.length - 1] === 'close') ? classes[classes.length - 1] = 'open' : classes[classes.length - 1] = 'close'
//     const newClasses = classes.join(' ')
//     modal.className = newClasses
// }


export function openModal() {
    const modal = document.querySelector('#task-modal');
    let classes = modal.className.split(' ');
    classes[classes.length - 1] = 'open'
    const newClasses = classes.join(' ')
    modal.className = newClasses
}

export function closeModal() {
    const modal = document.querySelector('#task-modal');
    let classes = modal.className.split(' ');
    classes[classes.length - 1] = 'close'
    const newClasses = classes.join(' ')
    modal.className = newClasses
}
