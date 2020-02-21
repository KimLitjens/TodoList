const todoList = () =>
  fetch("https://wincacademydatabase.firebaseio.com/kim/tasks.json")
    .then(response => {
      return response.json();
    })
    .then(result => {
      console.log(result);
      let tasks = Object.keys(result).map(key => ({
        id: key,
        description: result[key].description,
        done: result[key].done
      }));
      console.log("After the tasks array", tasks);
      return tasks;
    });

// const data = { description: "ajax", done: true };

// fetch(`https://wincacademydatabase.firebaseio.com/kim/tasks/**/.json`, {
//   method: "DELETE",
//   body: JSON.stringify(data)
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log("deleted:", data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });
