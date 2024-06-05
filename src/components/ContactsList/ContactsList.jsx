import css from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { getVisibleContacts } from '../../redux/contacts/selectors';

export const ContactsList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const filteredContacts = contacts?.filter(contact =>
  //   contact?.name?.toLowerCase().includes(filter.toLowerCase())
  // );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  if (!contacts?.length) {
    return 'No contacts found';
  }

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.list_item} key={id}>
          <p>{name + ' : ' + number}</p>
          <button
            className={css.button_delete}
            type="submit"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
