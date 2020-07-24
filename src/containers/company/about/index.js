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

const About = ({
  HeadingStyle,
  TextStyle,
  ProjectTypeHeading,
  ProjectTypeText,
}) => {
  const delay = [200];
  return (
    <AboutSectionWrap>
      <div className="row">
        <div className="col-1 offset-1">
          <SectionTitle>
            <Heading {...HeadingStyle}>Our Story</Heading>

            <Text {...TextStyle}>
              Side way promises to deliver faultless operation of your retail
              property
            </Text>
            <img
              style={{ height: 300, width: "100%" }}
              src={
                "https://cdn.pixabay.com/photo/2020/07/14/13/42/boat-5404195_960_720.jpg"
              }
            />
          </SectionTitle>
        </div>

        <div className="col-2 offset-1">
          <AboutContent>
            <Text>
              {" "}
              Side way is a commercial property Management,Malls and Retail
              intergrated solutions company was established in 2015 we are
              specialize in retail consultancy and leasing and commercial
              property management
            </Text>
            <Text>
              Our company oversees all developmental phases starting from
              proactive studies of the land, to achieving the highest returns on
              the investments by identifying merchandise choices appropriate for
              the mall based on the site, supply and demand forces, and market
              needs. Our role also extends to cover marketing and construction
              operations.
            </Text>
            <div
              // key={work.id}
              className="col-2 project-type wow fadeInLeft"
              data-wow-delay={`${1}ms`}
              data-wow-duration="1000ms"
              style={{ marginTop: 50 }}
            >
              <Heading {...ProjectTypeHeading}>
                We employ committed experts for <br />
                the operation of your property
              </Heading>

              <ProjectTypeList>
                <li>
                  <Text {...ProjectTypeText}>
                    Center Managers and Deputy Mall Managers
                  </Text>
                </li>
                <li>
                  <Text {...ProjectTypeText}>​Operation Supervisors​​</Text>
                </li>
                <li>
                  <Text {...ProjectTypeText}>Expert administrators </Text>
                </li>
                <li>
                  <Text {...ProjectTypeText}>
                    Tenant Coordination Engineers 
                  </Text>
                </li>
                <li>
                  <Text {...ProjectTypeText}>Customer service agents</Text>
                </li>
              </ProjectTypeList>
            </div>
          </AboutContent>
        </div>
      </div>
    </AboutSectionWrap>
  );
};

About.propTypes = {
  HeadingStyle: PropTypes.object,
  TextStyle: PropTypes.object,
};

About.defaultProps = {
  HeadingStyle: {
    fontSize: "40px",
    texttransform: "capitalize",
    lineHeight: "55px",
    color: "primary",
    fontweight: 600,
    responsive: {
      medium: {
        fontSize: "24px",
        lineHeight: "initial",
      },
      small: {
        fontSize: "25px",
        lineHeight: "35px",
      },
    },
  },
  TextStyle: {
    lineHeight: "26px",
  },
  ProjectTypeHeading: {
    as: "h6",
    color: "primary",
    fontSize: "12px",
    fontweight: 700,
    letterspacing: "2px",
    mb: "12px",
  },
  ProjectTypeText: {
    m: 0,
    fontSize: "12px",
    color: "#000000",
    letterspacing: "1px",
  },
};

export default About;
