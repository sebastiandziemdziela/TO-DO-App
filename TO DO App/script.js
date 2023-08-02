const task = document.getElementById("add-new-task");
const date = document.getElementById("deadline");
const list = document.getElementById("new-task");

function addTask() {

    if (task.value === "" || date.value === "") {
        alert("Please enter a task and a deadline date.");
    
    }
    else{
        
        const listItem = document.createElement("li");
        listItem.textContent = task.value + "  " + date.value;
        list.appendChild(listItem);

        task.value = "";
        date.value = "";

   
        const deleteButton = document.createElement("img");
        deleteButton.src = "img/trash.png";
        deleteButton.alt = "Delete";

        listItem.appendChild(deleteButton);

   
        deleteButton.addEventListener("click", function () {
        listItem.remove();
        });
}
}

list.addEventListener("click", function (c) {
    if (c.target.tagName === "LI") {
        c.target.classList.toggle("checked");
    } else if (c.target.tagName === "IMG") {
        c.target.parentElement.remove();
    }
});


