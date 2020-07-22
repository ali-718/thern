import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import SectionTitle from "../../../components/shared/section-title";
import Team from "../../../components/team";
import { TeamSectionWrap, TeamWrapper, TeamContainer } from "./team.stc";

const TeamSection = ({ wrapperOne, wrapperTwo }) => {
  const teamQueryData = useStaticQuery(graphql`
    query TeamDataQuery {
      aboutdataJson(id: { eq: "about-team-section-content" }) {
        title
        subtitle
      }
      allTeamsJson {
        edges {
          node {
            id
            name
            designation
            role
            image {
              childImageSharp {
                fluid(maxWidth: 615, maxHeight: 720, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
  `);
  const teamSecData = teamQueryData.aboutdataJson;
  const teamMembers = teamQueryData.allTeamsJson.edges;
  const admins = teamMembers.filter(
    (member) => member.node.role === "administrator"
  );
  const employees = teamMembers.filter(
    (member) => member.node.role === "employee"
  );
  const delay = [300];
  return (
    <TeamSectionWrap>
      <TeamContainer>
        <div className="col-1 offset-1">
          <SectionTitle
            subtitle={teamSecData.subtitle}
            title={teamSecData.title}
          />
        </div>
        <TeamWrapper {...wrapperOne}>
          <div className="row">
            <div className="col-4 offset-1">
              <div className="row">
                <div className="col-1" key={`admin-${1}`}>
                  <Team
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2016/02/19/11/46/man-1209947_960_720.jpg"
                    }
                    name={"Mohammed"}
                    designation={"CEO/Mokmo Solutions"}
                    animDelay={`${1}ms`}
                  />
                </div>
                <div className="col-1" key={`admin-${1}`}>
                  <Team
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2015/09/16/17/04/marketing-942994_960_720.jpg"
                    }
                    name={"Louti"}
                    designation={"COO/Mokmo Solutions"}
                    animDelay={`${1}ms`}
                  />
                </div>
                {/* {admins.map((admin, i) => {
                  delay.push(delay[i] + 200);
                  return (
                    <div className="col-1" key={`admin-${admin.node.id}`}>
                      <Team
                        imageSrc={admin.node.image.childImageSharp.fluid}
                        name={admin.node.name}
                        designation={admin.node.designation}
                        animDelay={`${delay[i]}ms`}
                      />
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        </TeamWrapper>
      </TeamContainer>
    </TeamSectionWrap>
  );
};

TeamSection.propTypes = {
  wrapperOne: PropTypes.object,
  wrapperTwo: PropTypes.object,
};

TeamSection.defaultProps = {
  wrapperOne: {
    pt: "75px",
  },
  wrapperTwo: {
    pt: "20px",
  },
};

export default TeamSection;
