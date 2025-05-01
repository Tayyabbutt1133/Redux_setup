import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todo";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos); // now we are getting todos from global redux state/todos slice
  console.log("Todos from Global state in list :", todos);

  const removeHandler = (todoId) => {
    console.log("Deleting this Todo", todoId);
    dispatch(removeTodo(todoId))
  }


  return (
    <>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Todo List</h1>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-2 rounded"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => removeHandler(todo.id)}
                className="text-sm text-white cursor-pointer bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
