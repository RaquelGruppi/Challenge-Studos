import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.176rem',
    background: ({ theme }) => theme.backgroundSecondary,
    borderRadius: '6px',
    transition: 'color 0.5s, background 1s',

    '& > h2': {
      color: ({ theme }) => theme.title,
      fontSize: '1.6rem',

      '@media (min-width: 1080px)': {
        fontSize: '1.32rem',
      },
    },
  },

  searchBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: ({ theme }) => theme.searchBoxBackground,
    border: ({ theme }) => `1px solid ${theme.searchBoxBorder}`,
    borderRadius: '6px',
    margin: '0.88rem 0',
    transition: 'color 0.5s, background 1s, border 1s',

    '& input': {
      width: '100%',
      background: 'transparent',
      color: ({ theme }) => theme.title,
      borderRight: ({ theme }) => `1px solid ${theme.searchBoxBorder}`,
      border: 'none',
      outline: 'none',
      margin: '0.22rem 0',
      padding: '0.66rem 1rem',
      fontSize: '1.4rem',
      transition: 'border 1s',

      '@media (min-width: 1080px)': {
        fontSize: '1.03rem',
      },

      '&::placeholder': {
        color: ({ theme }) => theme.searchBoxPlaceholder,
      },
    },

    '& svg': {
      color: ({ theme }) => theme.searchBoxPlaceholder,
      margin: '0 1rem',
      fontSize: '2rem',

      '@media (min-width: 1080px)': {
        fontSize: '1.84rem',
      },
    },
  },

  focusedSearchBox: {
    compose: '$searchBox',
    transition: 'color 0.5s, background 1s, border 0s',
    border: ({ theme }) => `1px solid ${theme.title}`,
  },

  navigationBar: {
    width: '100%',
    margin: '0 0 1.78rem',
    display: 'flex',
    justifyContent: 'space-between',
  },

  button: {
    padding: '0.37rem 1.1rem',
    background: 'transparent',
    border: 'none',
    color: ({ theme }) => theme.title,
    borderBottom: ({ theme }) => `2px solid ${theme.backgroundSecondary}`,
    outline: 'none',
    transition: 'color 0.5s, border 1s',
    fontSize: '1.4rem',

    '@media (min-width: 1080px)': {
      fontSize: '1.18rem',
    },

    '&:hover': {
      color: ({ theme }) => theme.textHighlight,
    },
  },

  activeButton: {
    composes: '$button',
    color: ({ theme }) => theme.textHighlight,
    borderBottom: ({ theme }) => `2px solid ${theme.textHighlight}`,
  },

  cardsList: {
    width: '100%',

    '& > a': {
      marginBottom: '1.2rem',

      '@media (min-width: 1080px)': {
        marginBottom: '0.88rem',
      },
    },

    '& > :last-child': {
      marginBottom: '0',
    },
  },
});
