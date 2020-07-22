import React from 'react'
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import Image from '../../../components/image'
import {DemoSection, HomeDemo, InnerDemo, TitleWrapper, DemoRow, DemoCol, DemoItem} from './demo.stc'

const Demo = () => {
    const previewDemos = useStaticQuery(graphql `
        query MyQuery {
            homeDemos: previewdataJson(id: {eq: "preview-home-demo-data"}) {
                demos {
                    id
                    title
                    path
                    image {
                        childImageSharp {
                            fluid(maxWidth: 700, maxHeight: 766, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                presentationWidth
                                presentationHeight
                            }
                        }
                    }
                }
            }
            innerDemos: previewdataJson(id: {eq: "preview-inner-demo-data"}) {
                demos {
                    id
                    title
                    path
                    image {
                        childImageSharp {
                            fluid(maxWidth: 700, maxHeight: 766, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                presentationWidth
                                presentationHeight
                            }
                        }
                    }
                }
            }
        }
      
    `)
    const homes = previewDemos.homeDemos.demos;
    const pages = previewDemos.innerDemos.demos;
    return (
        <DemoSection>
            <HomeDemo>
                <TitleWrapper>
                    <h2>Home Demos</h2>
                    <p>Choose one of styles or cutomize easily your site following your ideas</p>
                </TitleWrapper>
                <DemoRow>
                    {homes.map(home => (
                        <DemoCol key={home.id}>
                            <DemoItem>
                                {home.path ? (
                                    <Link to={home.path}>
                                        <Image fluid={home.image.childImageSharp.fluid} alt={home.title}/>
                                        <span>{home.title}</span>
                                    </Link>
                                ): (
                                    <div>
                                        <Image fluid={home.image.childImageSharp.fluid} alt={home.title}/>
                                        <span>{home.title}</span>
                                    </div>
                                )}
                            </DemoItem>
                        </DemoCol>
                    ))}
                </DemoRow>
            </HomeDemo>
            <InnerDemo>
                <TitleWrapper className="black-text">
                    <h2>Inner Pages</h2>
                    <p>Dynamic Projects and Blogs</p>
                </TitleWrapper>
                <DemoRow>
                    {pages.map(page => (
                        <DemoCol key={page.id}>
                            <DemoItem>
                                <Link to={page.path}>
                                    <Image fluid={page.image.childImageSharp.fluid} alt={page.title}/>
                                    <span className="black-text">{page.title}</span>
                                </Link>
                            </DemoItem>
                        </DemoCol>
                    ))}
                </DemoRow>
            </InnerDemo>
        </DemoSection>
    )
}

export default Demo;