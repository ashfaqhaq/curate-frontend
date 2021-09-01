import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Text, Heading } from "@chakra-ui/react";
import React from "react";

function RoadmapSteps({ data }) {
  return (
    <div>
      <Heading mb={10} mt={5}>
        {data.name}
      </Heading>
      <VerticalTimeline layout="1-column-left">
        {data.steps?.map((item) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            {item.name}

            <Text>{item.desc}</Text>
            <a href={item?.link}>Resouce Link</a>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default RoadmapSteps;
