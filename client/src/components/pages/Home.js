import React from 'react';
import Contacts from '../contacts/Contacts'

const Home = () => {
	return (
		<div className="Home">
      <div>{/*contact form*/}</div>
      <div>
        <Contacts />
      </div>
    </div>
	);
};

export default Home;