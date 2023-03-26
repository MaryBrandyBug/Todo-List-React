import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/slicer/todoSlicer';

export default function Note({ id, statusClass, text }) {
  const dispatch = useDispatch();
  const removeNote = () => {
    // console.log(id);
    dispatch(removeTodo(id));
  };

  return (
    <li key={id} id={id} className={statusClass}>
      <div className="div">
        <input type="checkbox" className="toggle" />
        <label htmlFor="noteStatus">
          {text}
        </label>
        <div className="deleteBtn" type="button" onClick={removeNote} />
      </div>
    </li>
  );
}
