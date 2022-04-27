import React, { useContext, useEffect } from 'react';
// import Contacts from '../contacts/Contacts'
// import ContactFilter from '../contacts/ContactFilter';
// import ContactForm from '../contacts/ContactForm';
import AuthContext from '../../context/auth/authContext';
import Rockets from '../pages/rockets';


const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
	return (
		<div className="Home">
      <div>
      </div>
    </div>
	);
};

export default Home;