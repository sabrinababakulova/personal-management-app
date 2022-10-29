import React, { FC } from 'react';
import { Heading, Flex } from '@chakra-ui/react';

interface Props {
  title: string;
  body: string;
  date: Date;
}

const InfoBlock: FC<Props> = ({ title, body, date }) => {
  return (
    <Flex
      m='20px 0'
      border='1px solid black'
      borderRadius={20}
      h={28}
      p='15px 20px'
      direction='column'
    >
      <Heading size='md'>{title}</Heading>
      <div>Not working yet</div>
    </Flex>
  );
};

export default InfoBlock;
