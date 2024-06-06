import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { getContacts } from '../../redux/contacts/selectors';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { Input, Button, FormLabel, Flex,Text } from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };

    const nameExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (nameExist) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }
    dispatch(addContact(contact));
    e.currentTarget.reset();
  };

  return (
    <Flex as='form'   bgGradient="linear(to-r, green.400, yellow.300)" className={css.form} onSubmit={handleSubmit}>
      <FormLabel >
        <Text mb='9px' color='#2C7744' className={css.paragraph}>Name</Text>
        <Input
        mb='9px'
          id={nanoid()}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel color='#2C7744' mb='9px' className={css.paragraph}>
        <Text mb='9px' color='#2C7744' className={css.paragraph}>Number</Text>
        <Input
        mb='9px'
          id={nanoid()}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <Button  variant="solid"
        colorScheme="blue"
        height="48px"
        border="2px"
        borderColor="green.500"
        type="submit"
        w="280px"
        h="50px"
        fontSize="20px"
        background='#257C4A'>
        Add contact
      </Button>
    </Flex>
  );
};
