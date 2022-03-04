// Your code here
// funtion to add eventlistener to delete any list-item, already there or created
function deleteElement(li) {

    li.addEventListener('click', function handleClick(event) {
        event.target.parentElement.parentElement.classList.add("delete");
        document.querySelector(".delete").remove();
    });
}

//For each element already created on the  list, add the event
const deleteIcons = document.querySelectorAll("i");
for (let i = 0; i < deleteIcons.length; i++) {    
    deleteElement(deleteIcons[i]);   
}

// get the h1 to use it as a button for submitting each new item
const addNew = document.querySelector(".todo-header");

//eventlistener on h1 for creating a new li
addNew.addEventListener('click', (event) => {

    //get the text of the input
    let newElementText = document.querySelector("#addToDo").value;

    //create a string variable with all the html that goes inside the li, with the text input
    let insert = '<span><i class="fa fa-trash"></i></span> '+newElementText;

    //create li element
    let listElement=document.createElement("li");
    
    //add the string to the li 
    listElement.innerHTML=insert;

    //add eventlistener only to the icon
    deleteElement(listElement.querySelector("span i"));

    //Adding li to the ul
    document.querySelector("ul").appendChild(listElement);
});
