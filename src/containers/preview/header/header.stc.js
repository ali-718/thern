import styled, {css} from 'styled-components'
import {device} from '../../../theme'

export const HeaderWrap = styled.header `
    position: relative;
`;

export const HeaderInner = styled.div `
    padding: 20px 85px;
    background-color: #fff;
    @media ${device.small}{
        padding: 15px;
    }
`;

export const HeaderMain = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
`;

export const HeaderCol = styled.div `
    flex: 1 0 auto;
    @media ${device.xsmall}{
        flex-basis: 30%;
    }
    ${props => props.left && css `
        margin-right: auto;
    `}
    ${props => props.right && css `
        margin-left: auto;
        text-align: right;
    `}
`;

export const LogoWrap = styled.div ``;

export const PurchaseBtn = styled.a `
    display: inline-block;
    height: 50px;
    line-height: 50px;
    padding: 0 30px;
    background-color: #000;
    border-radius: 3px;
    text-transform: uppercase;
    color: #fff;
    @media ${device.small}{
        height: auto;
        line-height: 1.3;
        padding: 10px 10px;
        text-align: center;
        font-size: 14px;
    }
    &:hover, &:focus, &:visited{
        color: #fff;
    }
`;