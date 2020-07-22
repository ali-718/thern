import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Image from '../../../components/image'
import ContactForm from '../../../components/contact-form'
import { ContactSectionWrap, BannerArea, ContactWrap, ContactFormWrap } from './contact-form.stc'

const ContactFormSection = ({ headingStyle, textStyle }) => {
    const contactData = useStaticQuery(graphql`
        query ContactBannerQuery {
            pagedataJson(id: {eq: "contact_page_data"}) {
                title
                subtitle
                banner_img {
                    childImageSharp {
                        fluid(maxWidth: 700, maxHeight: 1000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }            
            site {
                siteMetadata {
                  form_url
                }
            }
        }      
    `);
    const { title, subtitle } = contactData.pagedataJson;
    const imageData = contactData.pagedataJson.banner_img.childImageSharp.fluid
    const { siteMetadata: { form_url } } = contactData.site;
    return (
        <ContactSectionWrap>
            <div className="row align-items-center">
                <div className="col-2">
                    <BannerArea id="contact-form-banner">
                        <Image fluid={imageData} alt="Contact" />
                    </BannerArea>
                </div>
                <div className="col-2 offset-1">
                    <ContactWrap>
                        <div className="rn-project-meta-inner">
                            {title && <Text {...textStyle}>{title}</Text>}
                            {subtitle && <Heading {...headingStyle}>{subtitle}</Heading>}
                        </div>
                        <ContactFormWrap>
                            <ContactForm url={form_url} />
                        </ContactFormWrap>
                    </ContactWrap>
                </div>
            </div>
        </ContactSectionWrap>
    )
}

ContactFormSection.propTypes = {
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object
}

ContactFormSection.defaultProps = {
    headingStyle: {
        fontSize: '40px',
        lineHeight: '55px',
        color: 'primary',
        fontweight: 600,
        responsive: {
            medium: {
                fontSize: '24px',
                lineHeight: 'initial'
            }
        }
    },
    textStyle: {
        as: 'span',
        color: '#000000',
        fontweight: 500,
        fontSize: '16px',
        texttransform: 'uppercase',
        letterspacing: '1px',
        display: 'inline-block',
        mb: '17px',
        lineHeight: 1,
        responsive: {
            medium: {
                fontSize: '12px',
                mb: '10px',
            }
        }
    }
}

export default ContactFormSection;