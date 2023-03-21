import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { allNotesReducer } from './reducers/allNotesReducer';

const reducer = combineReducers(({
  notesStore: allNotesReducer,
}
));

export const store = configureStore({ reducer });
