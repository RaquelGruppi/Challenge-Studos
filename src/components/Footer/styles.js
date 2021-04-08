import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    marginTop: '2rem',
    justifySelf: 'center',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: ({ theme }) => theme.footer,
    transition: 'color 0.5s',

    '@media (min-width: 500px)': {
      flexDirection: 'row',
    },
  },

  links: {
    marginTop: '1.5rem',
    fontSize: '1.3rem',

    '& a + a': {
      marginLeft: '1rem',
    },

    '& svg': {
      fontSize: '2rem',
    },

    '& a + a > svg': {
      marginLeft: '2rem',
    },

    '& a:hover': {
      color: ({ theme }) => theme.footerHover,
    },

    '@media (min-width: 500px)': {
      '& + $links': {
        marginLeft: '1.175rem',
      },

      '& a + a': {
        marginLeft: '1.175rem',
      },

      '& svg': {
        fontSize: '0.956rem',
      },

      '& a + a > svg': {
        marginLeft: '0rem',
      },
    },

    '@media (min-width: 1080px)': {
      fontSize: '0.956rem',
    },
  },
});
