import { useState, useEffect } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './components/Todo';
import { setTodos } from './slice/todoSlice';



function App() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log("get Item ---->", storedTodos);
    if (storedTodos && storedTodos.length > 0) {
        dispatch(setTodos(storedTodos));
    }
}, [dispatch]);

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Todos set in local storage:", todos);
}, [todos]);

  return (
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <AddTodo />
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <div key={todo.id} className='w-full flex my-2 border p-5 rounded-lg shadow-sm shadow-white'>
                  <Todo todo = {todo} />
                </div>

              ))
            }
        </div>
    </div>
</div>
  )
}

export default App
