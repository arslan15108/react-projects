import { createSlice,nanoid } from "@reduxjs/toolkit"
const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        updateTodo: (state, action) =>{
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            // state.todos = (state.todos.id ,{...state.todos, text: action.payload})

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo=> todo.id !== action.payload)

        },
        setTodos: (state, action) => {
            state.todos = action.payload;
        }
    }
})

export const {addTodo, removeTodo,updateTodo, setTodos} = todoSlice.actions

export default todoSlice.reducer