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
  FormErrorMessage,
} from '@chakra-ui/react';
import { BasicLayout } from '../../layout';
import { ButtonForm } from '../ButtonForm';
import { RegisterNavigation } from '../RegisterNavigation';
import { RegisterFormHeader } from '../RegisterFormHeader';
import { FcGoogle } from 'react-icons/fc';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

export const RegisterFormPersonal = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
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
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={SignupSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => {
          setLoading(true);
          localStorage.setItem('user', JSON.stringify([values]));
          history.push('/register/step/2');
          setLoading(false);
        }}
        s
      >
        <Stack
          as={Form}
          px={{ base: '20px', md: '100px', xl: '127px' }}
          pt={{ base: '20px', xl: '40px' }}
          spacing={{ base: 4, xl: 6 }}
        >
          <Field name="name">
            {({ field, form }) => (
              <>
                <HStack w={{ base: '100%', xl: '80%' }}>
                  <FormControl
                    id="name"
                    isRequired
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name">Nombre completo</FormLabel>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter full name"
                      h="64px"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                </HStack>
              </>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <>
                <HStack w={{ base: '100%', xl: '80%' }}>
                  <FormControl
                    id="email"
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel>Correo electronico</FormLabel>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter email address"
                      h="64px"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                </HStack>
              </>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <>
                <HStack w={{ base: '100%', xl: '80%' }}>
                  <FormControl
                    id="password"
                    isRequired
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel>Contraseña</FormLabel>
                    <InputGroup size="lg">
                      <Input
                        {...field}
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
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                </HStack>
              </>
            )}
          </Field>

          <HStack>
            <Checkbox colorScheme="green">
              Acepto los térmicos y condiciones
            </Checkbox>
          </HStack>
          <HStack>
            <ButtonForm text="Registrar cuenta" loading={loading} />
          </HStack>
          <HStack>
            <RegisterWithGoogleButton />
          </HStack>
        </Stack>
      </Formik>
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

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(120, 'Too Long!')
    .required('Required'),
});
