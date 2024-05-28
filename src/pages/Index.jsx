import { Box, Container, VStack, Text, Heading, Image, Input, Textarea, Button, HStack, Link, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaStar } from "react-icons/fa";

const Index = () => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeInstructions, setRecipeInstructions] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = () => {
    if (!recipeTitle || !recipeDescription || !recipeIngredients || !recipeInstructions || !recipeImage) {
      alert("Please fill in all fields.");
      return;
    }
    const newRecipe = {
      title: recipeTitle,
      description: recipeDescription,
      ingredients: recipeIngredients,
      instructions: recipeInstructions,
      image: recipeImage,
      ratings: [],
    };
    setRecipes([...recipes, newRecipe]);
    setRecipeTitle("");
    setRecipeDescription("");
    setRecipeIngredients("");
    setRecipeInstructions("");
    setRecipeImage("");
  };

  const handleRating = (recipeIndex, rating) => {
    setRecipes((prevRecipes) => {
      const updatedRecipes = [...prevRecipes];
      const recipe = updatedRecipes[recipeIndex];
      if (!recipe.hasRated) {
        recipe.ratings.push(rating);
        recipe.hasRated = true;
      }
      return updatedRecipes;
    });
  };

  const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
  };

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
          {recipes.map((recipe, index) => (
            <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>{recipe.title}</Heading>
                <Text mb={2}><strong>Description:</strong> {recipe.description}</Text>
                <Text mb={2}><strong>Ingredients:</strong> {recipe.ingredients}</Text>
                <Text mb={2}><strong>Instructions:</strong> {recipe.instructions}</Text>
                <Text mb={2}><strong>Average Rating:</strong> {calculateAverageRating(recipe.ratings)} / 5</Text>
                <HStack spacing={1}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IconButton
                      key={star}
                      icon={<FaStar />}
                      colorScheme={recipe.ratings.includes(star) ? "yellow" : "gray"}
                      onClick={() => handleRating(index, star)}
                      isDisabled={recipe.hasRated}
                    />
                  ))}
                </HStack>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Submit Recipe Section */}
      <Box id="submit" bg="gray.100" py={20} px={8}>
        <Heading as="h3" size="xl" mb={8} textAlign="center">Submit Your Recipe</Heading>
        <VStack spacing={4} maxW="lg" mx="auto">
          <Input placeholder="Recipe Title" size="lg" value={recipeTitle} onChange={(e) => setRecipeTitle(e.target.value)} />
          <Textarea placeholder="Recipe Description" size="lg" value={recipeDescription} onChange={(e) => setRecipeDescription(e.target.value)} />
          <Textarea placeholder="Ingredients" size="lg" value={recipeIngredients} onChange={(e) => setRecipeIngredients(e.target.value)} />
          <Textarea placeholder="Instructions" size="lg" value={recipeInstructions} onChange={(e) => setRecipeInstructions(e.target.value)} />
          <Input placeholder="Image URL" size="lg" value={recipeImage} onChange={(e) => setRecipeImage(e.target.value)} />
          <Button colorScheme="teal" size="lg" onClick={handleSubmit}>Submit</Button>
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