import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => (
  <HelmetProvider>
    <Helmet>
      <title>Sign In - Phonebook</title>
    </Helmet>
    <>
      <h1>Logowanie</h1>
      <LoginForm />
    </>
  </HelmetProvider>
);

export default Login;
