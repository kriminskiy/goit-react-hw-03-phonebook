import React from 'react';
import PropTypes from 'prop-types';
import s from './contactForm.module.css';

const ContactList = ({ contacts, ondeleteContact }) => (
  <ul className={s.contactList}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={s.contactList_item}>
          <p className={s.contactList__text}>{name}</p>
          <p className={s.contactList__text}>{number}</p>
          <button onClick={() => ondeleteContact(id)}>delete</button>
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  ondeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
