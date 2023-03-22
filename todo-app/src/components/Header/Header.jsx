import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { checkLength } from '../../modules/utils/utils';
import './Header.css';

export default function Header() {
  const dispatch = useDispatch();
  const [newNote, setNewNote] = useState({ note: '' });

  const note = useSelector((store) => store.inputStore.inputText);

  const handleInput = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.className !== 'new-note' && checkLength(newNote.note)) {
        console.log(newNote.note);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [newNote]);

  return (
    <header className="header">
      <h1>todos</h1>
      <input type="text" onChange={handleInput} name="note" className="new-note" placeholder="What needs to be done?" autoFocus />
    </header>
  );
}
