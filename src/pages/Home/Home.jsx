import { HelmetProvider, Helmet } from 'react-helmet-async';
import css from './Home.module.css';

const Home = () => (
  <HelmetProvider>
    <Helmet>
      <title>Phonebook</title>
    </Helmet>
    <div className={css.box}>
      <h1 className={css.title}>
        <p>Create Your Phonebook </p>
      </h1>
    </div>
  </HelmetProvider>
);

export default Home;
