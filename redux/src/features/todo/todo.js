import { createSlice, nanoid } from "@reduxjs/toolkit";

// this is the default state
const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

// so what reducer does is that it takes initial state and actions/current change or new event occur

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            // now what happens is that we are getting new change through actions
            const todo = {
                id: nanoid(),
                text: actions.payload
            }
            state.todos.push(todo); // here we update the default state of todo slice with new change that we get through actions
        },
        removeTodo: (state, actions) => {
            state.todos = state.todos.filter(todo => todo.id !== actions.payload.id)
        },
        updateTodo: (state, actions) => {
            const todoid = actions.payload.id;
            const todotext = actions.payload.text;
            const find_todo = state.todos.find(todo => todo.id === todoid);

            if (find_todo) {
                find_todo.text = todotext;  // here we are updating text of default state with new text that we get through actions
            }

        }
    }
})


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;