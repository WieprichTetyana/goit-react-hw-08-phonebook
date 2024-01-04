import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../redux/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { Container, StyledHeading, StyledTitle, StyledText } from './Styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/loader';

const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm />
      <StyledHeading>Contacts</StyledHeading>
      {contacts?.length ? (
        <div>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <StyledText>
          You don't have any contacts in your phonebook yet.
        </StyledText>
      )}
      {error && <StyledText>{error}</StyledText>}{' '}
    </Container>
  );
};

export default Phonebook;
