import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from '../contacts/contactItem';
import ContactForm from './ContactForm';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  return (
    <Fragment>
       <ContactForm />
      {filtered !== null ? filtered.map(contact => (
         <ContactItem key={contact.id} contact={contact}/>
       )) : contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;