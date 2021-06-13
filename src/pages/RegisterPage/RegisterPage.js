import React from 'react';
import {
  Box,
  HStack,
  Stack,
  Text,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FiUser, FiBriefcase } from 'react-icons/fi';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { BasicLayout } from '../../layout';
import { useHistory } from 'react-router';
import imgPoligon1 from '../../assets/polygon1.png';
import imgPoligon2 from '../../assets/polygon2.png';

export const RegisterPage = () => {
  return (
    <BasicLayout>
      <IniciarSesion />
      <Stack
        py={{ base: 20, sm: 40, md: 40, lg: 40, xl: 40 }}
        px={{ base: 4, sm: 20, md: 20, lg: 24, xl: 40 }}
        spacing={5}
        justifyContent="center"
      >
        <HStack w={{ lg: '100%' }}>
          <Text fontWeight="700" fontSize="30px" lineHeight="36.31px">
            ¡Únete a la comunidad!
          </Text>
        </HStack>
        <HStack w={{ lg: '100%' }}>
          <Text fontSize="18px" lineHeight="28px" color="#8692A6">
            Para empezar, dinos que cuenta te gustaría abrir.
          </Text>
        </HStack>
        <Stack direction="column">
          <ButtonContainer
            icon={FiUser}
            title="Developer"
            subtitle="Cuenta personas para entrar en el mundo dev"
            bgIcon={imgPoligon1}
          />
          <ButtonContainer
            icon={FiBriefcase}
            title="Business"
            subtitle="Tienes o perteneces a una compañía"
            bgIcon={imgPoligon2}
          />
        </Stack>
      </Stack>
    </BasicLayout>
  );
};

const ButtonContainer = ({ title, subtitle, icon, bgIcon }) => {
  const history = useHistory();

  const handleOnClickAccount = (title) => {
    if (title === 'Developer') history.replace('/register/step/1');
    if (title === 'Business') history.replace('/register/step/1');
  };

  return (
    <HStack
      w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%' }}
      py={{ base: '20px', sm: '20px', md: '24px' }}
      px={{ base: '20px', sm: '30px', md: '20px', lg: '20px', xl: '30px' }}
      boxShadow="0px 4px 14px 1px #0000000a"
      borderRadius="6px"
      justifyContent="space-between"
      alignItems="center"
      spacing={{ base: 5 }}
      _hover={{ bg: '#F5F9FF', border: '1px solid #4F934A' }}
      onClick={() => handleOnClickAccount(title)}
    >
      <Stack w="54px" h="54px">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgImage={bgIcon}
          bgRepeat="no-repeat"
          bgPosition="center"
          w="54px"
          h="54px"
        >
          <Icon
            as={icon}
            alt="developer icon"
            color={title === 'Developer' ? 'white' : '#4F934A'}
          />
        </Box>
      </Stack>
      <Stack display="flex" direction="column" justifyContent="center">
        <Text as={'h3'} fontWeight={500} fontSize="16px" lineHeight="19.36px">
          {title}
        </Text>
        <Text fontSize="14px" lineHeight="16.94px">
          {subtitle}
        </Text>
      </Stack>
      <ArrowForwardIcon color="#4F934A" />
    </HStack>
  );
};

const IniciarSesion = () => {
  return (
    <Stack mt="70px" zIndex={1}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        w="100%"
        px={12}
      >
        <Stack alignItems="center" pr="5%">
          <Text>
            Ya tienes cuenta?
            <Link color="#569B51"> Inicia sesión</Link>
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
