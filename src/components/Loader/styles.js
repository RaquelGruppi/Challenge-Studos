import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@keyframes changeOpacity': {
    from: {
      opacity: '1',
    },

    to: {
      opacity: '0.3',
    },
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& div': {
      width: '1rem',
      height: '1rem',
      background: ({ theme }) => theme.cardLightBlue,
      borderRadius: '50%',
      animation:
        '$changeOpacity 0.7s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite alternate',

      '& + div': {
        marginLeft: '0.59rem',
      },
    },

    '& > :nth-child(2)': {
      animationDelay: '0.1s',
    },

    '& > :nth-child(3)': {
      animationDelay: '0.2s',
    },

    '& > :nth-child(4)': {
      animationDelay: '0.3s',
    },
  },
});
