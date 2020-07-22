import React from "react";
import PropTypes from "prop-types";
import Heading from "../shared/heading";
import Text from "../shared/text";
import Image from "../image";
import { TeamWrapper, TeamThumb, TeamOverlay, TeamContent } from "./team.stc";

const Team = ({ imageSrc, name, designation, teamStyle }) => {
  const {
    wrapperStyle,
    contentStyle,
    headingStyle,
    textStyle,
    animDelay,
  } = teamStyle;
  return (
    <TeamWrapper {...wrapperStyle}>
      {imageSrc && (
        <TeamThumb>
          <img src={imageSrc} alt={name} />
        </TeamThumb>
      )}
      <TeamOverlay></TeamOverlay>
      <TeamContent
        {...contentStyle}
        className="wow fadeInLeft"
        data-wow-delay={animDelay}
        data-wow-duration="1000ms"
      >
        {name && <Heading {...headingStyle}>{name}</Heading>}
        {designation && <Text {...textStyle}>{designation}</Text>}
      </TeamContent>
    </TeamWrapper>
  );
};

Team.propTypes = {
  imageSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string,
  role: PropTypes.string,
  company: PropTypes.string,
  teamStyle: PropTypes.object,
  path: PropTypes.string,
};

Team.defaultProps = {
  path: "/",
  teamStyle: {
    wrapperStyle: {
      mb: "30px",
    },
    contentStyle: {
      pt: "15px",
      pb: "15px",
    },
    headingStyle: {
      as: "h3",
      fontSize: "16px",
      fontweight: 700,
      texttransform: "uppercase",
      lineHeight: "26px",
      letterspacing: "1.5px",
      mb: 0,
    },
    textStyle: {
      fontSize: "12px",
      lineHeight: "26px",
      mb: 0,
      color: "#000",
    },
  },
};

export default Team;
