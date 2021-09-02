import {
  HStack,
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade,Container } from "@chakra-ui/react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useDisclosure } from "@chakra-ui/react";
import * as _ from "lodash";

import img from "../assets/curate.svg";

function Body() {
  const { isOpen, onToggle } = useDisclosure();
  useEffect(() => {
    _.delay(onToggle, 700);
  }, []);
  return (
    <Container minW="xl">
     
        <Box
          m={{
            sm: "1",
            md: "8",
          }}
        >
          <Heading as="h1" size={"4xl"} colorScheme="red">
            <Box p={4} color="white" mt="4" rounded="md" shadow="md">
              <RoughNotation
                type="strike-through"
                show={true}
                animationDelay={700}
                color="red"
                strokeWidth="7"
                iterations={7}
              >
                Create Content
              </RoughNotation>
            </Box>
            <Fade in={isOpen}>
              <Box
                py="40px"
                color="white"
                mt="2"
                rounded="md"
                shadow="md"
                color="red"
              >
                <RoughNotation type="circle" show={true} animationDelay={1400}>
                  Curate{" "}
                </RoughNotation>
                Content
              </Box>
            </Fade>
          </Heading>

          <Text fontSize={["sm", "md", "xl"]} colorScheme="orange.200" bgClip>
            Learn whats important, browse roadmaps developed by the communities.
            Upskill!
          </Text>
          <Button size="lg" colorScheme="green" mt="24px">
            Create a free account
          </Button>
        </Box>

        {/* <Image src={img} alt="Mind" w="100" /> */}
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_bpqri9y8.json"
          background="transparent"
          speed="1"
          width="300px"
          height="300px"
          loop
          autoplay
        ></lottie-player>
     
    </Container>
  );
}

export default Body;
