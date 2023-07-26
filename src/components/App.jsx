import React, { Component } from 'react';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './FilterForm/FilterForm';
import { ContactList } from './ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    const prevContacts = prevState.contacts;

    if (prevContacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  formSubmitHandler = data => {
    const dataWithId = {
      id: uuidv4(),
      ...data,
    };
    this.state.contacts
      .map(({ name }) => name.toLocaleLowerCase())
      .includes(dataWithId.name.toLocaleLowerCase())
      ? alert(`${dataWithId.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [dataWithId, ...prevState.contacts],
        }));
  };

  filterHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFilterChange = () =>
    this.state.contacts.filter(({ name }) =>
      name
        .split(' ')
        .join('')
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );

  deleteHandler = e => {
    const filter = this.state.contacts.filter(
      contact => contact.id !== e.currentTarget.parentNode.id
    );
    this.setState({ contacts: filter });
  };

  render() {
    const {
      formSubmitHandler,
      filterHandler,
      onFilterChange,
      deleteHandler,
      state,
    } = this;

    return (
      <div className={css.formContainer}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2 className={css.title}>Contacts</h2>
        <Filter onChange={filterHandler} value={state.filter} />
        <ContactList contacts={onFilterChange()} onDelete={deleteHandler} />
      </div>
    );
  }
}
