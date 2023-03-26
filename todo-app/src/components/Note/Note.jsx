import React from 'react';

export default function Note({ id, statusClass, text }) {
  return (
    <li id={id} className={statusClass}>
      <div className="div">
        <input type="checkbox" className="toggle" />
        <label htmlFor="noteStatus">
          {text}
        </label>
        <button className="deleteBtn" type="button" />
      </div>
    </li>
  );
}
