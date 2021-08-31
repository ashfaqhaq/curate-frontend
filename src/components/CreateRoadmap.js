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

import VerticalCard  from "./VerticalCard";
import * as _ from 'lodash';
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
  hours:"",
  isFree: true,
};

function CreateRoadmap() {
  const [step, setStep] = useState([initialValue]);
  const [show, setShow] = useState(false);
  const [value, setValue] = React.useState("");

  const handleChange = (event,index) => {

    const {value,name} = event.target;
   
    setStep(prevState=>{
      const newForm = [...prevState];
      console.log({newForm});
      newForm[index] = { ...newForm[index], [name]: value };
      console.log(newForm[index])
      return { newForm };
    })

    console.log(step)
    
  //   let oldData = [...step] // important to create a copy, otherwise you'll modify state outside of setState call
  //  oldData[index][`${name}`] = value;
   
  //   setStep(oldData);
 
    //  console.log(name) 
   
    // console.log(_.get(step[index],name))
    
    // setStep(prev=> [...prev, step[index]=change ])
    console.log(step)
    
  };

  const VerticalCards = ({ step }) => {
    return step.map((item,index) => (
      <>
        <Box boxShadow="dark-lg" p="8" m="8" rounded="md">
         
            <HStack spacing={2} centered={true}>
              <Text> Name: </Text>
              <Input
                name="name"
              
                value={item.name}
                onChange={(e)=>handleChange(e,index)}
                placeholder="eg: HTML Roadmap"
                size="md"
              />
              <Text> Link: </Text>
              <Input
               name="link"
             
                value={item.link}
                onChange={(e)=>handleChange(e,index)}
                placeholder="https://youtube.com/c/TanayPratap"
                size="md"
              />
            </HStack>

            <Text>Description: (optional)</Text>
            <Input
              name="desc"
            
              value={item.desc}
              onChange={()=>handleChange(item,index)}
              placeholder="Description"
              size="md"
            />

            <Flex>
              <InputGroup>
                <NumberInput>
                  Hours needed <NumberInputField m={2} value={item.hours}  name="hours"/>
                </NumberInput>
                <RadioGroup m={2}>
                  <Stack spacing={4} direction="row">
                    <Radio value={true} name="isFree">Free</Radio>
                    <Radio value={false} name="isFree" >Paid</Radio>
                  </Stack>
                </RadioGroup>
              </InputGroup>
            </Flex>
          
        </Box>
      </>
    ));
  };

  const add = () => {
    setStep((prevState) => [...prevState, initialValue]);
  };

  return (
    <div>
      <Container maxW="container.md"  color="black">
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

        
         {/* {step&& <VerticalCard step={step} /> } */}
      
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
