// src/components/JobFilter.tsx
import React, { useState } from 'react';
import { Box, Input, Button, Select, Center, VStack, HStack, Text } from '@chakra-ui/react';

interface JobFilterProps {
  onFilter: (keyword: string, location: string, role: string, type: string, salary: string, level: string) => void;
  onClear: () => void;
}

const JobFilter: React.FC<JobFilterProps> = ({ onFilter, onClear }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('');
  const [type, setType] = useState('');
  const [salary, setSalary] = useState('');
  const [level, setLevel] = useState('');

  const handleFilter = () => {
    onFilter(keyword, location, role, type, salary, level);
  };

  const handleClear = () => {
    setKeyword('');
    setLocation('');
    setRole('');
    setType('');
    setSalary('');
    setLevel('');
    onClear();
  };

  const inputStyles = {
    height: '50px', 
    borderColor: '#154666', 
    borderRadius: '8px', 
  };

  return (
    <Center>
      <Box
        w="1200px"
        h="600px"
        bg="gray.50"
        rounded="md"
        shadow="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {/* Título da seção */}
        <Text fontSize="40px" fontWeight="bold" mb={8} mt={4} textAlign="center" color="#154666">
          Encontre sua vaga!
        </Text>

        <VStack spacing={6} w="80%" alignItems="stretch" mt={4}>
          <Input 
            placeholder="Cargo" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            size="lg" 
            sx={inputStyles} 
          />
          <Input 
            placeholder="Palavra-chave" 
            value={keyword} 
            onChange={(e) => setKeyword(e.target.value)} 
            size="lg" 
            sx={inputStyles} 
          />
          <Input 
            placeholder="Cidade" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            size="lg" 
            sx={inputStyles} 
          />
          <Select 
            placeholder="Tipo" 
            value={type} 
            onChange={(e) => setType(e.target.value)} 
            size="lg" 
            sx={inputStyles}
          >
            <option value="remoto">Remoto</option>
            <option value="home-office">Home-office</option>
            <option value="presencial">Presencial</option>
            <option value="hibrido">Hibrido</option>
            <option value="frelance">Freelance</option>
          </Select>
          <Input 
            placeholder="Salário" 
            value={salary} 
            onChange={(e) => setSalary(e.target.value)} 
            size="lg" 
            sx={inputStyles} 
          />
          <Select 
            placeholder="Nível de Senioridade" 
            value={level} 
            onChange={(e) => setLevel(e.target.value)} 
            size="lg" 
            sx={inputStyles}
          >
            <option value="junior">Junior</option>
            <option value="pleno">Pleno</option>
            <option value="senior">Senior</option>
            <option value="analista">Analista</option>
          </Select>
          <HStack spacing={4} w="full">
            <Button 
              onClick={handleFilter} 
              width="40%" 
              height="40px"
              size="lg" 
              bg="#154666" 
              color="white" 
              borderRadius="8px" 
              shadow="md"
              _hover={{ bg: '#123955' }} 
            >
              Procurar Vagas
            </Button>
            <Button 
              onClick={handleClear} 
              width="40%" 
              height="40px"
              size="lg" 
              bg="#298073" 
              color="white" 
              borderRadius="8px" 
              shadow="md"
              _hover={{ bg: '#206759' }} 
            >
              Limpar Filtros
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default JobFilter;
