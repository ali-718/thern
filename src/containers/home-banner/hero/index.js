import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { HeroArea, HeroBg, ContentWrapper } from './hero.style';
import SlideContent from '../../../components/slide-content';
 
const Hero = () => {
  const heroQueryData = useStaticQuery(graphql `
  query HeroDataQuery {
    homedataJson(id: {eq: "hero_section_content"}) {
      id
      title
      date
      desc
      bg_image {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }  
  `);
  const heroData = heroQueryData.homedataJson;
  const imageData = heroData.bg_image.childImageSharp.fluid;
 
  return (
    <HeroArea overlay overlayColor="#000" opacity=".3">
      <HeroBg fluid={imageData}/>
      <ContentWrapper>
        <div className="content-bottom">
          <div className="col-4 offset-1">
            <SlideContent 
              title={heroData.title}
              date={heroData.date}
              text={heroData.desc}
             />
          </div>
        </div>
      </ContentWrapper>
    </HeroArea>
  )
}

export default Hero
 