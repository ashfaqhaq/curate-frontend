import { Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { getMessage } from "./messages";
export function Loading() {

    const [lateMessage,setLateMessage] = React.useState(false)
  React.useEffect(() => {

    setTimeout(() => {setLateMessage(true)},4000)
    
  }, []);

  return (
    <VStack m={20}>
      <Spinner color="red.500" size="xl" thickness="4px" />
      <br />
      <Text>
        {" "}
        <i>{getMessage} </i>{" "}
        <br/>
        {lateMessage? "Please refresh the page after 5 seconds, our poor server just woke up" : null}
      </Text>
    </VStack>
  );
}
