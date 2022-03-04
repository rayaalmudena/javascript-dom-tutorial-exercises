// Your code here

function deleteElement(li) {

    li.addEventListener('click', function handleClick(event) {
        event.target.parentElement.parentElement.classList.add("delete");
        document.querySelector(".delete").remove();
    });
}

const deleteIcons = document.querySelectorAll("i");
for (let i = 0; i < deleteIcons.length; i++) {    
    deleteElement(deleteIcons[i]);   
}

const addNew = document.querySelector(".todo-header");

addNew.addEventListener('click', (event) => {
    let newElementText = document.querySelector("#addToDo").value;
    let insert = '<span><i class="fa fa-trash"></i></span> '+newElementText;
    let listElement=document.createElement("li");
    listElement.innerHTML=insert;
    deleteElement(listElement);
    document.querySelector("ul").appendChild(listElement);
});
