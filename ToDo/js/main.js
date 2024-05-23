const addBtn = document.querySelector('#btn')
const taskCard = document.querySelector(".todoCard")
const tasksContainer = document.querySelector("#todoCards")

// ajoute un écouteur d’évènement sur le bouton pour appeler une fonction suppression
const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function(){ //delete default task on click
    deleteTask(taskCard);                   //target the right task
});

//ajoute un écouteur d’évènement sur le bouton pour appeler une fonction ajout
addBtn.addEventListener('click', addTask)  // add a task on click

//crée la fonction d’ajout
function addTask(){
    const newTask = taskCard.cloneNode(true)    //clone the task card == <div class="todoCard"> = textarea + i
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')

    newTextArea.value = "New Task"  // set new task's text to "New task"
    newDelBtn.addEventListener('click', function() {
        deleteTask(newTask);
    });
    tasksContainer.appendChild(newTask)  //append (= add to the end) new task to the tasks container
}

//crée la fonction de suppression
function deleteTask(task){
    task.remove();
}


