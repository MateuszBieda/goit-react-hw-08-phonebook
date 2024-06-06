import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Flex } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Flex justifyContent='space-between'>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </header>
  );
};
