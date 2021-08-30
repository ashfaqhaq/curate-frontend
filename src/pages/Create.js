import React from "react";
import { Box } from "@chakra-ui/react";
import CreateRoadmap from "../components/CreateRoadmap";
function Create() {
  return (
    <div>
      <Box w="100%" h="100%" bg="gray.800">
        <CreateRoadmap />
      </Box>
    </div>
  );
}

export default Create;
