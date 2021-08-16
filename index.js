class Todo {
  constructor(state, todoName) {
    this.state = state;
    this.todoName = todoName;
  }
}

const todos = (
  {
    id: 1,
    state: false,
    todoName: "Java"
  },

  {
    id: 2,
    state: false,
    todoName: "React JS"
  }
)


// Mettons en jachère 
const addTodo = (e) => {
  let button = document.getElementsByClassName("todo__button")
  button.on('click', (e) =>
    e.preventDefault(),
  )

  alert("Hola ! on m'a appuyé")
}