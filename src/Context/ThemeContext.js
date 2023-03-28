import { createContext } from 'react';
import React, { useState, useEffect } from 'react';


const ThemeContext = createContext();
var initialTheme = '';

const ThemeProvider = ({ children }) => {
  
  initialTheme = localStorage.getItem("themeStatus")=="true" ? 'dark' : 'light';
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    localStorage.setItem("themeStatus", e.target.checked);
    localStorage.getItem("themeStatus")=="true" ? setTheme('dark') : setTheme('light');
  };

  const data = {theme, handleTheme};

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export {ThemeProvider};
export default ThemeContext;