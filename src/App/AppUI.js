import React from 'react';
import {TodoTitle} from "../TodoTitle/TodoTitle"
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateButton } from '../CreateButton/CreateButton';
import { Progress } from '../Progress/Progress';
import { TodosLoading} from "../TodosLoading/TodosLoading";
import { TodosError } from "../TodosError/TodosError";
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from "../TodoForm";
import { TodoContext } from '../TodoContext';



function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    progress,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <>
      <TodoTitle />
      {/* completed={completedTodos} total={totalTodos} */}
      

      <TodoSearch />

      {/* // searchValue={searchValue}
      // setSearchValue={setSearchValue} */}
     
        <TodoList>
        { loading && <TodosLoading />}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos />} 

       { searchedTodos .map(todo => (
        <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          
          />))
      }
    
    </TodoList>

    <CreateButton 
    setOpenModal={setOpenModal}
    />

  {
    openModal  && (
      <Modal>
        <TodoForm>
        </TodoForm>
      </Modal>
  )}
      </>
   );
      }
export { AppUI };