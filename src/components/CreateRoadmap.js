import React, { useState } from "react";
import {
  Heading,
  Button,
  Input,
  Stack,
  Text,
  Textarea,
  ButtonGroup,
  IconButton,
  Box,
  Radio,
  RadioGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Collapse,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AddIcon } from "@chakra-ui/icons";

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
  const [data, setData] = useState();
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  const { isOpen, onToggle } = useDisclosure();

  const add = () => {
    setStep((prevState) => [...prevState, initialValue]);
  };

  return (
    <>
      <Stack spacing={1}>
        <Box w={"xl"}>
          <Text>name: {value}</Text>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="eg: HTML Roadmap"
            size="md"
          />
          <Text>Description: {value}</Text>
          <Textarea
            value={value}
            onChange={handleChange}
            placeholder="Description"
            size="md"
          />
        </Box>

        <VerticalTimeline layout="1-column-left">
          {step.map((item) => (
            <>
            <Button onClick={()=>setShow(!show)}> Collapse </Button>
              <Collapse in={show} animateOpacity startingHeight={30} >
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#fff", color: "#000" }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="2011 - present"
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

                  <RadioGroup m={1}>
                    <Stack spacing={4} direction="row">
                      <Radio value="1">Free</Radio>
                      <Radio value="2">Paid</Radio>
                    </Stack>
                  </RadioGroup>

                  <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VerticalTimelineElement>
              </Collapse>
            </>
          ))}
        </VerticalTimeline>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button mr="-px">Save</Button>
          <IconButton aria-label="Add to friends" icon={<AddIcon />} />
        </ButtonGroup>
        <Button align="right" onClick={() => add()}>
          Add
        </Button>
      </Stack>
    </>
  );
}

export default CreateRoadmap;
