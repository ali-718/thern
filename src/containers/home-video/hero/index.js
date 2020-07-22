import React, {useState, Fragment} from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import VideoSrc from '../../../assets/video/video.mp4'
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Button from '../../../components/shared/button'
import ModalVideo from '../../../components/shared/modal-video'
import Video from '../../../components/shared/video'
import { 
  HeroArea, 
  ContentWrapper,
  ContentLeft,
  ContentRight,
  VideoBtn,
  VideoBtnIcon,
  VideoBtnText,
  VideoBg } from './hero.style';
 
const Hero = (props) => {
  const heroQueryData = useStaticQuery(graphql `
    query VideoHeroDataQuery {
      homevideodataJson(id: {eq: "video_hero_section_content"}) {
        title
        date
        btn_link
        video_link
      }
    }  
  `);
  const heroData = heroQueryData.homevideodataJson;
  const {video_link} = heroData;
  let video_arr, video_id, video_channel;
  if(video_link){
      video_arr = video_link.split('=', -1);
      video_id = video_arr[1];
      video_channel = video_link.split(".")[1];
  }
  const [videoOpen, setVideoOpen] = useState(false);
  const modalVideoOpen = () => {
      setVideoOpen(true)
  }
  const modalVideoClose = () => {
      setVideoOpen(false)
  }
  const {title, date, btn_link} = heroData;
  const {descStyle, headingStyle} = props
  return (
    <Fragment>
      <HeroArea>
          <VideoBg>
              <Video src={VideoSrc}/>
          </VideoBg>
          <div className="col-4 offset-1">
              <ContentWrapper>
                <ContentLeft>
                  {date && <Text {...descStyle}>{date}5</Text>}
                  {title && <Heading {...headingStyle}>{title}</Heading>}
                  {btn_link && <Button as={Link} to={btn_link} layout={2}>Discover More <i className="ti-arrow-right"></i></Button>}
                </ContentLeft>
                <ContentRight>
                  <VideoBtn onClick={modalVideoOpen}>
                    <VideoBtnIcon>
                      <i className="ti-control-play"></i>
                    </VideoBtnIcon>
                    <VideoBtnText>How TheRN Works</VideoBtnText>
                  </VideoBtn>
                </ContentRight>
              </ContentWrapper>
          </div>
      </HeroArea>
      <ModalVideo
          channel={video_channel}
          videoId={video_id}
          isOpen={videoOpen}
          onClose={modalVideoClose}
      />
    </Fragment>
  )
}

Hero.propTypes = {
  descStyle: PropTypes.object,
  headingStyle: PropTypes.object,
  buttonStyle: PropTypes.object
}

Hero.defaultProps = {
  descStyle: {
    color: '#fff',
    fontweight: 300,
    fonSize: '16px',
    texttransform: 'uppercase',
    letterspacing: '2px',
    mb: '12px'
  },
  headingStyle: {
    as: 'h1',
    color: '#fff',
    fontSize: '48px',
    lineHeight: 1.5,
    mb: '55px',
    responsive: {
      xlarge: {
        fontSize: '33px'
      },
      large: {
        fontSize: '25px',
        mb: '40px'
      },
      medium: {
        fontSize: '20px',
        mb: '20px'
      }
    }
  },
}

export default Hero
 