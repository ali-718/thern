import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import SlickSlider from '../../../components/shared/slick'
import Testimonial from '../../../components/testimonial'
import {TestimonialWrap} from './testimonial.stc'
 
const TestimonialSection = ({section, options}) => {
    const testimonialData = useStaticQuery(graphql `
        query SliderTestimonailQuery {
            allTestimonialJson {
                edges {
                    node{
                        id
                        author_name
                        author_role
                        review
                        company
                        country
                        author_image {
                            childImageSharp {
                                fixed(width: 88, height: 88, quality: 100) {
                                    ...GatsbyImageSharpFixed_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const testimonilas = testimonialData.allTestimonialJson.edges;
    return (
        <TestimonialWrap {...section}>
            <div className="row align-items-center">
                <div className="col-6">
                    <SlickSlider options={options}>
                        {testimonilas.map(data => (
                            <div className="item" key={data.node.id}>
                                <Testimonial
                                    author_name={data.node.author_name}
                                    author_role={data.node.author_role}
                                    company={data.node.company}
                                    country={data.node.country}
                                    author_image={data.node.author_image.childImageSharp.fixed}
                                    review={data.node.review}
                                />
                            </div>
                        ))}
                    </SlickSlider>
                </div>
            </div>
        </TestimonialWrap>
    )
}

TestimonialSection.propTypes = {
    section: PropTypes.object
}

TestimonialSection.defaultProps = {
    section: {
        backgroundColor: '#fff'
    },
    options: {
        slidesToShow: 1,
        dots: true
    }
}

export default TestimonialSection
