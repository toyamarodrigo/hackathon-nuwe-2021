import React from 'react';
import {
  HStack,
  Stack,
  Text,
  FormLabel,
  Input,
  FormControl,
  Icon,
} from '@chakra-ui/react';
import { BasicLayout } from '../../layout';
import { ButtonForm } from '../ButtonForm';
import { RegisterNavigation } from '../RegisterNavigation';
import { RegisterFormHeader } from '../RegisterFormHeader';
import { MdLockOutline } from 'react-icons/md';

export const RegisterFormVerification = () => {
  return (
    <BasicLayout>
      <RegisterNavigation
        step="03"
        title="Verificación por tarjeta"
        url="/register/step/2"
      />
      <Stack
        px={{ base: '20px', md: '100px', xl: '127px' }}
        pt={{ base: 47, xl: 78 }}
        justifyContent="center"
        spacing={5}
      >
        <RegisterFormHeader
          title="Verifica tu perfil"
          subtitle="Para poder revisar que se trata de una cuenta real, necesitamos la
            siguiente información"
        />
      </Stack>
      <Stack
        px={{ base: '20px', md: '100px', xl: '127px' }}
        pt={{ base: '20px', xl: '40px' }}
        spacing={{ base: 4, xl: 6 }}
      >
        <HStack w={{ base: '100%', xl: '80%' }}>
          <FormControl id="fullname" isRequired>
            <FormLabel>Número de tarjeta </FormLabel>
            <Input
              type="number"
              placeholder="Introduce número de la tarjeta"
              h="64px"
            />
          </FormControl>
        </HStack>
        <HStack w={{ base: '100%', xl: '80%' }}>
          <FormControl id="email" isRequired>
            <FormLabel>Código secreto</FormLabel>
            <Input
              type="text"
              placeholder="Introduce código secreto"
              h="64px"
            />
          </FormControl>
        </HStack>
        <HStack>
          <ButtonForm text="Crear cuenta" />
        </HStack>
        <HStack
          w={{ base: '100%', xl: '80%' }}
          justifyContent="center"
          color="#8692A6"
        >
          <Icon as={MdLockOutline} />
          <Text fontSize="12px" lineHeight="14.52px" fontWeight="400">
            Tu información es segura
          </Text>
        </HStack>
      </Stack>
    </BasicLayout>
  );
};
