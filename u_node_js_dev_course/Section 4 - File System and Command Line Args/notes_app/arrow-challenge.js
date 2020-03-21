const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true
    },
    {
      text: "Clean yard",
      completed: false
    },
    {
      text: "Film course",
      complete: false
    }
  ],
  getTasksToDo() {
    return this.tasks.filter(task => !task.completed);
  }
};

console.log(tasks.getTasksToDo());
