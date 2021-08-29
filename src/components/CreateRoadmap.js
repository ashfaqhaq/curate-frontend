import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Container,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const initialValue = {
  name: "1",
  desc: "",
  type: "",
  link: "",
  isFree: true,
};
function CreateRoadmap() {
  const [step, setStep] = useState([initialValue]);
  const [data, setData] = useState();
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  const add = () => {
    setStep((prevState) => [...prevState, initialValue]);
  };

  return (
    <Container>
      <Stack spacing={3}>
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
        
       
        
      </Stack>

      {step.map((item) => (
        <h1>{item.name}</h1>
      ))}
      <button onClick={() => add()}>Add</button>
    </Container>
  );
}

export default CreateRoadmap;
