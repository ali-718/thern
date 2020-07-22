import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Controller, Scene } from 'react-scrollmagic';
import Image from '../../../components/image'
import {VideoSectionWrap} from './video.stc'

const VideoSection = () => {
    const videoQueryData = useStaticQuery(graphql `
        query HvideoVideoDataQuery {
            homevideodataJson(id: {eq: "video_banner_section_content"}) {
                banner_image {
                    childImageSharp {
                        fluid(maxWidth: 1280, maxHeight: 550, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }      
    `);
    const bannerImg = videoQueryData.homevideodataJson.banner_image.childImageSharp.fluid
    return (
        <VideoSectionWrap>
            <div className="col-4 offset-1">
                <div className="video-content">
                    <Controller>
                        <Scene classToggle="animated" triggerElement=".video-content" triggerHook="onCenter">
                            <div className="thumb rn_surface">
                                <Image fluid={bannerImg} alt="creative agency"/>
                            </div>
                        </Scene>
                    </Controller>
                </div>
            </div>
        </VideoSectionWrap>
    )
}
  
VideoSection.propTypes = {
    section: PropTypes.object
}

VideoSection.defaultProps = {
    section: {
        backgroundColor: '#f8f8f8'
    },
}

export default VideoSection;