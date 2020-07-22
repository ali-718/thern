import React from 'react'
import Anchor from '../../../components/shared/link'
import logoBlack from '../../../assets/img/logo/rn-creative-black.png';
import {HeaderWrap, HeaderInner, HeaderMain, HeaderCol, LogoWrap, PurchaseBtn} from './header.stc'

const Header = () => {
    return (
        <HeaderWrap>
            <HeaderInner>
                <HeaderMain>
                    <HeaderCol left>
                        <LogoWrap>
                            <Anchor path="/">
                                <img src={logoBlack} alt="Thern Logo"/>
                            </Anchor>
                        </LogoWrap>
                    </HeaderCol>
                    <HeaderCol right>
                        <PurchaseBtn href="https://themeforest.net/checkout/from_item/25717770?license=regular" target="_blank" rel="noopener noreferrer">Purchase thern</PurchaseBtn>
                    </HeaderCol>
                </HeaderMain>
            </HeaderInner>
        </HeaderWrap>
    )
}

export default Header;