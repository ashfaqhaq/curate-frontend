import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "../util/hooks";

function RoadmapSteps() {
  const { onChange, onSubmit, values } = useForm();
  return (
    <div>
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <Heading as='h1' size="xl" color="white">
            Name
          </Heading>
        
          <Text>
          Description : Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading 
          </Text>
          
        </VerticalTimelineElement>
       
        
        
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
}

export default RoadmapSteps;
