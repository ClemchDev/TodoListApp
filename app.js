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

    let id = 0

    if(document.querySelector('.task-list').childElementCount > 1) {
        document.querySelector('.no-task-list').classList.add('none')
    } else {
        document.querySelector('.no-task-list').classList.remove('none')
    }

    document.querySelector('.search-bar-button').addEventListener('click', e => {
        const value = document.querySelector('.search-bar').value;

        document.querySelector('.search-bar').value = '';
        
        id++
        taskItem(id, value)
        
    })        
    
    document.querySelectorAll('.checkbox').forEach(element => {
        
        element.addEventListener('click', e => {
           
            const parentElement = e.target.parentNode;

            if(parentElement.classList.contains('checked')) {
                parentElement.classList.remove('checked')
            } else {
                parentElement.classList.add('checked')
            }
            updateData(); 
            e.stopPropagation();
        })

        document.querySelectorAll('.checked-img').forEach(element => {
            element.addEventListener('click', e => {
                
                const parentElement = e.target.parentNode.parentNode;

                parentElement.classList.remove('checked')
                updateData();
                e.stopPropagation()
            })
        })
    })
    
    document.querySelectorAll('.trash').forEach(element => {
        element.addEventListener('click', e => {
            e.originalTarget.parentElement.remove()
        })
    })
    
    updateData()
});

const updateData = () => {
    const createdTasks = document.querySelector('.task-list').childElementCount - 1;
    const completedTasks = document.querySelectorAll('.checked').length

    document.querySelector('.created-tasks').innerText = createdTasks;

    if(!(completedTasks === 0 && createdTasks === 0)) {
        document.querySelector('.completed-tasks').innerText = completedTasks + ' de '+ createdTasks;
    } else {
        document.querySelector('.completed-tasks').innerText = '0';
    }
}

//pb de stopPropagation