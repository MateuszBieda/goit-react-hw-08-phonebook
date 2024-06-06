import { setFilter } from '../../redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { Input, FormLabel,Text } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FormLabel mt='16px' display='flex' flexDirection='column' justifyContent='flex-start'>
      <Text color ='rgb(24, 124, 196)' fontWeight='700' fontSize='20px' mb='15'>Find contacts by name</Text>
      <Input
      mb='25px'
        w='680px'
        type="text"
        value={filter}
        border='green 2px solid'
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      />
    </FormLabel>
  );
};
