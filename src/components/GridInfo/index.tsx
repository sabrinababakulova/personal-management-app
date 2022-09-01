import React from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
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
            <Heading>{sphere.name}</Heading>
            <Grid gap={2} templateColumns='repeat(4, 1fr)'>
              {sphere.projects.map((project) => {
                // const generatedColumns = Math.floor(Math.random() * 3) + 1;
                // const generatedRows = Math.floor(Math.random() * 2) + 1;
                return (
                  <GridItem
                    minH={12}
                    rowSpan={2}
                    colSpan={2}
                    key={project.id}
                    boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
                      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                  >
                    <Link href={project.link} target='_blank'>
                      <Flex
                        direction='column'
                        align='center'
                        position='relative'
                        justify='center'
                      >
                        <Text
                          position='absolute'
                          zIndex='1'
                          color='black'
                          bg='#f3f1f5'
                          w='full'
                          p='12px 0'
                        >
                          {project.title}
                        </Text>
                        <Box
                          transition='0.1s ease-in-out'
                          _hover={{ filter: 'opacity(0.4)' }}
                          maxW={200}
                          maxH={250}
                        >
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
                      </Flex>
                    </Link>
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
