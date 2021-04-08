import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { NextTasks } from '../../components/NextTasks';

import { useStyles } from './styles';

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.contentContainer}>
        <Menu />
        <NextTasks />
        <Footer />
      </div>
    </div>
  );
};
