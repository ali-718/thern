import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from '../../../components/shared/section-title'
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Link from '../../../components/shared/link'
import MapContainer from '../../../components/map'
import {SectionWrap, ContactInfoWrap, SingleInfo, MapWrapper} from './contact-info.stc'

const ContactInfo = ({infoTextStyle, infoHeadingStyle, infoLinkStyle}) => {

    const siteQueryData = useStaticQuery(graphql `
        query contactSiteDataQuery {
            site {
                siteMetadata {
                  contact {
                    company_address
                    company_email
                    phone
                    phone2
                  }
                }
            }
        }      
    `);
    const {company_address, company_email, phone, phone2} = siteQueryData.site.siteMetadata.contact
    return (
        <SectionWrap>
            <div className="row justify-content-between align-items-center">
                <div className="col-1 offset-1">
                    <ContactInfoWrap>
                        <SectionTitle
                            title="Contact Info."
                        />
                        {company_address && (
                            <SingleInfo className="wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1000ms">
                                <Text {...infoTextStyle}>Address</Text>
                                <Heading {...infoHeadingStyle}>{company_address}</Heading>
                            </SingleInfo>
                        )}
                        {company_email && (
                            <SingleInfo className="wow fadeInLeft" data-wow-delay="500ms" data-wow-duration="1000ms">
                                <Text {...infoTextStyle}>Email</Text>
                                <Heading {...infoHeadingStyle}>
                                    <Link {...infoLinkStyle} path={`mailto:${company_email}`}>{company_email}</Link>
                                </Heading>
                            </SingleInfo>
                        )}

                        <SingleInfo className="wow fadeInLeft" data-wow-delay="700ms" data-wow-duration="1000ms">
                            <Text {...infoTextStyle}>Phone</Text>
                            {phone && <Heading {...infoHeadingStyle}><Link {...infoLinkStyle} path="/">{phone}</Link></Heading>}
                            {phone2 && <Heading {...infoHeadingStyle}><Link {...infoLinkStyle} path="/">{phone2}</Link></Heading>}
                        </SingleInfo>
                    </ContactInfoWrap>
                </div>
                <div className="col-3 offset-1">
                    <MapWrapper>
                        <MapContainer/>
                    </MapWrapper>
                </div>
            </div>
        </SectionWrap>
    )
}

ContactInfo.propTypes = {
    infoTextStyle: PropTypes.object,
    infoHeadingStyle: PropTypes.object
}

ContactInfo.defaultProps = {
    infoTextStyle: {
        fontSize: '12px',
        color: '#000',
        opacity: 0.8,
        fontweight: 400,
        texttransform: 'uppercase',
        mb: '5px'
    },
    infoHeadingStyle: {
        as: 'h6',
        fontSize: '12px',
        fontweight: 600,
        color: '#000',
        letterspacing: '0.5px',
        mb: 0,
        lineHeight: '22px'
    },
    infoLinkStyle: {
        color: '#000'
    }
}

export default ContactInfo
