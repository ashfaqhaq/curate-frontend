import { Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { getMessage } from "./messages";
export function Loading() {
  return (
    <VStack m={20}>
      <Spinner color="red.500" size="xl" thickness="4px" />
      <br />
      <Text>
        {" "}
        <i>{getMessage} </i>{" "}
      </Text>
    </VStack>
  );
}
