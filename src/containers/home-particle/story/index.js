import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from "gatsby"
import SectionTitle from '../../../components/shared/section-title'
import Text from '../../../components/shared/text'
import Button from '../../../components/shared/button'
import {StorySection, StoryInner, Content, StoryImgWrap, StoryImage} from './story.stc'
import { Controller, Scene } from 'react-scrollmagic';

const Story = ({section, paragraph, paragraphTwo, button, image}) => {
    const storyQueryData = useStaticQuery(graphql `
        query ParticleStoryDataQuery {
            homeparticledataJson(id: {eq: "particle_story_section_contnet"}) {
                id
                title
                subtitle
                path
                content
                image {
                    childImageSharp {
                        fluid(maxWidth: 960, maxHeight: 950, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }      
    `)
    const storyData = storyQueryData.homeparticledataJson;
    const {title, subtitle, path, content} = storyData;
    const imageData = storyData.image.childImageSharp.fluid;
    
    return (
        <StorySection {...section}>
            <div className="row">
                <div className="col-1 offset-1">
                    <div id="trigger" />
                    <Controller>
                        <Scene classToggle="animated" triggerElement="#trigger" triggerHook="onCenter">
                            <StoryImgWrap className="rn_surface story-image">
                                <StoryImage fluid={imageData}/>
                            </StoryImgWrap>
                        </Scene>
                    </Controller>
                </div>
                <div className="col-2 offset-1">
                    <StoryInner>
                        <SectionTitle
                            title={title}
                            subtitle={subtitle}
                        /> 
                        <Content>
                            {content.map((textData, i) => <Text key={`story-text-${i}`} {...paragraph}>{textData}</Text>)}
                            <Button as={Link} to={path} {...button}>DISCOVER MORE</Button>
                        </Content>
                    </StoryInner>
                </div>
            </div>
        </StorySection>
    )
}
 
Story.propTypes = {
    paragraph: PropTypes.object,
    paragraphTwo: PropTypes.object,
    button: PropTypes.object,
    section: PropTypes.object,
    image: PropTypes.object
}

Story.defaultProps = {
    section: {
        backgroundColor: '#f8f8f8'
    },
    paragraph: {
        color: '#000000',
        fontSize: '14px',
        lineHeight: '26px'
    },
    paragraphTwo: {
        mt: '31px'
    },
    button: {
        mt: '34px'
    },
    image: {
        backgroundPosition: '-78px 0px'
    }
}

export default Story
