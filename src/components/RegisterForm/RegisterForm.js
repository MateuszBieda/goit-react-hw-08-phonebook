import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
// import css from './RegisterForm.module.css';
import { Input, Button, FormLabel, Flex } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex as='form'
      onSubmit={handleSubmit}
      autoComplete="off"
      direction="column"
      gap="2"
      mt="45"
      alignItems="center"
      justifyContent="center"
      justifyItems="center"
    >
      <FormLabel alignContent="center" fontSize="30px" color='brown'>
        Username  </FormLabel>
        <Input
          type="text"
          name="name"
          variant="outline"
          color="teal"
          w="280px"
          h="50px"
          fontSize="20px"
          size="md"
          placeholder="Username"
          border='solid,#D6BC2A , 3px'
        />
    
      <FormLabel alignContent="center" fontSize="30px" color='brown'>
        Email  </FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          variant="outline"
          color="teal"
          w="280px"
          h="50px"
          fontSize="20px"
          size="md"
          border='solid,#D6BC2A , 3px'
        />
    
      <FormLabel alignContent="center" fontSize="30px" color='brown'> 
        Password  </FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          variant="outline"
          color="teal"
          w="280px"
          h="50px"
          fontSize="20px"
          size="md"
          mb="30px"
          border='solid,#D6BC2A , 3px'
        />
    
      <Button
        variant="solid"
        colorScheme="blue"
        height="48px"
        border="2px"
        borderColor="green.500"
        type="submit"
        w="280px"
        h="50px"
        fontSize="20px"
        background='#257C4A'
      >
        Register{' '}
      </Button>
    </Flex>
  );
};
