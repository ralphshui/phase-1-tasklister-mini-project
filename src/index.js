let someNum = 1;

document.addEventListener("DOMContentLoaded", () => {

  const inputBox = document.getElementById('new-task-description');
  
  const btn = document.getElementById('create-task-form');
  btn.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inputBox.value === ''){
      return;
    }

    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    
    div.id = 'list';
    div.className = `card-${someNum++}`;
    ul.id = 'tasks';

    h2.textContent = 'To Do';

    const toDoLi = document.createElement('li');
    toDoLi.textContent = inputBox.value;
    
    inputBox.value = '';

    div.addEventListener('click', () => div.remove())
    
    div.append(h2, ul);
    ul.append(toDoLi);
    document.body.append(div);
  });
});
