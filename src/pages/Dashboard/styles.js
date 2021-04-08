import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    maxWidth: '1350px',
    minWidth: '320px',
    margin: '0 auto',
    padding: '0 5%',
    display: 'flex',
    flexDirection: 'column',
  },

  contentContainer: {
    flexGrow: '1',
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',

    '@media (min-width: 950px)': {
      display: 'grid',
      gridTemplateColumns: 'auto 372px',
      alignContent: 'space-between',
    },

    '& > :first-child': {
      margin: '0 0 2rem 0',
      '@media (min-width: 950px)': {
        margin: '0 1rem 0 0',
      },
    },

    '& > :nth-child(2)': {
      '@media (min-width: 950px)': {
        gridRow: '1 / 3',
        gridColumn: '2 / 3',
      },
    },

    '& > :last-child': {
      '@media (min-width: 950px)': {
        alignSelf: 'end',
      },
    },
  },
});
