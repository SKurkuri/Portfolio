import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Content lead - Make in BVB(MiB)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hubli
          </h4>
          <p> </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            KLE Technological University, Hubli
          </h3>
          <h4 classame="vertical-timeline-element-title">
            Current CGPA : 8.92
          </h4>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kanjana Institute of Idiocracy, Sursurinagar
          </h3>
          <h4 classame="vertical-timeline-element-title">
            Current CGPA : 100+
          </h4>

          <h4 className="vertical-timeline-element-subtitle">
            PhD
          </h4>

          <p> Insanity</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Base PU College, Hubli
          </h3>
          <h4 classame="vertical-timeline-element-title">
            Score : 99.67%
          </h4>
          <p> Pre - University </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            N. K. Thakkar High School, Hubli
          </h3>
          <h4 classame="vertical-timeline-element-title">
            Score : 98.88%
          </h4>
          <p> High School </p>
        </VerticalTimelineElement>
        
        
        

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
