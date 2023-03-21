import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <input type="text" className="new-note" placeholder="What needs to be done?" autoFocus />
    </header>
  );
}
