import React, { useState } from "react";
import {
  Button,
  Input,
  Stack,
  Text,
  Container,
  Flex,
  Box,
  FormControl,
  Textarea,
  FormLabel,
  VStack,
  Tag
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import ModalCards from "./ModalCards";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function CreateRoadmap() {
  const { user, getAccessTokenSilently } = useAuth0();
  
  const history = useHistory();
  async function postRoadmap() {
    const token = await getAccessTokenSilently();
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const data = {
      name: title,
      description: desc,
      steps: [...save],
      createdBy: user.nickname,
    };

    axios
      .post("https://nest-js-curate.herokuapp.com/roadmap", data, {
        headers: headers,
      })
      .then((data) => {
        if(data.status===200|201){
          alert("Successfully created")
          history.push('/explore')
        }
      
      })
      .then(() => history.push("/explore"))
      .catch((err) => console.log(err));
  }

  const [save, setSave] = useState([]);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const VerticalCards = ({ save }) => {
    console.log(save);
    return save.map((item, index) => (
      <>
        <Box boxShadow="dark-lg" p="8" m="8" rounded="md" color="white">
          <VStack spacing={2} centered={true}>
            <Text> Name: {item.name} </Text>

           <a href= {item.link} >  <Text> Link: {item.link} </Text> </a>

            <Text>Description: {item.desc} </Text>
          </VStack>
          <Flex>
           
          <Tag>{item.isFree === "true" ? "Free" : "Paid"}</Tag>
            
          </Flex>
        </Box>
      </>
    ));
  };

  return (
    <div>
      <Container maxW="container.md" color="white">
        <VStack>
          <FormControl id="Title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="eg: HTML Roadmap"
              size="md"
            />
          </FormControl>

          <FormControl id="desc" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Description"
              size="md"
            />
          </FormControl>

          <Stack
            direction={["column-reverse", "row-reverse"]}
            spacing={4}
            m="4"
            p="4"
          >
            <Button
              onClick={postRoadmap}
              disabled={!(title && desc)}
              rightIcon={<CheckIcon />}
              p={2}
              colorScheme="green"
            >
              Save
            </Button>
          </Stack>
        </VStack>

        <ModalCards save={save} setSave={setSave} />
        <VerticalCards save={save} setSave={setSave} />
      </Container>
    </div>
  );
}

export default CreateRoadmap;
