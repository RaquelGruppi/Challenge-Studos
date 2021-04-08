import { FaApple } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';
import { Link } from 'react-router-dom';
import { useTheme } from 'react-jss';

import { useStyles } from './styles';

export const Footer = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <footer className={classes.container}>
      <div className={classes.links}>
        <Link to="/">Termos de uso</Link>
        <Link to="/">Política de privacidade</Link>
        <Link to="/">Blog</Link>
      </div>
      <div className={classes.links}>
        <Link to="/">
          <FaApple />
        </Link>
        <Link to="/">
          <DiAndroid />
        </Link>
      </div>
    </footer>
  );
};
