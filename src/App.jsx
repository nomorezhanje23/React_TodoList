import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
          ...currentTodos, 
          { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

// tHis is when I want to use a hook! 

  //export default function App() {
 // const [todos, setTodos] = useState(() => {
    //const localValue = localStorage.getItem("ITEMS")
    //if (localValue == null) return []
    //return JSON.parse(localValue)
 // })
 // useEffect(() => {
   // localStorage.setItem("ITEMS", JSON.stringify(todos))
 // }, [todos])



  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return  (
    <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  
  </>
)
}

//follow these steps and it will all work out!