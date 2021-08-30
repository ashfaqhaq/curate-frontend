import {
  Stack,
  HStack,
  VStack,
  Heading,
  Flex,
  Box,
  Spacer,
  Button,
} from "@chakra-ui/react";

function NavBar() {
  return (
    <Flex bg="red.200" >
      <Box p="2" >
        <Heading size="lg">Curate</Heading>
      </Box>
      <Spacer />

      <Box p="2" mr="4">
      <Button colorScheme="orange" mr="4" variant="unstyled">
         Explore
        </Button>
    </Box>
      <Box p="2" mr="4">
      <Button colorScheme="orange" mr="4" variant="unstyled">
          About us
        </Button>
      </Box>
      <Spacer />

      <Box p="2">
        <Button colorScheme="orange" mr="4">
          Join us
        </Button>
      </Box>
    </Flex>
  );
}

export default NavBar;
