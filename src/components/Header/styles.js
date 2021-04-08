import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    width: '100%',
    height: '7.85rem',
    display: 'flex',
    alignItems: 'center',
    color: ({ theme }) => theme.title,
    transition: 'color 0.5s',

    '& img': {
      height: '4rem',
      width: '4rem',
      borderRadius: '50%',
    },

    '& strong': {
      fontSize: '1.8rem',
      margin: '0 auto 0 1.5rem',
      '@media (min-width: 720px)': {
        fontSize: '1.7rem',
      },
      '@media (min-width: 1080px)': {
        fontSize: '1.6rem',
      },
    },
  },

  themeContainer: {
    display: 'flex',
    alignItems: 'center',

    '& > span': {
      display: 'none',

      '@media (min-width: 720px)': {
        display: 'inline-block',
        marginRight: '1.9rem',
        fontSize: '1.25rem',
        fontWeight: 700,
      },

      '@media (min-width: 1080px)': {
        fontSize: '1.17rem',
      },
    },
  },
});
