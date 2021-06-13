import React, { useState } from 'react';
import {
  HStack,
  Stack,
  Text,
  FormLabel,
  Input,
  FormControl,
  Icon,
  Select,
  InputGroup,
  InputLeftAddon,
  Image,
  Box,
  FormErrorMessage,
} from '@chakra-ui/react';
import { BasicLayout } from '../../layout';
import { ButtonForm } from '../ButtonForm';
import { RegisterNavigation } from '../RegisterNavigation';
import { RegisterFormHeader } from '../RegisterFormHeader';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { MdLockOutline, MdArrowDropDown } from 'react-icons/md';
import IconNigeria from '../../assets/flag-nigeria.png';

export const RegisterFormLocalization = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  return (
    <BasicLayout>
      <RegisterNavigation
        step="02"
        title="Localización"
        url="/register/step/1"
      />
      <Stack
        px={{ base: '20px', md: '100px', xl: '127px' }}
        pt={{ base: 47, xl: 78 }}
        justifyContent="center"
        spacing={5}
      >
        <RegisterFormHeader
          title="Complete Your Profile!"
          subtitle="Para poder revisar que se trata de una cuenta real, necesitamos la
            siguiente información"
        />
      </Stack>
      <Formik
        initialValues={{ phone: '', address: '', country: '' }}
        validationSchema={SignupSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => {
          setLoading(true);
          const user = JSON.parse(localStorage.getItem('user'));
          localStorage.setItem(
            'user',
            JSON.stringify([...user, { ...values }])
          );

          history.push('/register/step/3');
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
          <Field name="phone">
            {({ field, form }) => (
              <>
                <HStack w={{ base: '100%', xl: '80%' }}>
                  <FormControl
                    id="phone"
                    isRequired
                    isInvalid={form.errors.phone && form.touched.phone}
                  >
                    <FormLabel>Número de teléfono</FormLabel>
                    <InputGroup>
                      <InputLeftAddon
                        children={<SelectPhone />}
                        h="64px"
                        p={0}
                      />
                      <Input
                        {...field}
                        type="number"
                        placeholder="Introduce tu número de teléfono"
                        color="#494949"
                        fontWeight="500"
                        fontSize="14px"
                        lineHeight="16.94px"
                        height="64px"
                      />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormControl>
                </HStack>
              </>
            )}
          </Field>

          <Field name="address">
            {({ field, form }) => (
              <>
                <HStack w={{ base: '100%', xl: '80%' }}>
                  <FormControl
                    id="address"
                    isRequired
                    isInvalid={form.errors.address && form.touched.address}
                  >
                    <FormLabel>Dirección</FormLabel>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Introduce la dirección completa"
                      h="64px"
                    />
                    <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                  </FormControl>
                </HStack>
              </>
            )}
          </Field>

          <>
            <HStack w={{ base: '100%', xl: '80%' }}>
              <FormControl id="country" isRequired>
                <FormLabel>País de residencia</FormLabel>
                <Select
                  placeholder="Selecciona uno"
                  h="64px"
                  fontSize="14px"
                  lineHeight="16.94px"
                  fontWeight="500"
                  color="#8692A6"
                >
                  <Box as="option" value="españa">
                    España
                  </Box>
                  <Box as="option" value="usa">
                    USA
                  </Box>
                  <Box as="option" value="argentina">
                    Argentina
                  </Box>
                  <Box as="option" value="brasil">
                    Brasil
                  </Box>
                </Select>
              </FormControl>
            </HStack>
          </>

          <HStack>
            <ButtonForm text="Guardar y continuar" loading={loading} />
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
      </Formik>
    </BasicLayout>
  );
};

const SelectPhone = () => {
  const handleSelectOnChange = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <Image
        src={IconNigeria}
        alt="flag nigeria"
        w="24px"
        h="auto"
        ml="1em"
        mr={2}
      />
      <Select
        icon={<MdArrowDropDown />}
        w="100%"
        h="64px"
        border="none"
        color="#8692A6"
        fontSize="14px"
        lineHeight="16.94px"
        onChange={(e) => handleSelectOnChange(e)}
      >
        <Image src={IconNigeria} alt="flag" />
        <Box as={'option'}>+254</Box>
        <Box as={'option'}>+456</Box>
        <Box as={'option'}>+123</Box>
      </Select>
    </>
  );
};

const SignupSchema = Yup.object().shape({
  phone: Yup.string().length(10, 'Must have 10 numbers').required('Required'),
  address: Yup.string().min(4, 'Too Short!').max(120, 'Too Long!'),
});
