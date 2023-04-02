import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import  Loader  from './Loader/Loader';
import { getError, getIsLoading } from 'redux/selectors';
import css from '././App.module.css';

export const App = () => {
  	const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <Filter />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
};
