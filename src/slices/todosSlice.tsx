import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",

  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);

      if (todo) {
        todo.title = action.payload.title;
        todo.completed = action.payload.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;