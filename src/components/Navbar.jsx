import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <span className="logo-icon">✨</span> BigManDemo
        </a>
        <button 
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#features">Features</a></li>
          <li><a href="#tech">Tech Stack</a></li>
          <li><a href="https://github.com/BigMan1392/BigManDemo" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
      </div>
    </nav>
  );
}
