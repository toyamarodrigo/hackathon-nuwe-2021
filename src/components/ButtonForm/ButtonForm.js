import { Button, HStack } from '@chakra-ui/react';
import React from 'react';

export const ButtonForm = ({ text }) => {
  return (
    <>
      <Button
        bgColor="#4F934A"
        fontSize="16px"
        lineHeight="19.36px"
        fontWeight="500"
        h="64px"
        color="white"
        w={{ base: '100%', xl: '80%' }}
      >
        {text}
      </Button>
    </>
  );
};
