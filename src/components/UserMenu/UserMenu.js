import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <diV>
      <Text
        display="inline-block"
        color="brown"
        fontSize="20px"
        mt="8px"
        mr="12px"
        fontWeight="bold"
      >
        Welcome, {user.name}
      </Text>
      <Button
        type="button"
        variant="solid"
        colorScheme="blue"
        height="28px"
        border="0.5px"
        borderColor="green.500"
        w="80px"
        h="30px"
        fontSize="10px"
        background="#58C1B2"
        mr="6px"
        opacity="0.9"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </diV>
  );
};
