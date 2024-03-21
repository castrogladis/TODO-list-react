import React from "react";
import { UseLocalStorage } from "./UseLocalStorage";
import { Progress } from "../Progress/Progress"; 

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = UseLocalStorage("TODOS_V1", []);
    //UseLocalStorage("TODOS_V1", "AGREGA TAREAS");

    const [openModal, setOpenModal] = React.useState(false)

    const [searchValue, setSearchValue] = React.useState("");
    // console.log("Los usuarios buscan todos de " + searchValue);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const progress = totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100)



    const searchedTodos = todos.filter(
        todo => {
            return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
        }
    );

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos);
    }

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            progress,
            openModal,
            setOpenModal,
            }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider, Progress }

//Tomar en cuenta las lineas progress
