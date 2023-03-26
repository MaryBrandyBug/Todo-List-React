import React from 'react';
import { useSelector } from 'react-redux';
import './Section.css';
import Note from '../Note/Note';

export default function Section() {
  const allNotes = useSelector((state) => state.todos.todos);

  return (
    <section className="main-content">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">
        {allNotes.map((item) => <Note key={item.id} id={item.id} text={item.text} className={item.checked ? 'completed' : ''} />)}
      </ul>
      <footer className="footer">
        <span className="need-to-do">
          <strong>0</strong>
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
