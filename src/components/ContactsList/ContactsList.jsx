import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import { Button, List, ListItem, Text,Flex,Box} from '@chakra-ui/react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts?.length) {
    return <Text fontSize='20px' fontWeight='500' color='#2C7744'>No contacts found</Text>;
  }

  return (
<Flex display='flex' flexDirection='column'>
      <List display='flex' flexDirection='column'>
        {contacts.map(({ id, name, number }) => (
          <ListItem mb='15px' color="#2C7744" fontWeight="700" fontSize="20px" key={id}>
            <Box w='800px' display='flex' flexDirection='row' justifyContent='space-between'>
              <Box display='flex' flexDirection='row' >
            <Text  color='#8360c3' mr='8px' >{name}: </Text>
            <Text mr='20px'>{number} </Text>
            </Box>
            <Button
              variant="solid"
              colorScheme="blue"
              height="28px"
              border="0.5px"
              borderColor="green.500"
              w="80px"
              h="30px"
              fontSize="10px"
              background="#E5543D"
              mr="6px"
              opacity="0.9"
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
            </Box>
          </ListItem>
        ))}
      </List>
      </Flex>
  );
};
