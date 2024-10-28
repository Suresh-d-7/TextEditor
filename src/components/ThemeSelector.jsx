import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSelector = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSelector;
