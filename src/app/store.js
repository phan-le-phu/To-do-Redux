import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoList/todoListSlice'

export const store = configureStore({
  reducer: {
    todoList: todoReducer 
  },
});
