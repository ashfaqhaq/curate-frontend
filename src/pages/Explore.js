import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  HStack,
  Box,
  Text,
  Center,
  WrapItem,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { ArrowRightIcon } from "@chakra-ui/icons";

function Explore() {
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nest-js-curate.herokuapp.com/roadmap/")
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  const Preview = ({ data }) => {
    return data.map((item) => (
      <>
        <Box
          boxShadow="dark-lg"
          p="8"
          m="8"
          bg="gray.600"
          rounded="md"
          color="white"
          onClick={() => history.push(`/roadmap/${item._id}`)}
        >
          <HStack spacing={2} centered={true}>
            <Text
              fontSize={["2xl", "4xl"]}
              fontWeight="extrabold"
              centered="true"
              isTruncated
            >
              {item.name}
            </Text>
          </HStack>

          <WrapItem>
            <Center>
              <HStack>
                <>
                  <Avatar name={item.createdBy} />
                  <Text mx={2}>{item.createdBy} </Text>
                </>
                <Button>View</Button>
                <ArrowRightIcon alignSelf="right" />
              </HStack>
            </Center>
          </WrapItem>
        </Box>
      </>
    ));
  };

  return (
    <div>
      <Container maxWidth="container.md" mt={4} p={2}>
        <Center>
          <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize={"6xl"}
            fontWeight="extrabold"
            centered="true"
          >
            Roadmaps
          </Text>
        </Center>
        <Preview data={data} />
      </Container>
    </div>
  );
}

export default Explore;
