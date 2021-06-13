import React, { useState } from 'react';
import {
  HStack,
  Stack,
  Text,
  FormLabel,
  Input,
  FormControl,
  Icon,
  FormErrorMessage,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { BasicLayout } from '../../layout';
import { ButtonForm } from '../ButtonForm';
import { RegisterNavigation } from '../RegisterNavigation';
import { RegisterFormHeader } from '../RegisterFormHeader';
import { MdLockOutline } from 'react-icons/md';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

export const RegisterFormVerification = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
      <Formik
        initialValues={{ card: '', code: '' }}
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
          setShowModal(true);
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
          <Field name="card">
            {({ field, form }) => (
              <>
                <HStack w={{ base: '100%', xl: '80%' }}>
                  <FormControl
                    id="card"
                    isRequired
                    isInvalid={form.errors.card && form.touched.card}
                  >
                    <FormLabel>Número de tarjeta </FormLabel>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Introduce número de la tarjeta"
                      h="64px"
                    />
                    <FormErrorMessage>{form.errors.card}</FormErrorMessage>
                  </FormControl>
                </HStack>
              </>
            )}
          </Field>

          <Field name="code">
            {({ field, form }) => (
              <>
                <HStack w={{ base: '100%', xl: '80%' }}>
                  <FormControl
                    id="email"
                    isRequired
                    isInvalid={form.errors.code && form.touched.code}
                  >
                    <FormLabel>Código secreto</FormLabel>
                    <Input
                      type="text"
                      placeholder="Introduce código secreto"
                      h="64px"
                    />
                    <FormErrorMessage>{form.errors.code}</FormErrorMessage>
                  </FormControl>
                </HStack>
              </>
            )}
          </Field>

          <HStack>
            <ButtonForm text="Crear cuenta" loading={loading} />
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
      <BasicModal showModal={showModal} />
    </BasicLayout>
  );
};

const SignupSchema = Yup.object().shape({
  card: Yup.string().length(16, 'Must have 16 numbers').required('Required'),
  code: Yup.string().length(3, 'Must have 3 numbers'),
});

const BasicModal = ({ showModal }) => {
  const { onClose } = useDisclosure();
  return (
    <Modal isOpen={showModal} onClose={onClose} w="556px" h="281px">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>¡Todo guay!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Tu cuenta se ha creado correctamente</Text>
        </ModalBody>

        <ModalFooter>
          <Button color="blue" mr={3} onClick={onClose}>
            Cerrar
          </Button>
          <Button color="blackAlpha.700">Vamos para Nuwe</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
