import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR,
	SET_ALERT,
	REMOVE_ALERT,
	CLEAR_CONTACTS
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [],
		current: null,
    filtered: null
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);

	const getContacts = async () => {
		try {
			const res = await axios.get('http://localhost:4000/api/contacts');
			dispatch({
				type: GET_CONTACTS,
				payload: res.data
			})
		} catch (err) {
			dispatch({ 
				type: CONTACT_ERROR,
				payload: err.response.msg
			})
		}
	}

	const addContact = async contact => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		try {
			const res = await axios.post('http://localhost:4000/api/contacts', contact, config);
			dispatch({ 
				type: ADD_CONTACT, 
				payload: res.data 
			});
		} catch (err) {
			dispatch({ type: CONTACT_ERROR });
		}
	}

	const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id});
  }
	
	const setCurrent = contact => {
		dispatch({ type: SET_CURRENT, payload: contact });
	}

	const clearContacts = () => {
		dispatch({ type: CLEAR_CONTACTS })
	}

	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	}

	const updateContact = contact => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	}

  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text});
  }

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  }

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
        filtered: state.filtered,
				error: state.error,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
        filterContacts,
        clearFilter,
				getContacts,
				clearContacts
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;