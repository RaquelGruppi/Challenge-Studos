import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { WiTime4 } from 'react-icons/wi';
import { IoCloudDoneOutline } from 'react-icons/io5';
import { useTheme } from 'react-jss';

import { useStyles } from './styles';

export const TaskCard = ({
  date,
  nearExpiry,
  title,
  subject,
  teacher,
  type,
  questionsCompleted,
  questions,
}) => {
  const theme = useTheme();
  const classes = useStyles({ nearExpiry, type, theme });

  const formattedDate = `${date.substring(8, 10)}/${date.substring(5, 7)}`;

  return (
    <Link to="/" className={classes.container}>
      <div className={classes.header}>
        <span>
          <WiTime4 />
          <time>Até {formattedDate} 8h30</time>
        </span>
        <IoCloudDoneOutline />
      </div>
      <h3>{title}</h3>
      <span>{subject}</span>
      <div className={classes.footer}>
        <span>{teacher}</span>
        <span>
          {questionsCompleted}/{questions}
        </span>
      </div>
    </Link>
  );
};

TaskCard.propTypes = {
  date: PropTypes.string.isRequired,
  nearExpiry: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  questionsCompleted: PropTypes.number.isRequired,
  questions: PropTypes.number.isRequired,
};
