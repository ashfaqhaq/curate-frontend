import { Stack, HStack, VStack, Heading ,Flex,Box,Spacer,Button } from "@chakra-ui/react";

function NavBar() {
  return (
    <Flex>
  <Box p="2" mx="4">
    <Heading size="lg">Curate</Heading>
  </Box>
  <Spacer />
  
  <Box mx="4" p="2">
    <Heading size="md">Explore</Heading>
  </Box>

  <Box mx="4" p="2">
    <Heading size="md">Why us</Heading>
  </Box>
  <Spacer />


  <Box>
      
    <Button colorScheme="orange" mr="4">
      Sign Up
    </Button>
    <Button colorScheme="red">Log in</Button>
  </Box>
</Flex>
  );
}

export default NavBar;
