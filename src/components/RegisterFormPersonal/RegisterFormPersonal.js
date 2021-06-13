import React, { useState } from 'react';
import {
  HStack,
  Stack,
  Text,
  FormLabel,
  Input,
  FormControl,
  InputGroup,
  InputRightElement,
  Checkbox,
  Icon,
  Button,
} from '@chakra-ui/react';
import { BasicLayout } from '../../layout';
import { ButtonForm } from '../ButtonForm';
import { RegisterNavigation } from '../RegisterNavigation';
import { RegisterFormHeader } from '../RegisterFormHeader';
import { FcGoogle } from 'react-icons/fc';

export const RegisterFormPersonal = () => {
  const [show, setShow] = useState(false);

  const handleShowPassword = () => setShow(!show);

  return (
    <BasicLayout>
      <RegisterNavigation step="01" title="Personal Info." url="/" />
      <Stack
        px={{ base: '20px', md: '100px', xl: '127px' }}
        pt={{ base: 47, xl: 78 }}
        justifyContent="center"
        spacing={5}
      >
        <RegisterFormHeader
          title="Registra tu cuenta individual"
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
            <FormLabel>Nombre completo</FormLabel>
            <Input type="text" placeholder="Enter full name" h="64px" />
          </FormControl>
        </HStack>
        <HStack w={{ base: '100%', xl: '80%' }}>
          <FormControl id="email" isRequired>
            <FormLabel>Correo electronico</FormLabel>
            <Input type="email" placeholder="Enter email address" h="64px" />
          </FormControl>
        </HStack>
        <HStack w={{ base: '100%', xl: '80%' }}>
          <FormControl id="password" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <InputGroup size="lg">
              <Input
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                h="64px"
              />
              <InputRightElement w="4.5em" h="100%">
                <Text
                  fontSize="12px"
                  lineHeight="14.52px"
                  onClick={handleShowPassword}
                >
                  {show ? 'Ocultar' : 'Mostrar'}
                </Text>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </HStack>
        <HStack>
          <Checkbox colorScheme="green">
            Acepto los térmicos y condiciones
          </Checkbox>
        </HStack>
        <HStack>
          <ButtonForm text="Registrar cuenta" />
        </HStack>
        <HStack>
          <RegisterWithGoogleButton />
        </HStack>
      </Stack>
    </BasicLayout>
  );
};

const RegisterWithGoogleButton = () => {
  return (
    <>
      <Button
        display="flex"
        bgColor="#FFFFFF"
        fontSize="16px"
        lineHeight="19.36px"
        fontWeight="500"
        h="64px"
        color="black"
        w={{ base: '100%', xl: '80%' }}
        justifyContent="center"
        boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.08)'}
      >
        <Icon as={FcGoogle} w="24px" h="24px" mr="1em" />
        Regístrate con Google
      </Button>
    </>
  );
};
