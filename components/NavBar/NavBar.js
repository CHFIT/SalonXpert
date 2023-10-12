import React from 'react';
import {  Box,  Button,  HStack,  Spacer,  VStack,  Flex,} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import CustomDrawer from './CustomDrawer';
import { FaUsersBetweenLines, FaLeanpub, FaChartSimple } from "react-icons/fa6";

  const NavBar = () => {
  const router = useRouter();

  return (
    <Box
      w='100%'
      p={4}
      position='sticky'
      top='0'
      zIndex='1000'
      bg='rgba(255, 255, 255, 0.1)'
      backdropFilter='blur(10px)'
      boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)'
      borderColor='teal.500'
      borderBottomWidth='1px'
    >
      <HStack align='center' justify='space-between'>
        <CustomDrawer>
          <VStack align='start'>
          <Button leftIcon={<FaUsersBetweenLines />} size="md" width="100%">
              Clientes
          </Button>
          <Button leftIcon={<FaLeanpub />} size="md" width="100%">
              Citas
          </Button>
          <Button leftIcon={<FaChartSimple />} size="md" width="100%">
              Facturación
          </Button>
          </VStack>
        </CustomDrawer>
        <Spacer /> {/* Espaciador para separar los botones */}
        <Flex alignItems="center">
      <Button
            onClick={() =>
              router.push('https://www.linkedin.com/in/josealarconaranda/')
            }
            color='teal.500'
            mt={1}
            size='lg'
            bg='rgba(255, 255, 255, 0.1)'
            borderRadius='10px'
            borderColor='rgba(255, 255, 255, 0.2)'
            _hover={{
              bg: 'rgba(255, 255, 255, 0.2)',
              transform: 'scale(1.02)',
            }}
            _active={{
              bg: 'rgba(255, 255, 255, 0.3)',
              transform: 'scale(0.95)',
            }}
          >
            Conóceme
          </Button>
        </Flex>
      </HStack>
    </Box>
  );
};

export default NavBar;
