let addbtn =document.getElementById('add')
let todos = document.getElementById('todo-area')
addbtn.addEventListener('click',


function add(event) {
    event.preventDefault();
    let item =document.getElementById('task');

    // CREATING A DIV TODO:
    let todo = document.createElement('div');
    todo.setAttribute('id','todo'); //SETTING ID TO TODO
    
    //CREATING ITEM LIST
    let todoitem =document.createElement('p');
    todoitem.setAttribute('id','list')
    //CREATING TEXT NODE
    let textNode =document.createTextNode(item.value)
    todo.appendChild(todoitem);
    
    todoitem.appendChild(textNode);

    // CREATING DELETE BUTTON
    let tododelete = document.createElement('input')
    tododelete.setAttribute('type', 'button');
    tododelete.setAttribute('id', 'delete');
    tododelete.setAttribute('value', 'delete');

    todo.appendChild(tododelete);
    todos.appendChild(todo)

    item.value ='';
   
})
todos.addEventListener('click', function(event){
    if(event.target.value === 'delete'){
        event.target.parentNode.remove();
    }
})