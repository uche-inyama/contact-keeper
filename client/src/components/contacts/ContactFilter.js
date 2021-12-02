import React, { useRef, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext'


const ContactFilter = () => {

  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef('');


  useEffect(() => {
    if(filtered === null) {
      text.current.value = ''
    }
  })

  const handleChange = ({target: {value}}) => {
    if(text.current.value !== '') {
      filterContacts(value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <form >
        <input type="text" ref={text} placeholder="filter contacts..." onChange={handleChange}/>
      </form>
    </div>
  );
};

export default ContactFilter;