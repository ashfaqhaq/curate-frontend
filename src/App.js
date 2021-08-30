import "./App.css";
import React from "react";
import { Stack, Box } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import Body from "./components/Body";
import CardGroup from "./components/CardGroup";
import CreateRoadmap from "./components/CreateRoadmap";
import RoadmapSteps from "./components/RoadmapSteps";

function App() {
  return (
    // <div className="relative h-1by2 slategray-darker pattern-grid-lg">
    <Box w="100%" h="100%" bg="white">
      <Stack p={4}>
        {/* <NavBar />
      <Body />
      <CardGroup /> */}

      {/* create Post route */}
        <CreateRoadmap />

        {/*Verticle Timeline  */}
        <RoadmapSteps/>
      </Stack>
    </Box>

    // </div>
  );
}

export default App;
