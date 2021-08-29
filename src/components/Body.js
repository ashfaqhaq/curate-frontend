import { HStack, Box, Button, Heading, Text,VStack,Flex } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import img from "../assets/11098.jpg";
function Body() {
  return (
    <Flex justifyContent="space-between" p="4"   >
      <Box m={8} >
        <Heading as="h1" size={"4xl"} colorScheme="red">
          Baeufitul <br />
          Mnid
        </Heading>

        <Text fontSize={["sm", "md", "xl"]} colorScheme="orange.200" bgClip>
          Your brain is smarter than you are
        </Text>
        <Button size="lg" colorScheme="green" mt="24px">
          Create a free account
        </Button>
      </Box>
      <Box boxSize="md" >
        <Image  src={img} alt="Mind" w="100"/>
      </Box>
    </Flex>
  );
}

export default Body;
