import React, { useState } from "react";
// import { convertor } from "number-to-words";
import {
  Container,
  Modal,
  useDisclosure,
  Button,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  ModalOverlay,
  Stack,
  HStack,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function InputModal({ setSave }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = useState();
  const [isFree, setIsFree] = useState();

  const nameRef = React.useRef();
  const linkRef = React.useRef();
  const descRef = React.useRef();
  const hourRef = React.useRef();

  function handleSave() {
    let obj = {
      name: nameRef.current.value,
      link: linkRef.current.value,
      desc: descRef.current.value,
      hour: hourRef.current.value,
      isFree,
      type,
    };
    setSave((prevState) => [...prevState, obj]);
  }
  return (
    <>
      <VStack direction="row-reverse">
        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          variant="solid"
          d={"flex-end"}
          onClick={onOpen}
        >
          Add Resource
        </Button>
      </VStack>

      <Modal
        initialFocusRef={nameRef}
        // finalFocusRef={}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <HStack spacing={2}>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input ref={nameRef} placeholder="HTML Course..." />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Link:</FormLabel>
                <Input ref={linkRef} placeholder="https://youtube.com/" />
              </FormControl>
            </HStack>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea ref={descRef} placeholder="Description" />
            </FormControl>
            <Stack spacing={2}>
              <FormControl mt={4}>
                <FormLabel>Hours Needed (Approx)</FormLabel>
                <Input ref={hourRef} placeholder="6" />
              </FormControl>

              <FormControl mt={4} isRequired>
                <HStack spacing={2}>
                  <Select
                    defaultValue={true}
                    onChange={(e) => setIsFree(e.target.value)}
                  >
                    <option value={true}>Free</option>
                    <option value={false}>Paid</option>
                  </Select>

                  <Select
                    placeholder="Content Type"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="Playlist/Video">Playlist/Video</option>
                    <option value="Documentation/Article">
                      Documentation/Article
                    </option>
                  </Select>
                </HStack>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSave();
                onClose();
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function ModalCards({ setSave }) {
  return (
    <div>
      <Container maxWidth="container.xl">
        <InputModal setSave={setSave} />
      </Container>
    </div>
  );
}

export default ModalCards;
