import {
  Link,
  HStack,
  Container,
  Box,
  Heading,
  Text,
  Spinner,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import React from 'react';

import { ExternalLinkIcon } from '@chakra-ui/icons'
import useLodashPRs from "../hooks/useLodashPRs";

const PRContainer = () => {
  const { data, isLoading, error } = useLodashPRs();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {error && <Text>{error}</Text>}
      <Container maxH="100vh" maxW="100vw" overflow="auto">
        <Box mt="5">
          <Heading as="h1" mb="4">
            Lodash Repository Pull Requests
          </Heading>
          <Box>
            <Text fontSize="xl">Total Pull Requests: {data.length}</Text>
            <Box mt="4">
              <Accordion mt="4">
                {data.map((pullRequest) => (
                  <AccordionItem key={pullRequest.id}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text fontSize="lg">{pullRequest.title}</Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={5}>
                      <HStack pb={3}>
                        <Text>Author:</Text>
                        <Text fontWeight="bold">{pullRequest.user.login}</Text>
                      </HStack>
                      
                      <HStack pb={3}>
                        <Text>Last Updated:</Text>
                        <Text fontWeight="bold">{pullRequest.updated_at.slice(0,10)}</Text>
                      </HStack>

                      <Text>Description:</Text>    
                      <Text pb={3}>{pullRequest.body ?? '-- No description --'}</Text>

                      <Link pb={3} href={pullRequest._links.html.href} isExternal>
                        Pull Request URL <ExternalLinkIcon mx='2px' />
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PRContainer;
