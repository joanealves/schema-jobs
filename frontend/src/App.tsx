import React, { useState } from 'react';
import axios from 'axios';
import { Container, Spinner, Center, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import JobFilter from './components/JobFilter';
import JobList from './components/JobList';

interface Job {
  title: string;
  company: string;
  location: string;
  link: string;
}

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = (keyword: string, location: string, role: string, type: string, salary: string, level: string) => {
    setLoading(true);
    axios
      .get('http://localhost:8000/jobs/', {
        params: {
          keyword,
          location,
          role,
          type,
          salary,
          level,
        },
      })
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const clearFilters = () => {
    setJobs([]);
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Header />
      <Hero />
      <VStack spacing={10} mt={10}>
        <JobFilter onFilter={fetchJobs} onClear={clearFilters} />
        {loading ? (
          <Center mt={4}>
            <Spinner size="xxl" thickness="8px" speed="0.65s" color="teal.500" />
          </Center>
        ) : (
          <JobList jobs={jobs} />
        )}
      </VStack>
    </Container>
  );
};

export default App;
