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
} from "@chakra-ui/react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const initialValue = {
  name: "1",
  desc: "",
  type: "",
  link: "",
  isFree: true,
};

function CreateRoadmap() {
  const [step, setStep] = useState([initialValue]);
  const [show, setShow] = useState(false);
  const [value, setValue] = React.useState("");

  const handleChange = (event) => setValue(event.target.value);

  const VerticalCard = ({ step }) => {
    return step.map((item) => (
      <>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1A202C", color: "#F56565" }}
          contentArrowStyle={{
            borderRight: "7px solid  #1A202C",
          }}
          iconStyle={{ background: "rgb(256, 10, 10)", color: "#fff" }}
        >
          <HStack spacing={2} centered={true}>
            <Text> Name: </Text>
            <Input
              value={value}
              onChange={handleChange}
              placeholder="eg: HTML Roadmap"
              size="md"
            />
            <Text> Link: </Text>
            <Input
              value={value}
              onChange={handleChange}
              placeholder="https://youtube.com/c/TanayPratap"
              size="md"
            />
          </HStack>

          <Text>Description: (optional)</Text>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Description"
            size="md"
          />

          <Flex>
          
          <InputGroup>
            <NumberInput>
              Hours needed <NumberInputField m={2} />
            </NumberInput>
            <RadioGroup m={2}>
              <Stack spacing={4} direction="row">
                <Radio value="1">Free</Radio>
                <Radio value="2">Paid</Radio>
              </Stack>
            </RadioGroup>
            </InputGroup>
          </Flex>
          
        </VerticalTimelineElement>
      </>
    ));
  };

  const add = () => {
    setStep((prevState) => [...prevState, initialValue]);
  };

  return (
    <div>
      <Container maxW="container.xl" color="white">
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

        <VerticalTimeline layout="1-column-left">
          <VerticalCard step={step} />
        </VerticalTimeline>
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
