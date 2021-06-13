import React from 'react';
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
} from '@chakra-ui/react';
import { BasicLayout } from '../../layout';
import { ButtonForm } from '../ButtonForm';
import { RegisterNavigation } from '../RegisterNavigation';
import { MdLockOutline, MdArrowDropDown } from 'react-icons/md';
import IconNigeria from '../../assets/flag-nigeria.png';

export const RegisterFormLocalization = () => {
  return (
    <BasicLayout>
      <RegisterNavigation step="02" title="Localización" url='/register/step/1' />
      <Stack px="127px" pt={78} justifyContent="center" spacing={5}>
        <HStack w={{ lg: '100%' }}>
          <Text fontWeight="700" fontSize="30px" lineHeight="36.31px">
            Complete Your Profile!
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
            <FormLabel>Número de teléfono</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<SelectPhone />} h="64px" p={0} />
              <Input
                type="number"
                placeholder="Introduce tu número de teléfono"
                color="#494949"
                fontWeight="500"
                fontSize="14px"
                lineHeight="16.94px"
                height="64px"
              />
            </InputGroup>
          </FormControl>
        </HStack>
        <HStack w={{ lg: '50%', xl: '100%' }}>
          <FormControl id="email" isRequired>
            <FormLabel>Dirección</FormLabel>
            <Input
              type="text"
              placeholder="Introduce la dirección completa"
              h="64px"
            />
          </FormControl>
        </HStack>
        <HStack w={{ lg: '50%', xl: '100%' }}>
          <FormControl id="pais" isRequired>
            <FormLabel>País de residencia</FormLabel>
            <Select
              placeholder="Selecciona uno"
              h="64px"
              fontSize="14px"
              lineHeight="16.94px"
              fontWeight="500"
              color="#8692A6"
            >
              <Box as="option">España</Box>
              <Box as="option">USA</Box>
              <Box as="option">Argentina</Box>
              <Box as="option">Brasil</Box>
            </Select>
          </FormControl>
        </HStack>
        <HStack>
          <ButtonForm text="Guardar y continuar" />
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
