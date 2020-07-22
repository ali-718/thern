import React from 'react';
import {FooterWrap, FooterInner, Content, BtnWrap} from './footer.stc'

const Footer = () => {
    return (
        <FooterWrap>
            <FooterInner>
                <Content>
                    <h2>Purchase The TheRn and Make <br/> Your Website</h2>
                    <BtnWrap href="https://themeforest.net/checkout/from_item/25717770?license=regular" target="_blank" rel="noopener noreferrer">Purchase Now</BtnWrap>
                </Content>
            </FooterInner>
        </FooterWrap>
    )
}

export default Footer;