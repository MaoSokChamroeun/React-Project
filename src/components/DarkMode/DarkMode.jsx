
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './DarkMode.css'
const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'active');

    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      localStorage.setItem('darkMode', darkMode ? 'active' : 'inactive');
    }, [darkMode]);
  
    const toggleTheme = () => setDarkMode(!darkMode);
  
    return (
      <div className="d-flex justify-content-end">
        <button
          variant={darkMode ? "black" : "white"}
          onClick={toggleTheme}
          className="rounded-circle p-1 "
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun color="#ffc107" size={24} /> : <Moon color="#343a40" size={24} />}
        </button>
      </div>
    );
  }

export default DarkMode
