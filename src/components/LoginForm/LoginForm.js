import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Input, Button, FormLabel, Flex } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      direction="column"
      gap="2"
      mt="45"
      alignItems="center"
      justifyContent="center"
      justifyItems="center"
    >
      <FormLabel alignContent="center" fontSize="30px" color="brown">
        Email{' '}
      </FormLabel>
      <Input
        type="email"
        name="email"
        size="md"
        placeholder="Email"
        variant="outline"
        color="teal"
        w="280px"
        h="50px"
        fontSize="20px"
        border="solid,#D6BC2A , 3px"
      />

      <FormLabel alignContent="center" fontSize="30px" color="brown">
        Password{' '}
      </FormLabel>
      <Input
        type="password"
        name="password"
        size="md"
        variant="outline"
        placeholder="Password"
        color="teal"
        w="280px"
        h="50px"
        mb="30px"
        fontSize="20px"
        border="solid,#D6BC2A , 3px"
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
        background="#257C4A"
      >
        Log In
      </Button>
    </Flex>
  );
};
