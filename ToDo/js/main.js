
const addBtn = document.querySelector('#btn')

const taskCard = document.querySelector(".todoCard")
const tasksContainer = document.querySelector("#todoCards")


//ajoute un écouteur d’évènement sur le bouton pour appeler une fonction ajout
addBtn.addEventListener('click', addTask)  // add a task on click
   

//crée la fonction d’ajout

function addTask(){
    const newTask = taskCard.cloneNode(true)    //clone the task card == <div class="todoCard"> = textarea + i
    const newTextArea = newTask.querySelector('.task')

    newTextArea.value = "New Task"  // set new task's text to "New task"

    tasksContainer.appendChild(newTask)  //append (= add to the end) new task to the tasks container
}

