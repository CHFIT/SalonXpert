import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  VStack,
} from '@chakra-ui/react';

const CustomDrawer = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack align="start">
      <Button
        onClick={onOpen}
        colorScheme='blue'
        color='blue.500'
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
        style={{ 
          position: 'absolute', 
          left: '0',
          top: '0', 
          width: '100%', 
          height: '100%',
          verticalAlign: 'middle',
          alignItems: 'center', 
        }}
      >
        SalonXpert
      </Button>

      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Funcionalidades</DrawerHeader>
          <DrawerBody>
            {children}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  );
};

export default CustomDrawer;
