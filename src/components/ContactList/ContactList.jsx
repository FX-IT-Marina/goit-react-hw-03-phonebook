import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactListItem
            name={name}
            number={number}
            onDelete={onDelete}
            key={id}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
