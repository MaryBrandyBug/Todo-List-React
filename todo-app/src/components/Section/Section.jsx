import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Section.css';
import Note from '../Note/Note';
import {
  toggleAllTodo, untoggleAllTodo, clearAllCompleted, changeFilter,
} from '../../store/slicer/todoSlicer';

export default function Section() {
  const dispatch = useDispatch();
  const allNotes = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);

  const itemsLeftNumber = allNotes.filter((item) => item.completed === false).length;

  const toggleAll = () => {
    const currentUncompleted = allNotes.map((item) => item.completed);
    if (currentUncompleted.includes(true) && currentUncompleted.includes(false)) {
      const uncompletedNotes = allNotes.map((item, i) => (!item.completed ? i : null)).filter((item) => item !== null);
      dispatch(toggleAllTodo(uncompletedNotes));
    }
    if (!currentUncompleted.includes(false) || !currentUncompleted.includes(true)) {
      const completedNotes = allNotes.map((item, i) => i);
      dispatch(untoggleAllTodo(completedNotes));
    }
  };

  const clearCompleted = () => {
    const completedNotes = allNotes.filter((item) => item.completed).map((item) => item.id);
    dispatch(clearAllCompleted(completedNotes));
  };

  const filterTasks = (tasks, activeNotes) => {
    if (activeNotes === 'active') {
      return tasks.filter((item) => !item.completed);
    } if (activeNotes === 'completed') {
      return tasks.filter((item) => item.completed);
    }
    return tasks;
  };

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

  return (
    <section className="main-content">
      <input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAll} checked={!itemsLeftNumber} />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">
        {filterTasks(allNotes, filter).map((item) => <Note key={item.id} id={item.id} text={item.text} completed={item.completed} />)}
      </ul>
      <footer className="footer">
        <span className="need-to-do">
          <strong>{itemsLeftNumber}</strong>
          {' '}
          items left
        </span>
        <ul className="filters">
          <li>
            <button type="button" className="all-notes" onClick={() => changeActive()}>All</button>
          </li>
          <li>
            <button type="button" className="active-notes" onClick={() => changeActive('active')}>Active</button>
          </li>
          <li>
            <button type="button" className="completed-notes" onClick={() => changeActive('completed')}>Completed</button>
          </li>
        </ul>
        <button type="button" className="clear-completed" onClick={clearCompleted}>Clear completed</button>
      </footer>
    </section>
  );
}
