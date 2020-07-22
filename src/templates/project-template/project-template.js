import React from 'react';
import PropTypes from 'prop-types'
import { Controller, Scene } from 'react-scrollmagic';
import { graphql } from "gatsby"
import SEO from '../../components/seo';
import Layout from '../../containers/layout/layout'
import Banner from '../../containers/single-project/banner'
import Heading from '../../components/shared/heading'
import Text from '../../components/shared/text'
import SectionTitle from '../../components/shared/section-title'
import Image from '../../components/image'
import Project from '../../components/project'
import {
    ProjectDetailsWrap, 
    ProjectHeaderWrap, 
    ProjectHeaderMeta,
    ProjectType,
    ProjectFeatureWrap,
    FullwidthBox,
    NextProjectWrap} from './project-template.stc'

const ProjectTemplate = ({data, pageContext: {next, previous}, ...restProps}) => {
    const {title, metaHeading, metaText, nextProjectStyle} = restProps;
    const projectData = data.projectsJson;
    const {body, features, cover_image} = projectData;
    return (
        <Layout>
            <SEO title={projectData.title}/>
            <Banner/>
            <ProjectDetailsWrap>
                <ProjectHeaderWrap className="section-ptb-xl">
                    <div className="row">
                        <div className="col-1 offset-1">
                            <div className="rn-project-meta-inner">
                                {projectData.title && <Heading {...title}>{projectData.title}</Heading>}
                                <ProjectHeaderMeta>
                                    {projectData.client && (
                                        <ProjectType className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                            <Heading {...metaHeading}>Client</Heading>
                                            <Text {...metaText}>{projectData.client}</Text>
                                        </ProjectType>
                                    )}
                                    {projectData.sector && (
                                        <ProjectType className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                            <Heading {...metaHeading}>Sector</Heading>
                                            <Text {...metaText}>{projectData.sector}</Text>
                                        </ProjectType>
                                    )}
                                    {projectData.year && (
                                        <ProjectType className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                            <Heading {...metaHeading}>Year</Heading>
                                            <Text {...metaText}>{projectData.year}</Text>
                                        </ProjectType>
                                    )}
                                </ProjectHeaderMeta>
                            </div>
                        </div>
                        <div className="col-2 offset-1">
                            <div className="rn-project-content">
                                {body && body.map((text, i) => <p key={`text-${i}`}>{text}</p>)}
                            </div>
                        </div>
                    </div>
                </ProjectHeaderWrap>
                {cover_image && (
                    <FullwidthBox>
                        <Controller>
                            <Scene classToggle="animated" triggerElement="#project-image-1" triggerHook="onCenter">
                                <div className="rn_surface" id="project-image-1">
                                    <Image fluid={cover_image.childImageSharp.fluid} alt="single"/>
                                </div>
                            </Scene>
                        </Controller>
                    </FullwidthBox>
                )}
                {features && features.map(feature => (
                    <div key={feature.id} className="project-features">
                        <ProjectFeatureWrap className="section-ptb-xl">
                            <div className="row">
                                <div className="col-1 offset-1">
                                    <div className="rn-project-meta-inner">
                                        <div className="section-title">
                                            <Heading {...title}>{feature.title}</Heading>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 offset-1">
                                    <div className="rn-project-content">
                                        {feature.text.map((ft, i) => <p key={`ft-${i}`}>{ft}</p>)}
                                    </div>
                                </div>
                            </div>
                        </ProjectFeatureWrap>
                        <FullwidthBox>
                            <Controller>
                                <Scene classToggle="animated" triggerElement={`#${feature.id}`} triggerHook="onCenter">
                                    <div className="rn_surface" id={feature.id}>
                                        <Image fluid={feature.image.childImageSharp.fluid} alt="single"/>
                                    </div>
                                </Scene>
                            </Controller>
                        </FullwidthBox>
                    </div>
                ))}
            </ProjectDetailsWrap>
            <NextProjectWrap>
                <div className="project-container">
                    <div className="col-1 offset-1">
                        <SectionTitle
                            title={next ? "Next Project": "Previous Project"}
                            subtitle="Sample the Goods"
                        />
                    </div>

                    <div className="project-wrapper">
                        {next && (
                            <Project 
                                {...nextProjectStyle}
                                isEven={true}
                                id={next.id} 
                                image={next.featured_image.childImageSharp.fluid}
                                title={next.title}
                                client={next.client}
                                sector={next.sector}
                            />
                        )} 
                        {!next && previous && (
                            <Project 
                                {...nextProjectStyle}
                                isEven={true}
                                id={previous.id} 
                                image={previous.featured_image.childImageSharp.fluid}
                                title={previous.title}
                                client={previous.client}
                                sector={previous.sector}
                            />
                        )}
                    </div>
                </div>
            </NextProjectWrap>
        </Layout> 
    )
}

export const query = graphql `
    query($id: String!){
        projectsJson(id: {eq: $id}){
            id
            title
            client
            sector
            year
            body
            cover_image {
              childImageSharp {
                fluid(maxWidth: 1760, maxHeight: 990, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationWidth
                  presentationHeight
                }
              }
            }
            features {
              id
              title
              text
              image {
                childImageSharp {
                  fluid(maxWidth: 1920, maxHeight: 1280, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
        }
    }
`;

ProjectTemplate.propTypes = {
    title: PropTypes.object,
    metaHeading: PropTypes.object,
    metaText: PropTypes.object
}

ProjectTemplate.defaultProps = {
    title: {
        color: 'primary',
        fontSize: '40px',
        lineHeight: '55px',
        responsive: {
            medium: {
                fontSize: '24px',
                lineHeight: 'initial'
            }
        }
    },
    metaHeading: {
        as: 'h6',
        color: 'primary',
        fontSize: '12px',
        fontweight: 700,
        letterspacing: '2px',
        mb: '12px',
    },
    metaText: {
        m: 0,
        fontSize: '12px',
        color: '#000000',
        letterspacing: '1px',
    },
    nextProjectStyle: {
        mt: '100px',
        responsive: {
            medium: {
                mt: '60px'
            }
        }
    }
}

export default ProjectTemplate;