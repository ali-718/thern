import styled from 'styled-components'
import {device} from '../../../theme'

export const FooterWrap = styled.footer `
    padding: 120px 0;
    padding-bottom: 140px;
    @media ${device.medium}{
        padding: 100px 0;
        padding-bottom: 120px;
    }
    @media ${device.small}{
        padding: 60px 0;
        padding-bottom: 70px;
    }
`;

export const FooterInner = styled.div `
    max-width: 1140px;
    margin: 0 auto;
`;

export const Content = styled.div `
    text-align: center;
    h2{
        color: #000000;
        font-size: 60px;
        font-weight: 500;
        margin-bottom: 65px;
        @media ${device.large}{
            font-size: 35px;
            line-height: 50px;
        }
        @media ${device.medium}{
            margin-bottom: 50px;
        }
        @media ${device.small}{
            font-size: 22px;
            line-height: 35px;
        }
        @media ${device.small}{
            font-size: 18px;
            line-height: 30px;
        }
    }
`;

export const BtnWrap = styled.a `
    display: inline-block;
    padding: 0 75px;
    height: 70px;
    font-weight: 500;
    line-height: 70px;
    border-radius: 43px;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    transition: 0.4s ease-in-out;
    color: #ffffff;
    background: #000000;
    border: 1px solid #000000;
    @media ${device.small}{
        padding: 0 40px;
    }
    &:visited,
    &:focus{
        color: #fff;
    }
    &:hover{
        color: #000;
        background: transparent;
    }
`;