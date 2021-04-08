import { useTheme } from 'react-jss';
import { Toggle } from '../Toggle';

import { useStyles } from './styles';

export const Header = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const user = {
    name: 'Raquel Gruppi',
    image: 'https://avatars.githubusercontent.com/u/68728227?v=4',
  };

  return (
    <header className={classes.container}>
      <img src={user.image} alt="Avatar" />
      <strong>Olá, {user.name}</strong>
      <div className={classes.themeContainer}>
        <span>Modo escuro</span>
        <Toggle />
      </div>
    </header>
  );
};
