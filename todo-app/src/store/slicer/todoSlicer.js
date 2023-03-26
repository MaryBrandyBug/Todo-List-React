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
  },

});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
