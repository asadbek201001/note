
var titleInput = document.getElementById("title-input");
var contentInput = document.getElementById("content-input");
var addButton = document.getElementById("floating-button");


var notesContainer = document.createElement("div");
notesContainer.classList.add("notes-container");
document.body.appendChild(notesContainer);

var todoArray = [];


addButton.addEventListener("click", function () {
  var titleValue = titleInput.value;
  var contentValue = contentInput.value;


  var newTodo = {
    title: titleValue,
    content: contentValue,
  };
  if(titleValue === "" || titleValue === "") {
    alert("Please enter both title and content.");
    return;
  }

  todoArray.push(newTodo);

  var noteContainer = document.createElement("div");
  noteContainer.classList.add("note-container");

  if (titleValue) {
    var noteTitle = document.createElement("h3");
    noteTitle.textContent = titleValue;
    noteTitle.style.margin = "0";
    noteContainer.appendChild(noteTitle);
  }

  if (contentValue) {
    var noteContent = document.createElement("p");
    noteContent.textContent = contentValue;
    noteContent.style.margin = "5px 0 0";
    noteContainer.appendChild(noteContent);
  }


  var deleteButton = document.createElement("button");
  deleteButton.style.backgroundImage = "url('./Screenshot 2025-01-05 at 21.47.46.png')";
  deleteButton.style.width = "40px";
  deleteButton.style.height = "40px";
  deleteButton.style.borderRadius = "5px";
  deleteButton.innerHTML = "&#128465;"; 
  deleteButton.classList.add("delete-button");
  deleteButton.id = "deleteButton_";
  deleteButton.addEventListener("click", function () {
    
    notesContainer.removeChild(noteContainer);
  });

  noteContainer.appendChild(deleteButton);
  notesContainer.appendChild(noteContainer);


  titleInput.value = "";
  contentInput.value = "";
});
