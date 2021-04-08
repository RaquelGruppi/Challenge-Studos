import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

export const MenuItem = ({ title, color, illustration, background }) => {
  const theme = useTheme();
  const classes = useStyles({ color, background, theme });

  return (
    <Link to="/" className={classes.container}>
      <h2>{title}</h2>
      <img src={require(`../../assets/${illustration}`).default} alt={title} />
      <FiArrowRight />
    </Link>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};
