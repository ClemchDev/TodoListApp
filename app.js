
const taskItem = (id, value) => {
    // check if 'value' is an empty string
    if(!(value.length !== 0 && ((value[0] && value[value.length - 1]) != ' '))) return;
    
    const div = document.querySelector('.task-list').appendChild(document.createElement('div'));
    div.classList.add('task-item');
    div.id = id;
    
    const span = div.appendChild(document.createElement('span'));
    span.classList.add('checkbox');
    span.appendChild(document.createElement('div')).classList.add('checked-img');

    const label = div.appendChild(document.createElement('label'));
    label.innerText = value;

    const trash = div.appendChild(document.createElement('div'));
    trash.classList.add('trash');
}


document.addEventListener('click', e => {

    if(document.querySelector('.task-list').childElementCount > 1) {
        document.querySelector('.no-task-list').classList.add('none')
    } else {
        document.querySelector('.no-task-list').classList.remove('none')
    }

    console.log(document.querySelector('.task-list'))

    document.querySelector('.search-bar-button').addEventListener('click', e => {
        const value = document.querySelector('.search-bar').value;

        document.querySelector('.search-bar').value = '';
        let i = 0
        taskItem(i++, value)
    })        
    
    document.querySelectorAll('.checkbox').forEach(element => {
        
        element.addEventListener('click', e => {

            const parentElement = e.target.parentNode;

            if(parentElement.classList.contains('checked')) {
                parentElement.classList.remove('checked')
            } else {
                parentElement.classList.add('checked')
            }
        })    
        // quand clique sur checked-img => remonte à span et met l'attribut checked à span
        // je veux que ça puisse mettre uniquement à task-list

    })
    
    document.querySelectorAll('.trash').forEach(element => {
        element.addEventListener('click', e => {
            e.originalTarget.parentElement.remove()
        })
    })
});
