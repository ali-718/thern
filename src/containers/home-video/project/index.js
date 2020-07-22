import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from '../../../components/shared/section-title'
import Project from '../../../components/project'
import {ProjectSectionWrap} from './project.stc'
 
const ProjectSection = ({section, project}) => {
    const projectQueryData = useStaticQuery(graphql `
    query VideoProjectDataQuery {
      homevideodataJson(id: {eq: "video_project_section_content"}) {
        id
        title
        subtitle
      }
      allProjectsJson(filter: {is_featured: {eq: true}}, limit: 3) {
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
    const projectSecData = projectQueryData.homevideodataJson;
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
                    {projectsData.map((data, i) => {
                        let isEven = i%2 === 0;
                        return(
                            <Project 
                                {...project}
                                isEven={isEven}
                                key={data.node.id} 
                                id={data.node.id} 
                                image={data.node.featured_image.childImageSharp}
                                title={data.node.title}
                                client={data.node.client}
                                sector={data.node.sector}
                            />
                        )
                    })}
                </div>
            </div>
        </ProjectSectionWrap>
    )
}
 
ProjectSection.propTypes = {
    section: PropTypes.object,
    project: PropTypes.object
}

ProjectSection.defaultProps = {
    section: {
        backgroundColor: '#f8f8f8'
    },
    project: {
        mt: '100px',
        responsive: {
            medium: {
                mt: '50px'
            }
        }
    }
}

export default ProjectSection
