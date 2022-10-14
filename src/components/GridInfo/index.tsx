import React from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  Badge,
} from '@chakra-ui/react';
import { ListOfProjects } from '../ListOfProjects';
import Image from 'next/image';
import EmptyBookCover from '../../assets/EmptyCover.png';

const GridInfo = () => {
  return (
    <Flex direction='column' gap={10} m={5}>
      {ListOfProjects.map((sphere) => {
        return (
          <div key={sphere.id}>
            <Heading mb={20}>{sphere.name}</Heading>
            <Grid gap={12}>
              {sphere.projects.map((project) => {
                return (
                  <GridItem minH={12} key={project.id}>
                    <Flex
                      justify='space-between'
                      direction={['column', 'row-reverse']}
                    >
                      <Box>
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={200}
                            height={250}
                          />
                        ) : (
                          <Image
                            src={EmptyBookCover}
                            alt={project.title}
                            width={200}
                            height={250}
                          />
                        )}
                      </Box>
                      <Flex direction='column'>
                        <Text color='black' bg='#f3f1f5' w='full' p='12px'>
                          <Link href={project.link} target='_blank'>
                            {project.title}
                          </Link>
                        </Text>
                        <Box textAlign='start' mt={12} maxW={500}>
                          <Text>{project.description}</Text>
                        </Box>
                        <Box textAlign='start' mt={16}>
                          <Heading size='md' mb={2}>
                            stack:
                          </Heading>
                          <Grid templateColumns='repeat(3, 1fr)' gap={1}>
                            {project.stack.map((tech) => {
                              return <Badge key={tech}>{tech}</Badge>;
                            })}
                          </Grid>
                        </Box>
                      </Flex>
                    </Flex>
                  </GridItem>
                );
              })}
            </Grid>
          </div>
        );
      })}
    </Flex>
  );
};

export default GridInfo;
