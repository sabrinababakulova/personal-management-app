import React from 'react';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
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
                const generatedColumns = Math.floor(Math.random() * 3) + 1;
                const generatedRows = Math.floor(Math.random() * 2) + 1;
                return (
                  <GridItem
                    minH={10}
                    rowSpan={generatedRows}
                    colSpan={generatedColumns}
                    key={project.id}
                    boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
                      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                  >
                    <Box>
                      <Text>{project.title}</Text>
                      {/* {project.image ? (
                        <Image src={project.image} alt={project.title} layout="responsive"/>
                      ) : (
                        <Image src={EmptyBookCover} alt={project.title} />
                      )} */}
                    </Box>
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
