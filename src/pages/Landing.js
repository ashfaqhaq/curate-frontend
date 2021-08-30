import React from 'react'
import {Box,Stack} from '@chakra-ui/react'
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import CardGroup from "../components/CardGroup";
import CreateRoadmap from "../components/CreateRoadmap";
import RoadmapSteps from "../components/RoadmapSteps";


function Landing() {
    return (
        <div>
             <Box w="100%" h="100%" bg="gray.800">
      <Stack p={4} color="white">
           <NavBar />
        <Body />
         <CardGroup />
         </Stack>
         </Box>
        </div>
    )
}

export default Landing
