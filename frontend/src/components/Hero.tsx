import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import hero from '../assets/hero.jpg'; 

const Hero: React.FC = () => {
  return (
    <Box
      bgImage={`url(${hero})`} 
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="400px"
      position="relative"
    //   opacity = "70%"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        h="100%"
        // bg="rgba(0, 0, 0, 0.5)"
      >
        <Text fontSize="42px" color="#154666" fontFamily="Ubuntu" fontWeight="bold">
          Encontre o Job's da sua vida
        </Text>
      </Flex>
    </Box>
  );
};

export default Hero;
