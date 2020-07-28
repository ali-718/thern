import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Heading from "../../../components/shared/heading";
import Text from "../../../components/shared/text";
import {
  AboutSectionWrap,
  SectionTitle,
  AboutContent,
  ProjectTypeList,
} from "./about.stc";

const Index = ({
  HeadingStyle,
  TextStyle,
  ProjectTypeHeading,
  ProjectTypeText,
}) => {
  const delay = [200];
  return (
    <AboutSectionWrap>
      <div
        style={{
          backgroundColor: "#F8F8F8",
          paddingTop: 100,
          paddingBottom: 100,
        }}
        className="row"
      >
        <div className="col-1 offset-1">
          <SectionTitle>
            <Heading {...HeadingStyle}>Marketing</Heading>

            <Text {...TextStyle}>
              As retail experts we have a wide variety of expertise aiming to
              achieve one thing
            </Text>
            <li>Market reports</li>
            <li>​Market analysis</li>
            <li>Usage studies</li>
            <li>Sector mix design</li>
            <li>Marketing Strategy</li>
            <li>Acquisition</li>
            <li>Structuring contracts</li>
            <li>Operations Budgeting </li>
            <li>Leasing</li>
          </SectionTitle>
        </div>

        <div className="col-2 offset-1">
          <AboutContent>
            <img
              style={{ height: 350, width: "100%" }}
              src={
                "https://cdn.pixabay.com/photo/2020/07/15/19/50/parachute-5408876_960_720.jpg"
              }
            />
          </AboutContent>
        </div>
      </div>
      <div style={{ marginTop: 150 }}></div>
      <div className="row">
        <div className="col-2 offset-1">
          <AboutContent>
            <img
              style={{ height: 300, width: "100%" }}
              src={
                "https://cdn.pixabay.com/photo/2020/07/15/19/50/parachute-5408876_960_720.jpg"
              }
            />
          </AboutContent>
        </div>

        <div
          style={{ display: "flex", alignItems: "center" }}
          className="col-1 offset-1"
        >
          <SectionTitle>
            <Heading {...HeadingStyle}>Advertisement</Heading>

            <li>Digital Advertising</li>
            <li>Outdoor Advertising​​</li>
            <li>Social media Advertising</li>
          </SectionTitle>
        </div>
      </div>

      <div style={{ marginTop: 150 }}></div>
      <div
        style={{
          backgroundColor: "#F8F8F8",
          paddingTop: 100,
          paddingBottom: 100,
        }}
        className="row"
      >
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="col-1 offset-1"
        >
          <SectionTitle>
            <Heading {...HeadingStyle}>Events Planning</Heading>
            <Text {...TextStyle}>
              We Provide a full service events planning through creativity and
              uniqueness based on individual tastes and preferences.
            </Text>
            <li>Full service events planning</li>
            <li>
              Consulting and supervision for both corporate and social events
            </li>
            <li>Designing layout for events </li>
            <li>Building events concept & identity </li>
            <li>Events Production & Management </li>
            <li>Brand Activation </li>
          </SectionTitle>
        </div>
        <div className="col-2 offset-1">
          <AboutContent>
            <img
              style={{ height: 330, width: "100%" }}
              src={
                "https://cdn.pixabay.com/photo/2020/07/15/19/50/parachute-5408876_960_720.jpg"
              }
            />
          </AboutContent>
        </div>
      </div>
    </AboutSectionWrap>
  );
};

// About.defaultProps = {
//   HeadingStyle: {
//     fontSize: "40px",
//     texttransform: "capitalize",
//     lineHeight: "55px",
//     color: "primary",
//     fontweight: 600,
//     responsive: {
//       medium: {
//         fontSize: "24px",
//         lineHeight: "initial",
//       },
//       small: {
//         fontSize: "25px",
//         lineHeight: "35px",
//       },
//     },
//   },
//   TextStyle: {
//     lineHeight: "26px",
//   },
//   ProjectTypeHeading: {
//     as: "h6",
//     color: "primary",
//     fontSize: "12px",
//     fontweight: 700,
//     letterspacing: "2px",
//     mb: "12px",
//   },
//   ProjectTypeText: {
//     m: 0,
//     fontSize: "12px",
//     color: "#000000",
//     letterspacing: "1px",
//   },
// };

export default Index;
