const addBtn = document.querySelector('#btn')  //to select an html element with id = "btn" 
                                                //and store it in the variable addBtn
addBtn.addEventListener('click', addTask)   // to add an eventListener to addBtn (variable with selected btn) with
                                            // parameteres event-type (click) and name of function to execute (addTask on click)

const taskCard = document.querySelector(".todoCard")    // selecting an html element with class="todoCard"-> div with one card
const tasksContainer = document.querySelector("#todoCards")  //selecting an html element with class="todoCards"-> div with all cards

const delBtn = document.querySelector('.delBtn')    // select an icon trash and store in delBtn variable
delBtn.addEventListener('click', function() {
    deleteTask(taskCard);
});   //by clicking on the icon, the function deleteTask will delete a task


// function to add a task
function addTask(){
    const newTask = taskCard.cloneNode(true)    //to clone a card (div with textarea and i)
                                                //assign cloned card to a variable newTask

    const newTextArea = newTask.querySelector('.task') //select textarea of the cloned task with class "task" and text "New task"
    newTextArea.value = "New Task"                      // and set new task's text to "New task"

    tasksContainer.appendChild(newTask)     // append new task (cloned) to the task container

    const newDelBtn = newTask.querySelector('.delBtn')  //select a trash icon of the cloned task
    newDelBtn.addEventListener('click', function(){     //add delete event listener to new task
        deleteTask(newTask);                             // to target the new task
    });


}
// function to delete a task
function deleteTask(task){
    task.remove(); 
}
const divCounter = document.querySelector('#count') // select div with id = count
                                    // divCounter.childElementCount
                                    // divCounter.addEventListener()
function countCards(){

    const newNumber = divCounter.cloneNode(true)    // clone div with id= "count"
    // const numberCards = tasksContainer.children.length  // count how many child elements in tasksContainer
    // const numberCards = tasksContainer.getElementsByTagName('*')
    const numberCards = tasksContainer.childElementCount    // to count the number of immediate children for tasksContainer
    if(numberCards > 0){
        console.log(numberCards)
    }
}
countCards(tasksContainer)

