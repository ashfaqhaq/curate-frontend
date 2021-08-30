import "./App.css";
import React,{Suspense} from "react";
import { Stack, Box } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import Body from "./components/Body";
import CardGroup from "./components/CardGroup";
import CreateRoadmap from "./components/CreateRoadmap";
import RoadmapSteps from "./components/RoadmapSteps";

const Routes = React.lazy(()=>import("./Routes"))
function App() {
  return (
    // <div className="relative h-1by2 slategray-darker pattern-grid-lg">

    <Suspense fallback={<h1 className="mx-10 my-5">Loading</h1>}>
      <Routes />
    <Box w="100%" h="100%" bg="gray.800">
      <Stack p={4} color="white">
        {/* <NavBar />
      <Body />
      <CardGroup /> */}

      {/* create Post route */}
        <CreateRoadmap />

        {/*Verticle Timeline  */}
        <RoadmapSteps/>
      </Stack>
    </Box>
    </Suspense>
    // </div>
  );
}

export default App;
