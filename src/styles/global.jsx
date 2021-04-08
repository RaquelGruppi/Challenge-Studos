import { createUseStyles, useTheme } from 'react-jss';
import 'react-toastify/dist/ReactToastify.css';

const useGlobalStyles = createUseStyles(theme => {
  return {
    '@global': {
      '*': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
      },

      body: {
        background: theme.backgroundPrimary,
        color: theme.text,
        WebkitFontSmoothing: 'antialiased',
      },

      html: {
        fontSize: '62.5%',

        '@media (min-width: 720px)': {
          fontSize: '70%',
        },
        '@media (min-width: 1080px)': {
          fontSize: '85%',
        },
      },

      'body, input, textarea, button': {
        fontFamily: '"Roboto", sans-serif',
        fontWeight: 400,
      },

      'h1, h2, h2, h3, h4, h5, h6, strong': {
        fontWeight: 700,
      },

      button: {
        cursor: 'pointer',
      },

      a: {
        color: 'inherit',
        textDecoration: 'none',
      },

      '.errorToast': {
        background: theme.warning,
        fontSize: '1.4rem',
        '@media (min-width: 720px)': {
          fontSize: '1.3rem',
        },
      },
    },
  };
});

export function GlobalStyles() {
  const theme = useTheme();
  useGlobalStyles({ theme });

  return <></>;
}
