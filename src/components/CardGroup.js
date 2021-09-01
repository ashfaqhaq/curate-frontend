import React from "react";

import {
  Box,
  Heading,
  Text,
  Link,
  Button,
  Stack,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
function Cards() {
  return (
    <Box
      py={4}
      display={{ md: "flex" }}
      maxWidth="{4}"
      bg="gray.700"
      borderWidth={1}
      margin={2}
      
      rounded="lg"
      
    >
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={0}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
         Frontend Roadmap 
        </Text>
        <Link
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          
        </Link>
        <Text color="gray.500">
        by Ashfaq
        </Text>
        <Button maxWidth="100px" my={2}>
      
        </Button>
      </Stack>
    </Box>
  );
}

export default function CardGroup() {
  return (
    <>
      <Container maxW="{20}" mt={[1,5,10,20]} >
        <Heading color="white" size="lg" px="2">
          Featured Roadmaps
        </Heading>
        <SimpleGrid columns={[1, 2, 4, 3]}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </SimpleGrid>
      </Container>
    </>
  );
}
