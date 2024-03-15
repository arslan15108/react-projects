
import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider } from './contexts';
import { TodoForm, TodoItem } from './components';

function App() {

  const [todos, setTodos] = useState([]);
  
   
  // addTodo Method
  const addTodo = (todo) => {
    setTodos((prevTodo) =>[...prevTodo, {id:Date.now(), ...todo}])
  }

  // updateTodo Method
  const updateTodo = (id, todo) => {
    setTodos((prevTodo) =>{return prevTodo.map((prev) => (prev.id === id ? todo : prev))})
  }

  // deleteTodo Method
  const deleteTodo = (id) => {
    setTodos((prevTodo)=> prevTodo.filter((todo) => todo.id !== id))
  }

  // ToggleComplete Method
  const toggleComplete = (id) =>{
    setTodos((prevTodo) => prevTodo.map((prev)=> prev.id === id ? {...prev, completed: !prev.completed} : prev))
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
        setTodos(storedTodos);
    }
}, []); // Run only once on component mount

useEffect(() => {
    // Ensure todos is not undefined or null
    if (todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log("Todos set in local storage:", todos);
    } else {
        console.warn("Todos is undefined or null");
    }
}, [todos]);

  return (
    // import TodoProvider with the value from the todoContext
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white hover:shadow-slate-700 cursor-pointer">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-8"> Todo's Using Context Api & Local Storage </h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                </div>
                <div className="flex flex-wrap gap-y-3 max-w-[600px] m-auto">
                    {/*Loop and Add TodoItem here */}
                    {
                    todos.map((todo) => (
                      <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                        </div>
                    ))}

                </div>
            </div>
    </TodoProvider>
  );
}

export default App;
