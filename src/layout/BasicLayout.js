import React from 'react';
import { Stack, Image, Text, Box } from '@chakra-ui/react';
import backgroundImage from '../assets/background.png';

export const BasicLayout = (props) => {
  return (
    <Stack
      pos="relative"
      overflow={{ base: 'none', xl: 'hidden' }}
      h="100vh"
      w="100vw"
      direction="row"
      spacing={0}
    >
      <Stack
        pos="relative"
        overflow="hidden"
        h="100vh"
        w={{ md: '60vw', lg: '80vw' }}
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Image
          display={{
            base: 'none',
            sm: 'none',
            md: 'block',
          }}
          src={backgroundImage}
          h="100%"
          w="full"
          alt="background"
          objectFit="cover"
        />
        <Box
          display={{
            base: 'none',
            sm: 'none',
            md: 'block',
          }}
          pos="absolute"
          backgroundColor="#569B51"
          opacity={0.9}
          w="100%"
          h="100%"
        />
        <Text
          pos="absolute"
          maxW={{ md: '80%', lg: '80%' }}
          color="#FFFFFF"
          fontSize="20px"
          lineHeight="38px"
        >
          Nuwe es la platforma que convierte el desarrollo profesional, la
          búsquda de trabajo y la conexiones de personas y empresas en un juego.
          Haciendo que puedas centrarte en lo que te gusta, programar, diseñar,
          crear, planear...
        </Text>
      </Stack>
      <Stack pos="relative" backgroundColor="#FFFFFF" w="100%">
        {props.children}
      </Stack>
    </Stack>
  );
};
