import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operation';
import { useAuth } from './hooks/useAuth';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleFormSubmit = (name, number) => {
    let existContact = contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (existContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter?.toLowerCase() || '')
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={handleFormSubmit} />
      <Filter handleFilterChange={handleFilterChange} />{' '}
      {loading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <ContactsList contacts={filteredContacts} onDelete={handleDelete} />
    </>
          }
        />
      </Route>
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};

export default App;
