import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
// import css from './Navigation.module.css'
import { Box, Flex } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Flex justifyContent="space-between">
      <Box as="nav" display="inline-block">
        <Box
          as={NavLink}
          display="inline-block"
          to="/"
          color="brown"
          fontSize="20px"
         
          fontWeight="bold"
        >
          Home
        </Box>
        {isLoggedIn && (
          <Box
            bgGradient="linear(to-l, #2C7744, #8360c3)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
            to="/contacts"
          >
            Contacts
          </Box>
        )}
      </Box>
    </Flex>
  );
};
