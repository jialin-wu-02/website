import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Box: {
      baseStyle: {
        borderWidth: 0,
        borderRadius: 0,
      },
    },
    Accordion: {
      baseStyle: {},
    },
    AccordionItem: {
      baseStyle: {

      },
    },
    AccordionButton: {
      baseStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        border: 'none',
        borderBottomColor: 'gray.200',
        borderTopColor: 'gray.200',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomStyle: 'solid',
        borderTopStyle: 'solid',
      },
    },
  },
});

// eslint-disable-next-line react/prop-types
const Root = ({ children }) => {
  return <ChakraProvider resetCSS={false} theme={theme}>
    {children}
  </ChakraProvider>;
};

export default Root;
