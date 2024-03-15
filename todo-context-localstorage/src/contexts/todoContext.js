const { createContext, useContext } = require("react");


export const todoContext = createContext({
    todos: [
        {
            id: '',
            todo: 'Todo Msg',
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => {
        return useContext(todoContext);
}


export const TodoProvider = todoContext.Provider;