import React from 'react';

export default function Note() {
  return (
    <div className="div">
      <input type="checkbox" className="toggle" />
      <label htmlFor="noteStatus">
        {/* {addNewNote.value} */}
      </label>
      <button className="deleteBtn" type="button" />
    </div>
  );
}
