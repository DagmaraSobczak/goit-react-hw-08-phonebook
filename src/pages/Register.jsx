import { HelmetProvider, Helmet } from 'react-helmet-async';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const Register = () => (
  <HelmetProvider>
    <Helmet>
      <title>Registration - Phonebook</title>
    </Helmet>
    <h1>Rejestracja</h1>
    <RegisterForm />
  </HelmetProvider>
);

export default Register;
