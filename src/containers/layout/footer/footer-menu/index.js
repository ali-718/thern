import React from 'react';
import {Link} from 'gatsby';
import {FooterMenuWrap, FooterMenuList} from './footer-menu.stc'

const FooterMenu = () => {
    return (
        <FooterMenuWrap>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Affiliates</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Privacy</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Cookies</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">SERVICES</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Sitemap</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Press</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Careers</Link>
            </FooterMenuList>
        </FooterMenuWrap>
    )
}

export default FooterMenu;