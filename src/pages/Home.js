import { Text, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" pt="200px">
      <Text
        bgGradient="linear(to-l, #2C7744, #8360c3)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Phone book welcome page
      </Text>
    </Box>
  );
}
