import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const ThemeContext = createContext();

const themes = {
  light: { background: '#fff', color: '#000' },
  dark: { background: '#333', color: '#fff' },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themes[theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
