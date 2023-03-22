import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { allNotesReducer } from './reducers/allNotesReducer';
import { noteInputReducer } from './reducers/noteInputReducer';

const reducer = combineReducers(({
  notesStore: allNotesReducer,
  inputStore: noteInputReducer,
}
));

export const store = configureStore({ reducer });
