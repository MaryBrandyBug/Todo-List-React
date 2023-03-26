import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().getTime(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action) {
      const toggledItem = state.todos.find((todo) => todo.id === action.payload);
      toggledItem.completed = !toggledItem.completed;
    },
  },

});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
