// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  const inputValue = document.getElementById("myInput").value;
  const data = { description: inputValue, done: true };
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    fetch("https://wincacademydatabase.firebaseio.com/kim/tasks.json", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
  document.getElementById("myInput").value = "";
  window.location.reload(0);
}

todoList().then(henk => {
  setTodoList(henk);
});

const setTodoList = function(testingg1) {
  const todoListDatas = testingg1;
  //   console.log(todoListDatas);
  todoListDatas.forEach(todoListData => {
    const listItemID = `${todoListData.id}`;
    // console.log(listItemID);
    const listItem = document.createElement("li");
    const listItemContent = `${todoListData.description}`;
    listItem.appendChild(document.createTextNode(listItemContent));
    document.getElementById("testingUL").appendChild(listItem);

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("X");
    span.className = "close";
    span.id = listItemID;
    span.appendChild(txt);
    listItem.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  });
};

// create a new list item on pushing the enterbutton

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

// Click on a close button to hide the current list item

const deleteFromApi = () => {
  const deleteData = event.target.id;
  console.log(deleteData);
  fetch(`https://wincacademydatabase.firebaseio.com/kim/tasks/${deleteData}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(data => {
      console.log("deleted:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

const close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
