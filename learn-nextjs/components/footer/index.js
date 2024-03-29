import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.200" p="4" mt="auto" position="fixed" bottom="0" width="100%">
      <Center>
        <Text>&copy; Muhammad Fadhli.</Text>
      </Center>
    </Box>
  );
};

export default Footer;
