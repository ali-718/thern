import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image';
import {TestimonialWrap, Content, ClientInfo, ClientThumb, ClientDetails} from './testimonial.stc'
import Heading from '../shared/heading'
import Text from '../shared/text'
import qouteImg from '../../assets/img/icons/quote.png';

const Testimonial = ({author_name, author_role, company, country, author_image, review, ...restProps}) => {
    const {HeadingStyle, TextStyle, reviewStyle, reviewSpanStyle, ...restStyles} = restProps
    return (
        <TestimonialWrap {...restStyles}>
            <Content>
                {review && (
                    <Text {...reviewStyle}>
                        {review}
                        <Text {...reviewSpanStyle}><img src={qouteImg} alt="quote"/></Text>
                    </Text>
                )}
                <ClientInfo>
                    {author_image && (
                        <ClientThumb>
                            <Img fixed={author_image} alt={author_name}/>
                        </ClientThumb>
                    )}
                    <ClientDetails>
                        {author_name && <Heading {...HeadingStyle}>{author_name}</Heading>}
                        {(author_role || company || country) && (
                            <Text {...TextStyle}>
                                {author_role && <Text as="span">{author_role}</Text>}
                                {company && <Text as="span"> , {company}</Text>}
                                {country && <Text as="span"> , {country}</Text>}
                            </Text>
                        )}
                    </ClientDetails>
                </ClientInfo>
            </Content>
        </TestimonialWrap>
    )
}

Testimonial.propTypes = {
    HeadingStyle: PropTypes.object,
    TextStyle: PropTypes.object,
    textalign: PropTypes.string
}

Testimonial.defaultProps = {
    textalign: 'center',
    reviewStyle: {
        color: '#001c43',
        align: 'center',
        fontSize: '36px',
        lineHeight: '60px',
        p: '0 30%',
        position: 'relative',
        mb: '34px',
        zindex: 2,
        responsive: {
            xlarge: {
                fontSize: '28px',
                lineHeight: '48px',
                p: '0 25%',
                mb: '30px'
            },
            large: {
                fontSize: '20px',
                lineHeight: '35px',
                p: '80px 20%',
                mb: 0
            },
            small: {
                fontSize: '16px',
                lineHeight: '28px',
                p: '0 0 10vw 0'
            }
        }
    },
    reviewSpanStyle: {
        as: 'span',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
        left: '50%',
        zindex: -1,
        pt: '100px',
        responsive: {
            large: {
                pt: 0
            },
            small: {
                pt: '100px'
            },
            xsmall: {
                pt: 0
            }
        }
    },
    HeadingStyle: {
        as: 'h6',
        color: '#001c43',
        fontweight: 700,
        fontSize: '16px',
        mb: '10px',
        responsive: {
            small: {
                fontweight: 500,
                fontSize: '14px'
            }
        }
    },
    TextStyle: {
        color: '#000000',
        letterspacing: '1px',
        fontweight: 300,
        fontSize: '12px',
        mb: 0
    }
}

export default Testimonial
 