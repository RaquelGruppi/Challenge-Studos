import { MenuItem } from '../MenuItem';

import { useStyles } from './styles';

export const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MenuItem
        title="Tarefas e materiais"
        color="cardLightBlue"
        illustration="illustration_homework.svg"
        background="bg_light_blue.svg"
      />
      <MenuItem
        title="Provas e simulados"
        color="cardDarkBlue"
        illustration="illustration_exams.svg"
        background="bg_dark_blue.svg"
      />
      <MenuItem
        title="Apostilas"
        color="cardOrange"
        illustration="illustration_books.svg"
        background="bg_orange.svg"
      />
      <MenuItem
        title="Meus treinos"
        color="cardCyan"
        illustration="illustration_trainings.svg"
        background="bg_cyan.svg"
      />
    </div>
  );
};
