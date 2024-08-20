import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp'; 

const Header: React.FC = () => {
  return (
    <Box bg="#154666" color="white" px={4} py={3}>
      <Flex maxW="1200px" mx="auto" alignItems="center">
      <Image src={logo} alt="Logo" boxSize="50px" mr={4} />
        <Text fontSize="2xl" color="gray.800" m={4} fontFamily="Ubuntu" fontWeight="bold">
          SCHEMA JOBS
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
