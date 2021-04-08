import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  toggle: {
    position: 'relative',
    height: '2.25rem',
    width: '4.35rem',
    display: 'inline-block',
    background: ({ theme }) => `${theme.toggle}`,
    borderRadius: '3rem',
    cursor: 'pointer',
    transition: 'background 1.5s',

    '&:before': {
      content: '""',
      position: 'absolute',
      height: '1.575rem',
      width: '1.575rem',
      left: '0.375rem',
      bottom: '0.3375rem',
      background: 'white',
      borderRadius: '50%',
      transition: 'transform 0.4s',
      transform: ({ lightDarkTheme }) =>
        `translateX(${lightDarkTheme === 'light' ? '0' : '2.025rem'})`,
    },
  },
});
