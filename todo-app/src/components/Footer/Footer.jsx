import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from './data';
import { changeFilter, clearAllCompleted } from '../../store/slicer/todoSlicer';

export default function Footer() {
  const dispatch = useDispatch();
  const allNotes = useSelector((state) => state.todos.todos);
  const itemsLeftNumber = allNotes.filter((item) => item.completed === false).length;

  const changeActive = (newActive) => {
    switch (newActive) {
      case 'active':
        return dispatch(changeFilter('active'));
      case 'completed':
        return dispatch(changeFilter('completed'));
      default:
        return dispatch(changeFilter('all'));
    }
  };

  const clearCompleted = () => {
    const completedNotes = allNotes.filter((item) => item.completed).map((item) => item.id);
    dispatch(clearAllCompleted(completedNotes));
  };

  const buttons = data.map((item) => <li key={item.text.length}><button type="button" className="" onClick={() => changeActive(item.id)}>{item.text}</button></li>);
  return (
    <footer className="footer">
      <span className="need-to-do">
        <strong>{itemsLeftNumber}</strong>
        {' '}
        items left
      </span>
      <ul className="filters">
        {buttons}
      </ul>
      <button type="button" className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
}
