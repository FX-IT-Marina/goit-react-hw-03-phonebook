import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, onDelete, id }) => {
  return (
    <li id={id} className={css.item}>
      <p className={css.name}>
        {name}:<span className={css.span}>{number}</span>
      </p>
      <button className={css.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
