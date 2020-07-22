import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import parse from 'html-react-parser'
import Image from '../../../components/image'
import {HeroWrapper, HeroInner, HeroContent, HeroImages, HeroImageInner} from './hero.stc'

const Hero = () => {
    const heroQuery = useStaticQuery(graphql `
        query PreviewHeroQuery {
            previewdataJson(id: {eq: "preview-hero-data"}) {
                title
                laptop {
                    childImageSharp {
                        fluid(maxWidth: 1040, maxHeight: 662, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                tablet {
                    childImageSharp {
                        fluid(maxWidth: 416, maxHeight: 569, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                phone {
                    childImageSharp {
                        fluid(maxWidth: 229, maxHeight: 427, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }      
    `);
    const {title, laptop, tablet, phone} = heroQuery.previewdataJson;
    return (
        <HeroWrapper>
            <HeroInner>
                <HeroContent>
                    {title && <h1>{parse(title)}</h1>}
                </HeroContent>
                <HeroImages>
                    <HeroImageInner>
                        {laptop && (
                            <div className="laptop wow newfadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <Image fluid={laptop.childImageSharp.fluid} alt="laptop"/>
                            </div>
                        )}
                        {tablet && (
                            <div className="tablet wow newFadeInRight" data-wow-delay="1000ms" data-wow-duration="1000ms">
                                <Image fluid={tablet.childImageSharp.fluid} alt="tablet"/>
                            </div>
                        )}
                        {phone && (
                            <div className="phone wow newFadeInRight" data-wow-delay="1000ms" data-wow-duration="1000ms">
                                <Image fluid={phone.childImageSharp.fluid} alt="phone"/>
                            </div>
                        )}
                    </HeroImageInner>
                </HeroImages>
            </HeroInner>
        </HeroWrapper>
    )
}

export default Hero;