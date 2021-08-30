import {
  HStack,
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Container,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useDisclosure } from "@chakra-ui/react";
import * as _ from "lodash";

import img from "../assets/curate.svg";

function Body() {
  // show annotations
 

  return (
    <Flex color="white">
      <Container maxW="container.xl">
        <Stack direction={["column-reverse", "row"]} spacing={4}>
          <Box mt={[5, 10, 20]} p={[1,10]}>
            <Heading as="h2" size="2xl">
              <RoughNotation
                type="strike-through"
                show={true}
                animationDelay={700}
                color="red"
                strokeWidth="8"
                iterations="11"
              >
                Create Content
              </RoughNotation>
            </Heading>

            <Text fontSize="xl" py="2"  color="red.300">
              With the burst of content creation, something is missing and that
              is
              <RoughNotation
                type="underline"
                show={true}
                animationDelay={1400}
                color="yellow"
              >
                {" "}
                Curation!
              </RoughNotation>
              <br />
              
            </Text>
            <Text color="gray">
            Explore. Learn. Share!
            <br/>
              Sign up, curate a list of your favourite resources. Share! 
            </Text>
            <Box
              as="button"
              mt="4"
              py={2}
              px={4}
              color="white"
              // fontWeight="bold"
              borderRadius="md"
              bgGradient="linear(to-r, orange.500,yellow.500)"
              _hover={{
                bgGradient: "linear(to-r, yellow.500, red.500)",
              }}
            >
              Join us
            </Box>
          </Box>
          <Box size="sm" mWidth="100px">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_bpqri9y8.json"
              background="transparent"
              speed="1"
              width="100px"
              height="100px"
              loop
              autoplay
            ></lottie-player>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}

export default Body;
