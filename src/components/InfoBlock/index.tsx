import React, { FC } from 'react';
import { Box, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';

interface Props {
  children?: React.ReactNode;
  title?: string;
  shortDesc?: string;
  link?: string;
}

const InfoBlock: FC<Props> = ({ children, title, shortDesc, link }) => {
  return <div>{children}</div>;
};

export default InfoBlock;
