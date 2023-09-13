let taskInput = document.querySelector(".form input");
let button = document.querySelector(".btn button");
let divtasks = document.querySelector("#tasks");
let span = document.querySelector('span');
let edit = document.querySelector(".action .edit");
let input = document.querySelector(".task input");
console.log(edit);
taskInput.value="";

let AllTasks=[];
// function to render tasks
let rendertask=() =>{
    if(taskInput.value.trim()==""){
        alert("Please fill the field with data!")
    }else{

    
    singletask={
        task: taskInput.value.trim(),
    };
    AllTasks.push(singletask);
    taskInput.value="";
    readtasks();
    console.log(AllTasks);}

} 
// function to read tasks

let readtasks=()=>{
    divtasks.innerHTML="";
    span.innerText= AllTasks.length;
    AllTasks.forEach((element,id) =>{
        divtasks.innerHTML +=`
        
         <div class="row">
             <div class="task">
             <input type="text" value="${element.task}" readonly>
             </div>
             <div class="action">
                 <button onclick="updatetask(${id})"  class="edit">Edit</button>
                 <button onclick="deletetask(${id})" class="danger">Delete</button>
             </div>
         </div>
    
        `;

    })
}

//fuction to update tasks
let updatetask= (id)=>{   
    const taskElement = document.querySelectorAll(".task input")[id];
    const editbtn = document.querySelectorAll(".action .edit")[id];
  
  if (editbtn.innerText == "Edit") {
    taskElement.removeAttribute("readonly");
    taskElement.focus();
    editbtn.innerText = "Save";
  } else {
    taskElement.setAttribute("readonly", "readonly");
    editbtn.innerText = "Edit";

    const updatedTask = taskElement.value.trim();

    if (id >= 0 && id < AllTasks.length) {
      AllTasks[id].task = updatedTask;
    }
   
  }
};
// function to delete tasks

let deletetask=(id) =>{
    AllTasks.splice(id,1);
    readtasks();
}
button.addEventListener("click", rendertask);
edit.addEventListener('click',updatetask);