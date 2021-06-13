import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily: 'Inter',
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: '16px',
        lineHeight: '19.36px',
        fontWeight: '500',
        color: '#696F79',
      },
    },
    Select: {
      baseStyle: {
        border: 'border: 1px solid #8692A6',
        fontSize: '14px',
      },
    },
  },
});

export default theme;
