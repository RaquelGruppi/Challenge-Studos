import { useEffect } from 'react';
import { useTheme } from 'react-jss';
import { useLightDarkTheme } from '../../hooks/useLightDarkTheme';

import { useStyles } from './styles';

export const Toggle = () => {
  const { lightDarkTheme, toggleTheme } = useLightDarkTheme();
  const theme = useTheme();
  const classes = useStyles({ lightDarkTheme, theme });

  useEffect(() => {
    document.body.style.transition = 'background 1.5s, color 0.5s';
  }, []);

  return (
    <label htmlFor="themeToggle" className="switch">
      <input
        onClick={toggleTheme}
        id="themeToggle"
        type="checkbox"
        style={{ display: 'none' }}
      />
      <span className={classes.toggle} />
    </label>
  );
};
