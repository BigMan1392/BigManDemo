import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const nextTheme = storedTheme || preferredTheme;

    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    document.documentElement.style.colorScheme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem('theme', nextTheme);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href={import.meta.env.BASE_URL} className="nav-logo" onClick={closeMenu}>
          <span className="logo-icon">✨</span> BigManDemo
        </a>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme" type="button">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#features" onClick={closeMenu}>Features</a></li>
          <li><a href="#tech" onClick={closeMenu}>Tech Stack</a></li>
          <li><a href="https://github.com/BigMan1392/BigManDemo" target="_blank" rel="noopener" onClick={closeMenu}>GitHub</a></li>
        </ul>
      </div>
    </nav>
  );
}
