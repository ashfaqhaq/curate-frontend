import React, { useState } from "react";
import {
  Button,
  Input,
  Stack,
  Text,
  Radio,
  RadioGroup,
  NumberInput,
  NumberInputField,
  HStack,
  Container,
  Flex,
  InputGroup,
  Box,
} from "@chakra-ui/react";

import VerticalCard from "./VerticalCard";
import * as _ from "lodash";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const initialValue = {
  name: "",
  desc: "",
  type: "",
  link: "",
  hours: "",
  isFree: true,
};

function CreateRoadmap() {
  const [save, setSave] = useState([]);
  const [show, setShow] = useState(false);
  const [value, setValue] = React.useState("");

  const handleChange = (event, index) => {};

  const VerticalCards = ({ save }) => {
    return save.map((item, index) => (
      <>
        <Box boxShadow="dark-lg" p="8" m="8" rounded="md" color="white">
          <HStack spacing={2} centered={true}>
            <Text> Name: </Text>
            {item.name}
            <Text> Link: </Text>
            {item.link}
          </HStack>

          <Text>Description: (optional) {item.desc} </Text>

          <Flex>
            {item.hour} Type : {item.type}{" "}
            {item.isFree === true ? "Free" : "Paid"}
          </Flex>
        </Box>
      </>
    ));
  };

  const add = () => {
    setSave((prevState) => [...prevState, initialValue]);
  };

  return (
    <div>
      <Container maxW="container.md" color="black">
        <Stack direction={["column", "row"]} spacing={4} p="4">
          <Text> Name: </Text>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="eg: HTML Roadmap"
            size="md"
          />

          <Text>Description: </Text>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Description"
            size="md"
          />
        </Stack>

        <VerticalCard save={save} setSave={setSave} />
        <VerticalCards save={save} setSave={setSave} />
        {console.log(save)}

        <Stack
          direction={["column-reverse", "row-reverse"]}
          spacing={4}
          m="4"
          p="4"
        >
          <Button onClick={() => add()} size="sm" isAttached variant="outline">
            Add
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default CreateRoadmap;
