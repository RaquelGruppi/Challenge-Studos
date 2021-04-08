import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'react-jss';
import { lightTheme, darkTheme } from '../styles/theme';

const LightDarkThemeContext = createContext({});

export const LightDarkThemeProvider = ({ children }) => {
  const [lightDarkTheme, setLightDarkTheme] = useState(() => {
    const localStorageTheme = localStorage.getItem('@Studos:theme');

    return localStorageTheme || 'light';
  });

  const toggleTheme = () => {
    localStorage.setItem(
      '@Studos:theme',
      lightDarkTheme === 'light' ? 'dark' : 'light',
    );
    setLightDarkTheme(lightDarkTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider
      theme={
        lightDarkTheme === 'light'
          ? JSON.parse(JSON.stringify(lightTheme))
          : JSON.parse(JSON.stringify(darkTheme))
      }
    >
      <LightDarkThemeContext.Provider value={{ lightDarkTheme, toggleTheme }}>
        {children}
      </LightDarkThemeContext.Provider>
    </ThemeProvider>
  );
};

LightDarkThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLightDarkTheme = () => {
  const context = useContext(LightDarkThemeContext);

  return context;
};
