import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todo.js'

export const store = configureStore(
    {
        reducer: todoReducer
    }
);