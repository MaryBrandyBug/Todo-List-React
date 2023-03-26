import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../store/slicer/todoSlicer';

export default function Note({ id, completed, text }) {
  const dispatch = useDispatch();

  const removeNote = () => {
    dispatch(removeTodo(id));
  };

  const toggledNote = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li key={id} id={id} className={completed ? 'completed' : ''}>
      <div className="div">
        <input type="checkbox" className="toggle" onChange={toggledNote} checked={completed} />
        <label htmlFor="noteStatus">
          {text}
        </label>
        <button className="deleteBtn" type="button" onClick={removeNote} aria-label="remove-button" />
      </div>
    </li>
  );
}
