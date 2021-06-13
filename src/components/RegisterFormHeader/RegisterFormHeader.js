import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

export const RegisterFormHeader = ({ title, subtitle }) => {
  return (
    <>
      <HStack w={{ base: '100%', xl: '80%' }}>
        <Text fontWeight="700" fontSize="30px" lineHeight="36.31px">
          {title}
        </Text>
      </HStack>
      <HStack w={{ base: '100%', xl: '80%' }}>
        <Text fontSize="18px" lineHeight="28px" color="#8692A6">
          {subtitle}
        </Text>
      </HStack>
    </>
  );
};
