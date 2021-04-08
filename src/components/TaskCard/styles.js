import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundImage: ({ type }) =>
      `url(${
        require(`../../assets/${
          type === 1 ? 'bg_card_dark_blue.svg' : 'bg_card_light_blue.svg'
        }`).default
      })`,
    backgroundColor: ({ theme, type }) =>
      type === 1 ? theme.cardDarkBlue : theme.cardLightBlue,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '6px',
    transition: 'box-shadow 0.3s',

    '&:hover': {
      boxShadow: ({ theme }) => `${theme.cardShadow} 0px 0px 8px 2px`,
    },

    padding: '1.2rem',
    fontSize: '1.3rem',

    '@media (min-width: 1080px)': {
      padding: '0.88rem',
      fontSize: '1.03rem',
    },

    '& h3': {
      display: 'inline-flex',
      alignItems: 'center',
      minHeight: '6.2rem',
      padding: '1.4rem 0',
      fontSize: '1.4rem',

      '@media (min-width: 1080px)': {
        minHeight: '5.15rem',
        padding: '1.18rem 0',
        fontSize: '1.18rem',
      },
    },
  },

  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& svg': {
      fontSize: '1.8rem',
      '@media (min-width: 1080px)': {
        fontSize: '1.47rem',
      },
    },

    '& span': {
      padding: '0 0.4rem',
      display: 'flex',
      alignItems: 'center',
      background: ({ theme, nearExpiry }) =>
        nearExpiry ? theme.warning : 'transparent',
      borderRadius: '1.5px',

      '& svg': {
        marginRight: '0.6rem',
      },
    },
  },

  footer: {
    width: '100%',
    marginTop: '0.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
