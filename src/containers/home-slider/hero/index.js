import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Button from '../../../components/shared/button'
import { 
  HeroArea, 
  SlideContent,
  SlideBg, 
  SlideNav,
  SlideNavWrap} from './hero.style';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
        <i className="ti-arrow-right"></i>
    </button>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
        <i className="ti-arrow-left"></i>
    </button>
  );
}

const Hero = (props) => {
  const heroQueryData = useStaticQuery(graphql `
    query SliderHeroDataQuery {
      homesliderdataJson(id: {eq: "slider_hero_section_content"}) {
        slides {
          slide_text {
            title
            date
            btn_link
            bg_image {
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 950, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
          slide_nav {
            title
            subtitle
          }
        }
      }
    }  
  `);
  const {slides} = heroQueryData.homesliderdataJson;
  const slideTextArr = slides.map(slide => slide.slide_text);
  const slideNavArr = slides.map(slide => slide.slide_nav);
  const {descStyle, headingStyle, navSubtitleStyle, navTitleStyle} = props
  const mainSliderRef = useRef(null);
  const navSliderRef = useRef(null);
  const [mainSlider, setMainSlider] = useState(null);
  const [navSlider, setNavSlider] = useState(null)
  useEffect(() => {
    setMainSlider(mainSliderRef.current);
    setNavSlider(navSliderRef.current)
  }, [mainSlider, navSlider]);
  
  const mainSliderOpt = {
    asNavFor: navSlider,
    ref: mainSliderRef,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  const navSliderOpt = {
    ref: navSliderRef, 
    asNavFor: mainSlider,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
 
  return (
      <HeroArea>
        <Slider {...mainSliderOpt}>
          {slideTextArr && slideTextArr.map((slideText, i) => (
            <div className="item" key={`main-slide-${i}`}>
              <SlideContent>
                <SlideBg fluid={slideText.bg_image.childImageSharp.fluid}/>
                <div className="col-3 offset-1">
                    {slideText.date && <Text className="date" {...descStyle}>{slideText.date}</Text>}
                    {slideText.title && <Heading className="title" {...headingStyle}>{slideText.title}</Heading>}
                    {slideText.btn_link && <Button className="button" as={Link} to={slideText.btn_link} layout={2}>Discover More <i className="ti-arrow-right"></i></Button>}
                </div>
              </SlideContent>
            </div>
          ))}
        </Slider>
        <SlideNavWrap>
          <div className="col-4 offset-1">
              <Slider {...navSliderOpt}>
                  {slideNavArr && slideNavArr.map((slideNav, i) => (
                      <div className="item" key={`slide-nav-${i}`}>
                          <SlideNav>
                              {slideNav.subtitle && <Text {...navSubtitleStyle}>{slideNav.subtitle}</Text>}
                              {slideNav.title && <Heading {...navTitleStyle}>{slideNav.title}</Heading>}
                          </SlideNav>
                      </div>
                  ))}
              </Slider>
          </div>
        </SlideNavWrap>
      </HeroArea>
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
        fontSize: '33px',
        mb: '30px'
      },
      large: {
        fontSize: '25px',
        mb: '20px'
      },
      medium: {
        fontSize: '20px',
      }
    }
  },
  navSubtitleStyle: {
    fontSize: '11px',
    fontweight: 300,
    color: '#fff',
    texttransform: 'uppercase',
    letterspacing: '1px',
    mb: '8px'
  },
  navTitleStyle: {
    fontSize: '18px',
    fontweight: 500,
    color: '#fff',
    lineHeight: 1.5
  }
}

export default Hero
 