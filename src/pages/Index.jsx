import { Box, Container, VStack, Text, Heading, Image, Input, Textarea, Button, HStack, Link, Flex } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="teal.500" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">RecipeShare</Heading>
          <HStack spacing={8}>
            <Link href="#home" _hover={{ textDecoration: "none", color: "teal.200" }}>Home</Link>
            <Link href="#recipes" _hover={{ textDecoration: "none", color: "teal.200" }}>Recipes</Link>
            <Link href="#submit" _hover={{ textDecoration: "none", color: "teal.200" }}>Submit a Recipe</Link>
            <Link href="#contact" _hover={{ textDecoration: "none", color: "teal.200" }}>Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box id="home" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to RecipeShare</Heading>
        <Text fontSize="xl" mb={8}>Discover and share amazing recipes from around the world.</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </Box>

      {/* Recipes Section */}
      <Box id="recipes" py={20} px={8}>
        <Heading as="h3" size="xl" mb={8} textAlign="center">Our Recipes</Heading>
        <Flex wrap="wrap" justify="center" spacing={8}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/400" alt="Recipe 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Recipe Title 1</Heading>
              <Text>Brief description of the recipe.</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/400" alt="Recipe 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Recipe Title 2</Heading>
              <Text>Brief description of the recipe.</Text>
            </Box>
          </Box>
          {/* Add more recipe cards as needed */}
        </Flex>
      </Box>

      {/* Submit Recipe Section */}
      <Box id="submit" bg="gray.100" py={20} px={8}>
        <Heading as="h3" size="xl" mb={8} textAlign="center">Submit Your Recipe</Heading>
        <VStack spacing={4} maxW="lg" mx="auto">
          <Input placeholder="Recipe Title" size="lg" />
          <Textarea placeholder="Recipe Description" size="lg" />
          <Input placeholder="Image URL" size="lg" />
          <Button colorScheme="teal" size="lg">Submit</Button>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={8}>
        <VStack spacing={4}>
          <Text>Contact us at: info@recipeshare.com</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
            <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
            <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
          </HStack>
          <Text>&copy; 2023 RecipeShare. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;