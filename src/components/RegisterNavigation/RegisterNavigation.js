import { HStack, VStack, Stack, Text, Icon } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const RegisterNavigation = ({ step, title, url }) => {
  return (
    <Stack mt="75px" zIndex={1}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        px={12}
      >
        <HStack>
          <Icon as={FiChevronLeft} color="#8692A6" w="20px" h="20px" />
          <Link
            to={url}
            fontSize="16px"
            lineHeight="19.36px"
            fontWeight="600"
            color="#8692A6"
          >
            Volver
          </Link>
        </HStack>
        <Stack pr="5%">
          <VStack alignItems="flex-end">
            <Text
              fontWeight="500"
              fontSize="14px"
              lineHeight="16.94px"
              color="#BDBDBD"
            >
              PASO {step}/03
            </Text>
            <Text
              fontWeight="600"
              fontSize="16px"
              lineHeight="19.36px"
              color="#8692A6"
            >
              {title}
            </Text>
          </VStack>
        </Stack>
      </Stack>
    </Stack>
  );
};
