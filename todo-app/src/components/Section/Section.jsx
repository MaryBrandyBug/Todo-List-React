import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Section.css';
import Note from '../Note/Note';
import { toggleAllTodo } from '../../store/slicer/todoSlicer';

export default function Section() {
  const dispatch = useDispatch();
  const allNotes = useSelector((state) => state.todos.todos);

  const toggleAll = () => {
    const currentUncompleted = allNotes.map((item) => item.completed);
    if (currentUncompleted.includes(true) && currentUncompleted.includes(false)) {
      const uncompletedNotes = allNotes.map((item, i) => (!item.completed ? i : null)).filter((item) => item);
      dispatch(toggleAllTodo(uncompletedNotes));
    }
  };
  return (
    <section className="main-content">
      <input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAll} />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">
        {allNotes.map((item) => <Note key={item.id} id={item.id} text={item.text} completed={item.completed} />)}
      </ul>
      <footer className="footer">
        <span className="need-to-do">
          <strong>{allNotes.length}</strong>
          {' '}
          items left
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className="all-notes">All</a>
          </li>
          <li>
            <a href="#/active" className="active-notes">Active</a>
          </li>
          <li>
            <a href="#/completed" className="completed-notes">Completed</a>
          </li>
        </ul>
        <button type="button" className="clear-completed">Clear completed</button>
      </footer>
    </section>
  );
}
