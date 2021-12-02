import React, { useState, useContext } from 'react';
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

  const handleChange = ({target: {name, value }}) => setContact({
    ...contact, 
    [name]: value
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="">Add Contact</h2>
      <input type='text' name='name' value={name} onChange={handleChange} placeholder='Name'/>
      <input type='email' name='email' value={email} onChange={handleChange} placeholder='Email'/>
      <input type='text' name='phone' value={phone} onChange={handleChange} placeholder='phone'/>
      <h5>Contact Type</h5>
      <input type='radio' name='type' value='personal' onChange={handleChange} checked={type === 'personal'} /> Personal {' '}
      <input type='radio' name='type' value='professional' onChange={handleChange} checked={type === 'professional'} /> Professional
      <div>
        <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
      </div>
    </form>
  )
}

export default ContactForm;