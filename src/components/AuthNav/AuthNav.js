import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';
import { Breadcrumb, BreadcrumbItem,Flex,Box } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex justifyContent='flex-end'>
    <Breadcrumb display="inline-block" alignContent='end'>
      <BreadcrumbItem>
        <Box as={NavLink} to="/register" color='brown' fontSize='20px' margin='8px' fontWeight='bold'>Register</Box>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Box as={NavLink} color='brown' fontSize='20px' margin='8px' fontWeight='bold' to="/login">Log In</Box>
      </BreadcrumbItem>
    </Breadcrumb>
    </Flex>
  );
};
