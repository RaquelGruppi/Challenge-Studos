import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    width: '100%',
    marginBottom: '1.47rem',
    padding: '0 3.5rem',
    backgroundImage: ({ background }) =>
      `url(${require(`../../assets/${background}`).default})`,
    backgroundColor: ({ color, theme }) => `${theme[`${color}`]}`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '6px',

    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'auto auto',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (min-width: 450px)': {
      display: 'flex',
    },

    transition: 'transform 0.3s, box-shadow .3s',

    '&:hover': {
      boxShadow: ({ theme }) => `${theme.itemShadow} -4px 10px 15px`,

      '@media (min-width: 450px)': {
        transform: 'translateX(15px)',
      },
    },

    '& h2': {
      justifySelf: 'end',
      margin: '3rem 1rem 2rem 0',
      fontSize: '1.6rem',

      '@media (min-width: 450px)': {
        margin: '0 0 0 0',
        width: '7rem',
      },

      '@media (min-width: 1080px)': {
        fontSize: '1.32rem',
      },
    },

    '& img': {
      height: '10.15rem',
      gridColumn: '1 / span 2',
      gridRow: '2 / span 1',

      '@media (min-width: 450px)': {
        margin: '0 4rem 0 auto',
      },
    },

    '& svg': {
      justifySelf: 'start',
      gridColumn: '2 / span 1',
      gridRow: '1 / span 1',
      margin: '3rem 0 2rem 0',
      fontSize: '2rem',

      '@media (min-width: 450px)': {
        margin: '0 0 0 0',
        fontSize: '2.5rem',
      },
    },
  },
});
