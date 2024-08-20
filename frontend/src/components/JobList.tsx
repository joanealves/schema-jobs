// src/components/JobList.tsx
import React from 'react';
import { Box, List, ListItem, Link, Text } from '@chakra-ui/react';

interface Job {
  title: string;
  company: string;
  location: string;
  link: string;
}

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <Box mt={8} w="full" px={4}>
      <List spacing={4} mx="20px">
        {jobs.map((job, index) => (
          <ListItem key={index} borderWidth="1px" borderRadius="lg" p={4} bg="white" shadow="sm">
            <Text fontWeight="bold" fontSize="lg" color="teal.600">{job.title}</Text>
            <Text>{job.company}</Text>
            <Text fontSize="sm" color="gray.500">{job.location}</Text>
            <Link href={job.link} color="teal.400" isExternal mt={2} display="block">
              Ver Detalhes
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default JobList;
