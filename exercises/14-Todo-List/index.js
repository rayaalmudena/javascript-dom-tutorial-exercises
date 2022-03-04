// Your code here

function deleteEvent(elemento) {

    elemento.addEventListener('click', function handleClick(event) {
        event.target.parentElement.parentElement.classList.add("delete");
        document.querySelector(".delete").remove();
    });
}

const eliminar = document.querySelectorAll("i");
for (let i = 0; i < eliminar.length; i++) {    
    deleteEvent(eliminar[i]);   
}

const addNew = document.querySelector(".todo-header");

addNew.addEventListener('click', (event) => {
    let nuevoElemento = document.querySelector("#addToDo").value;
    let insert = '<span><i class="fa fa-trash"></i></span>'+nuevoElemento;
    let listElement=document.createElement("li");
    listElement.innerHTML=insert;
    deleteEvent(listElement);
    document.querySelector("ul").appendChild(listElement);
});
