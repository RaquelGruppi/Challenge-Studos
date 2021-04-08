import { useTheme } from 'react-jss';

import { useStyles } from './styles';

export const Loader = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
