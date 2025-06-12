import { Box, Heading, Text, Button, VStack, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFound() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
      px={4}
    >
      <VStack spacing={8} textAlign="center">
        <Heading
          display="inline-block"
          as="h1"
          fontSize={{ base: '6xl', md: '8xl' }}
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Heading as="h2" size="xl" mb={2}>
          Page Not Found
        </Heading>
        <Text fontSize="lg" color={textColor}>
          Oops! The page you're looking for doesn't exist.
        </Text>
        <Button
          as={RouterLink}
          to="/"
          colorScheme="teal"
          size="lg"
          _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
        >
          Go to Homepage
        </Button>
      </VStack>
    </Box>
  );
}