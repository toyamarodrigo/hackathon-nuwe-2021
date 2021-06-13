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
import { MdLockOutline } from 'react-icons/md';

export const RegisterFormVerification = () => {
  return (
    <BasicLayout>
      <RegisterNavigation
        step="03"
        title="Verificación por tarjeta"
        url="/register/step/2"
      />
      <Stack px="127px" pt={78} justifyContent="center" spacing={5}>
        <HStack w={{ lg: '100%' }}>
          <Text fontWeight="700" fontSize="30px" lineHeight="36.31px">
            Verifica tu perfil
          </Text>
        </HStack>
        <HStack w={{ lg: '50%', xl: '80%' }}>
          <Text fontSize="18px" lineHeight="28px" color="#8692A6">
            Para poder revisar que se trata de una cuenta real, necesitamos la
            siguiente información
          </Text>
        </HStack>
      </Stack>
      <Stack pl="127px" pr="221px" pt={'40px'} spacing={6}>
        <HStack w={{ lg: '50%', xl: '100%' }}>
          <FormControl id="fullname" isRequired>
            <FormLabel>Número de tarjeta </FormLabel>
            <Input
              type="number"
              placeholder="Introduce número de la tarjeta"
              h="64px"
            />
          </FormControl>
        </HStack>
        <HStack w={{ lg: '50%', xl: '100%' }}>
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
        <HStack justifyContent="center" color="#8692A6">
          <Icon as={MdLockOutline} />
          <Text fontSize="12px" lineHeight="14.52px" fontWeight="400">
            Tu información es segura
          </Text>
        </HStack>
      </Stack>
    </BasicLayout>
  );
};
