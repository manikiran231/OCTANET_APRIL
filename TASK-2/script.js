document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const clearAllBtn = document.getElementById("clearAllBtn");
    const clearCompletedBtn = document.getElementById("clearCompletedBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", addTask);
    clearAllBtn.addEventListener("click", clearAllTasks);
    clearCompletedBtn.addEventListener("click", clearCompletedTasks);
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
  
        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "❌";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", function() {
          li.remove();
        });
  
        const completeBtn = document.createElement("span");
        completeBtn.textContent = "                  ✓";
        completeBtn.className = "complete";
        completeBtn.addEventListener("click", function() {
          li.classList.toggle("completed");
        });
  
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
      } else {
        alert("Please enter a task!");
      }
    }
  
    function clearAllTasks() {
      taskList.innerHTML = "";
    }
  
    function clearCompletedTasks() {
      const completedTasks = taskList.querySelectorAll(".completed");
      completedTasks.forEach(function(task) {
        task.remove();
      });
    }
  });
  