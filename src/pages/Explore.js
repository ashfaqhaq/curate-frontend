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
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Loading } from "../util/Loading";
import { useAuth0 } from "@auth0/auth0-react";

function Explore() {
  const history = useHistory();
  const { user, getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [deletePostId, setDeletePostId] = useState();
  
  // eslint-disable-next-line no-unused-vars
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const deletePost = async (id) => {
    const token = await getAccessTokenSilently();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    axios
      .delete(`https://nest-js-curate.herokuapp.com/roadmap/${id}`, {
        headers: headers,
      })
      .then(() => {
        setIsLoading(true);
        axios
          .get("https://nest-js-curate.herokuapp.com/roadmap/")
          .then((data) => {
            setData(data.data);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://nest-js-curate.herokuapp.com/roadmap/")
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
      })
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
        >
          <HStack spacing={2} centered={true}>
            <Text
              fontSize={["2xl", "4xl"]}
              fontWeight="extrabold"
              centered="true"
              isTruncated
              onClick={() => history.push(`/roadmap/${item._id}`)}
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
                <Button onClick={() => history.push(`/roadmap/${item._id}`)}>
                  View
                </Button>
                <ArrowRightIcon alignSelf="right" />
              </HStack>
              {user && user.nickname === item.createdBy ? (
                <Button
                  colorScheme="red"
                  onClick={() => {
                    setDeletePostId(item._id);
                    setIsOpen(true);
                  }}
                >
                  Delete Post
                </Button>
              ) : null}
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
        {isLoading ? <Loading /> : null}
        {isOpen ? (
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Post
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      setDeleteConfirm(true);
                      deletePost(deletePostId);
                      onClose();
                    }}
                    ml={3}
                  >
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        ) : null}
        <Preview data={data} />
      </Container>
    </div>
  );
}

export default Explore;
