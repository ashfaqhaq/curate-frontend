// import { ModalOverlay } from "@chakra-ui/core";
// import {
//   Container,
//   Modal,
//   useDisclosure,
//   Button,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   FormControl,
//   FormLabel,
//   Input,
//   ModalFooter,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// const initialValue = {
//   name: "",
//   desc: "",
//   type: "",
//   link: "",
//   hours: "",
//   isFree: true,
// };

// function InitialFocus() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const initialRef = React.useRef();
//   const finalRef = React.useRef();

//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>
//       <Button ml={4} ref={finalRef}>
//         I'll receive focus on close
//       </Button>

//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={onClose}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Create your account</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <FormControl>
//               <FormLabel>First name</FormLabel>
//               <Input ref={initialRef} placeholder="First name" />
//             </FormControl>

//             <FormControl mt={4}>
//               <FormLabel>Last name</FormLabel>
//               <Input placeholder="Last name" />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             {/* <Button colorScheme="blue" mr={3}>
//               Save
//             </Button> */}
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// function VerticalCard() {
//   const [step, setStep] = useState([initialValue]);
//   return (
//     <div>
//       <Container maxWidth="container.xl"
//       ></Container>
//     </div>
//   );
// }

// export default VerticalCard;
