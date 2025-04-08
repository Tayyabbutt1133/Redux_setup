import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todo";


const AddTodo = () => {
  const [istodo, setIsTodo] = useState("");

  const dispatch = useDispatch();

  const handleTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(istodo));  // so now what we are doing is that we are using dispatch built in function from react-redux to push todo data to global todo slice and specifically to addtodo reducer method in this case !
    setIsTodo("");
  };

  return (
    <>
      <div className="flex justify-center my-20 items-center">
        <form
          onSubmit={handleTodo}
          className="flex  items-center gap-3 p-4 bg-white shadow rounded-xl w-full max-w-md"
        >
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={istodo}
            placeholder="Enter todo..."
            onChange={(e) => setIsTodo(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
