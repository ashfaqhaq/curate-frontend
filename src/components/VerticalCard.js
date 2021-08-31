import React, { useState } from "react";
import { convertor } from "number-to-words";
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
  RadioGroup,
  Radio,
  Textarea,
} from "@chakra-ui/react";

const initialValue = {
  name: "",
  desc: "",
  type: "",
  link: "",
  hours: "",
  isFree: true,
};

function InputModal({setSave }) {
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
      <Button onClick={onOpen} color="green" bg="gray.800"> Add Step </Button>
      <Button ml={4} ref={nameRef}>
        I'll receive focus on close
      </Button>

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
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={nameRef} placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
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

              <FormControl mt={4}>
                <RadioGroup onChange={setIsFree}>
                  <Stack direction="row">
                    <Radio colorScheme="red" size="lg" value={true}>
                      Free
                    </Radio>
                    <Radio colorScheme="red" size="lg" value={false}>
                      Paid
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl mt={4}>
                <Select
                  placeholder="Type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Playlist/Video">Playlist/Video</option>
                  <option value="Documentation/Article">
                    Documentation/Article
                  </option>
                </Select>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function VerticalCard({ setSave }) {
 
  return (
    <div>
      <Container maxWidth="container.xl">
        <InputModal
          setSave={setSave}
         
        />
      </Container>
    </div>
  );
}

export default VerticalCard;
