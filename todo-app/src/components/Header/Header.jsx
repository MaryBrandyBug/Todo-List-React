import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkLength } from '../../modules/utils/utils';
import './Header.css';
import { addTodo } from '../../store/slicer/todoSlicer';

export default function Header() {
  const dispatch = useDispatch();
  const [newNote, setNewNote] = useState('');

  const handleInput = (e) => {
    setNewNote(e.target.value);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.className !== 'new-note' && checkLength(newNote)) {
        dispatch(addTodo(newNote));
        setNewNote('');
      }
    };
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [newNote]);

  const adding = (event) => {
    if (event.key === 'Enter' && checkLength(newNote)) {
      dispatch(addTodo(newNote));
      setNewNote('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input type="text" value={newNote} onChange={handleInput} onKeyDown={adding} name="note" className="new-note" placeholder="What needs to be done?" autoFocus />
    </header>
  );
}
