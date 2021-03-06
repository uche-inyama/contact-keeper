import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';


const ContactForm = () => {

  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const { addContact, clearCurrent, updateContact, current } = contactContext;


  useEffect(() => {
    if(current !== null){
      setContact(current);
    }else {
      setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
    }
  }, [contactContext, current])

  const handleChange = ({target: {name, value }}) => setContact({
    ...contact, 
    [name]: value
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (current === null){
      addContact(contact);
    } else {
      updateContact(contact);
    }
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };

  const clearAll = (e) => {
    e.preventDefault()
    clearCurrent();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="">{current ? 'Edit' : 'Add Contact'}</h2>
      <input type='text' name='name' value={name} onChange={handleChange} placeholder='Name'/>
      <input type='email' name='email' value={email} onChange={handleChange} placeholder='Email'/>
      <input type='text' name='phone' value={phone} onChange={handleChange} placeholder='phone'/>
      <h5>Contact Type</h5>
      <input type='radio' name='type' value='personal' onChange={handleChange} checked={type === 'personal'} /> Personal {' '}
      <input type='radio' name='type' value='professional' onChange={handleChange} checked={type === 'professional'} /> Professional
      <div>
        <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block"/>
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  )
}

export default ContactForm;