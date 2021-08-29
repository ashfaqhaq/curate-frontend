import React from "react";

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Wrap,
  Img,
} from "@chakra-ui/react";

function Cards() {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Road_in_Norway.jpg/220px-Road_in_Norway.jpg" />
      <Box m="5" as="a" href="/blog-post-thing">
        <Heading m="5" mb="0" as="h4" size="md">
          Blog Post
        </Heading>
        <Text m="5" mt="0">
          My cool blog post
        </Text>
      </Box>
    </Box>
  );
}

export default function CardGroup() {
  return (
      <>
    <Heading as="h3" size="xl"> Featured Roadmaps</Heading>
    <Wrap px={2}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </Wrap>
    </>
  );
}
