import PropTypes from 'prop-types';
import { Item, ContactName, Button } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, onDelete, id }) => {
  return (
    <Item id={id}>
      <ContactName>
        {name}:<span>{number}</span>
      </ContactName>
      <Button onClick={onDelete}>Delete</Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
