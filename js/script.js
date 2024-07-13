document.addEventListener('DOMContentLoaded', () => {
    const listTodolist = document.querySelector('.list-todolist');
    const buttonTodolist = document.getElementById('button-todolist');
    const bodyTodolist = document.querySelector('.body-todolist');
    const cardAddText = document.querySelector('.add-text');
    const buttonAdd = document.getElementById('button-add');
    const buttonCancel = document.getElementById('button-cancel');
    const newAtv = document.getElementById('add-text');

    buttonTodolist.addEventListener('click', () => {
        bodyTodolist.style.display = 'none';
        cardAddText.style.display = 'block';
    });

    buttonAdd.addEventListener('click', () => {
        const taskText = newAtv.value.trim();
        if (taskText) {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            const p = document.createElement('p');
            p.textContent = taskText;

            const trash = document.createElement('img');
            trash.src = 'img/lixo.png';
            trash.alt = 'lixo';
            trash.classList.add('lixo-todolist');

            taskDiv.appendChild(checkbox);
            taskDiv.appendChild(p);
            taskDiv.appendChild(trash);

            trash.addEventListener('click', () => {
                taskDiv.remove();
            });

            checkbox.addEventListener('change', () => {
                p.style.textDecoration = checkbox.checked ? 'line-through' : '';
            });

            listTodolist.appendChild(taskDiv);

            newAtv.value = '';
            bodyTodolist.style.display = 'block';
            cardAddText.style.display = 'none';
        }
    });

    buttonCancel.addEventListener('click', () => {
        bodyTodolist.style.display = 'block';
        cardAddText.style.display = 'none';
    });
});
