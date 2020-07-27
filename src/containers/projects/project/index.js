import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import SectionTitle from "../../../components/shared/section-title";
import Project from "../../../components/project";
import { ProjectSectionWrap } from "./project.stc";

const ProjectSection = ({ section, project }) => {
  const projectQueryData = useStaticQuery(graphql`
    query ProjectPageDataQuery {
      homedataJson(id: { eq: "project_section_content" }) {
        id
        title
        subtitle
      }
      allProjectsJson {
        edges {
          node {
            id
            title
            sector
            client
            featured_image {
              childImageSharp {
                fluid(maxWidth: 1060, maxHeight: 600, quality: 100) {
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
  const projectSecData = projectQueryData.homedataJson;
  const projectsData = projectQueryData.allProjectsJson.edges;
  return (
    <ProjectSectionWrap {...section}>
      <div className="project-container">
        <div className="col-1 offset-1">
          <SectionTitle
            title={projectSecData.title}
            subtitle={projectSecData.subtitle}
          />
        </div>

        <div className="project-wrapper">
          <Project
            {...project}
            isEven={true}
            id={1}
            image={require("../../../assets/img/logo/project.jpg")}
            title={"Smart Agency"}
            client={"Mohammed"}
            sector={"Commercial"}
          />
          {projectsData.map((data, i) => {
            let isEven = i % 2 === 0;
            if (i == 0) {
              return (
                <Project
                  {...project}
                  isEven={true}
                  id={1}
                  image={require("../../../assets/img/logo/project2.jpg")}
                  title={"Smart Agency"}
                  client={"Mohammed"}
                  sector={"Commercial"}
                />
              );
            }
          })}
        </div>
      </div>
    </ProjectSectionWrap>
  );
};

ProjectSection.propTypes = {
  section: PropTypes.object,
  project: PropTypes.object,
};

ProjectSection.defaultProps = {
  section: {
    backgroundColor: "#f8f8f8",
  },
  project: {
    mt: "100px",
    responsive: {
      medium: {
        mt: "50px",
      },
    },
  },
};

export default ProjectSection;
