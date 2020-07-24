import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import Logo from "../../../components/shared/logo";
import FooterMenu from "./footer-menu";
import Text from "../../../components/shared/text";
import Heading from "../../../components/shared/heading";
import Link from "../../../components/shared/link";
import Social, { SocialLink } from "../../../components/shared/social";
import {
  FooterWrap,
  FooterTop,
  FooterMiddle,
  FooterMiddleLeft,
  FooterMiddleRight,
  AddressWrap,
  Address,
  ScrollTop,
  FooterBottom,
  FooterBottomLeft,
  FooterBottomRight,
} from "./footer.stc";

const Footer = ({
  logoStyle,
  headingStyle,
  emailTextStyle,
  emailLinkStyle,
  widgetTitleStyle,
  addresTextStyle,
  addresSpanStyle,
  copyrightStyle,
  socialStyle,
}) => {
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const siteQueryData = useStaticQuery(graphql`
    query footerSiteDataQuery {
      site {
        siteMetadata {
          copyright
          contact {
            postal_code
            address
            email
            social {
              facebook
              linkedin
              twitter
              dribbble
            }
          }
        }
      }
    }
  `);

  const { copyright, contact } = siteQueryData.site.siteMetadata;
  const {
    postal_code,
    email,
    address,
    social: { facebook, twitter, linkedin, dribbble },
  } = contact;

  return (
    <FooterWrap>
      <FooterTop>
        <Logo {...logoStyle} />
        <div className="ft-menu">
          <FooterMenu />
        </div>
      </FooterTop>
      <FooterMiddle>
        <FooterMiddleLeft>
          <Heading {...headingStyle}>Let’s talk!</Heading>
          {email && (
            <a href={`mailto:info@sideway-eg.com`} target="_blank">
              <Text {...emailTextStyle}>
                <Link {...emailLinkStyle}>info@sideway-eg.com</Link>
              </Text>
            </a>
          )}
        </FooterMiddleLeft>
        <FooterMiddleRight>
          <AddressWrap>
            {postal_code && (
              <Address>
                <Heading style={{ marginTop: 10 }} {...widgetTitleStyle}>
                  Quick Information.
                </Heading>
                <Text {...addresTextStyle}>
                  <Text {...addresSpanStyle}>Postal Address:</Text>
                  91 Hafez Ramadan, Al Manteqah as Sadesah, Nasr City, Egypt
                </Text>
              </Address>
            )}
            <Address>
              <Heading style={{ marginTop: 10 }} {...widgetTitleStyle}>
                Quick Location
              </Heading>
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="200"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=91%20Hafez%20Ramadan,%20Al%20Manteqah%20as%20Sadesah,%20Nasr%20City,%20Egypt+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </Address>
          </AddressWrap>
          <ScrollTop className="creative-cursor" onClick={scrollHandler}>
            <div className="arrow-top"></div>
            <div className="arrow-top-line"></div>
          </ScrollTop>
        </FooterMiddleRight>
      </FooterMiddle>
      <FooterBottom>
        {copyright && (
          <FooterBottomLeft>
            <Text {...copyrightStyle}>
              {new Date().getFullYear()} {copyright}
            </Text>
          </FooterBottomLeft>
        )}
        <FooterBottomRight>
          <Social {...socialStyle}>
            {facebook && <SocialLink path={facebook}>Facebook</SocialLink>}
            {twitter && <SocialLink path={twitter}>Twiiter</SocialLink>}
            {linkedin && <SocialLink path={linkedin}>Linkedin</SocialLink>}
            {dribbble && <SocialLink path={dribbble}>Dribbble </SocialLink>}
          </Social>
        </FooterBottomRight>
      </FooterBottom>
    </FooterWrap>
  );
};

Footer.propTypes = {
  logoStyle: PropTypes.object,
  headingStyle: PropTypes.object,
  emailTextStyle: PropTypes.object,
  emailLinkStyle: PropTypes.object,
  widgetTitleStyle: PropTypes.object,
  addresTextStyle: PropTypes.object,
  addresSpanStyle: PropTypes.object,
  copyrightStyle: PropTypes.object,
  socialStyle: PropTypes.object,
};

Footer.defaultProps = {
  logoStyle: {
    responsive: {
      medium: {
        maxwidth: "125px",
      },
    },
  },
  headingStyle: {
    as: "h1",
    color: "#f8f8f8",
    fontSize: "100px",
    fontweight: 700,
    lineHeight: 1,
    responsive: {
      xlarge: {
        fontSize: "65px",
      },
      medium: {
        fontSize: "30px",
      },
    },
  },
  emailTextStyle: {
    m: 0,
  },
  emailLinkStyle: {
    color: "#fff",
    fontSize: "30px",
    fontweight: 500,
    opacity: 0.7,
    responsive: {
      xlarge: {
        fontSize: "20px",
      },
      medium: {
        fontSize: "16px",
      },
    },
  },
  widgetTitleStyle: {
    color: "#c1c1c1",
    fontSize: "16px",
    fontweight: 600,
    texttransform: "uppercase",
    letterspacing: "1px",
    responsive: {
      small: {
        fontSize: "14px",
      },
    },
  },
  addresTextStyle: {
    color: "#fff",
    opacity: 0.7,
    responsive: {
      medium: {
        fontSize: "12px",
        lineHeight: "24px",
      },
    },
  },
  addresSpanStyle: {
    as: "span",
    display: "block",
  },
  copyrightStyle: {
    color: "#fff",
    m: 0,
    fontSize: "14px",
    letterspacing: "1px",
    fontweight: 400,
    opacity: 0.7,
    responsive: {
      medium: {
        fontSize: "10px",
        letterspacing: "0.5px",
      },
    },
  },
  socialStyle: {
    opacity: 0.7,
    space: 30,
    responsive: {
      medium: {
        space: 20,
        fontSize: "12px",
      },
    },
  },
};

export default Footer;
