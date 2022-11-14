const inputText     =   document.querySelector(".todo-input");
const inputBtn      =   document.querySelector(".todo-btn");
const inputList     =   document.querySelector(".todo-list");
const filterSelect  =   document.querySelector("#todoListFilter");

// creating event listener

inputBtn.addEventListener("click",addingtoList);
inputList.addEventListener("click",deleteList);
filterSelect.addEventListener("click",fiterOptions);

// all functions

function addingtoList(e){
    // creating DIV element
    const todoDiv   =   document.createElement("div");
    todoDiv.classList.add("todo-area");

    // creating Li
    const todoLi    =   document.createElement("li");
    todoLi.innerText = inputText.value;
    todoLi.classList.add("todo-item");

    // appending todoLi to Div element as a child
    todoDiv.appendChild(todoLi);

    // adding local storage
    saveList(inputText.value);

    // creating check btns 
    const completeBtn       =   document.createElement("button");
    completeBtn.innerHTML   = '<i class="fa-solid fa-square-check"></i>';
    completeBtn.classList.add("complete-btn");
    todoDiv.appendChild(completeBtn);

    const deleteBtn     =   document.createElement("button");
    deleteBtn.innerHTML =   '<i class="fa-solid fa-trash-can"></i>'
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);

    // append to the list to ul parent element
    inputList.appendChild(todoDiv);

    // clear input text area
    inputText.value = "";
}

function deleteList(e){
    // delete list item
    const item  =   e.target;
    if(item.classList[0] === 'delete-btn'){
        const parentDiv  =   item.parentElement;
        parentDiv.classList.add("remove-effect");
        parentDiv.addEventListener("transitionend",function(){
            parentDiv.remove();
        })
    }

    // check btn
   
    if(item.classList[0] === 'complete-btn'){
        const parentDiv  =   item.parentElement;
        parentDiv.classList.toggle("completed");
    }

}

// filtering
function fiterOptions(e){
    //childNodes does not working  on crome
    const doList    =  inputList.children;
    for(let i=0;i<doList.length;i++){
        switch(e.target.value){
            case "all":
                doList[i].style.display = "flex"
                break;
            case "completed":
                if(doList[i].classList.contains("completed")){
                    doList[i].style.display = "flex";
                }else{
                    doList[i].style.display = "none";                    
                }
                break;
            case "inProcess":
                if(!doList[i].classList.contains("completed")){
                    doList[i].style.display = "flex";
                }else{
                    doList[i].style.display = "none";
                }
                break; 
        }
    }
}

// save list to local storage

function saveList(list){
    // check file whater already exis or not
    let todoList;
    if(localStorage.getItem("todoList") === "null"){
        todoList = [];
    }else{
        todoList = JSON.parse(localStorage.getItem("todoList"));
    }

    todoList.push(list);
    localStorage.setItem("todoList",JSON.stringify(todoList));
}