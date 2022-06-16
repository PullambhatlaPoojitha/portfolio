import React from "react";
import '../styles/Qua.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";

function Qua() {
  return (
    <div className="Qua">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2018"
          iconStyle={{ background: "#3e497a", color: "#fff",fontSize:30, paddingTop:18, paddingLeft:10}}
          icon={<i class="graduation cap icon"></i>}
        >
          <h2 className="vertical-timeline-element-title">
            Sri Chaitanya Techno School
          </h2>
          <h4>Primary Education</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff",fontSize:30, paddingTop:18,paddingLeft:10 }}
           icon={<i class="graduation cap icon"></i>}
        >
          <h2 className="vertical-timeline-element-title">
            Sri Sai Aditya Junior College
          </h2>

          {/* <h4 className="vertical-timeline-element-subtitle">
            
          </h4> */}

          <h4>Secondary Education</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff",fontSize:30, paddingTop:18, paddingLeft:10 }}
          icon={<i class="graduation cap icon"></i>}
        >
          <h2 className="vertical-timeline-element-title">
          Bachelor of Technology
          </h2>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <h4>Stream of Information Technology</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Qua;