import styled from 'styled-components';
import {device} from '../../../theme'

export const FooterWrap = styled.footer `
    position: relative;
    z-index: 3;
    padding: 80px 150px 0;
    background: #101010;
    @media ${device.xlarge}{
        padding: 50px 10VW 0;
    }
    @media ${device.small}{
        padding: 10vw;
    }
`;

export const FooterTop = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 34px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.075);
    align-items: center;
    @media ${device.small}{
        flex-direction: column;
        padding: 10vw 0;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

export const FooterMiddle = styled.div `
    display: flex;
    flex-wrap: wrap;
    padding: 130px 0;
    @media ${device.medium}{
        padding: 50px 0;
    }
`;

export const FooterMiddleLeft = styled.div `
    flex-basis: 50%;
    @media ${device.medium}{
        flex-basis: 40%;
    }
    @media ${device.small}{
        flex-basis: 100%;
        max-width: 100%;
    }
`;

export const FooterMiddleRight = styled.div `
    flex-basis: 50%;
    @media ${device.medium}{
        flex-basis: 60%;
        max-width: 60%;
    }
    @media ${device.small}{
        flex-basis: 100%;
        max-width: 100%;
        margin-top: 10vw;
    }
`;

export const AddressWrap = styled.div `
    display: flex;
    margin: 0 -70px;
    @media ${device.medium}{
        margin: 0 -15px;
    }
`;

export const Address = styled.div `
    margin: 0 70px;
    max-width: 50%;
    flex-basis: 50%;
    @media ${device.medium}{
        margin: 0 15px;
    }
`;

export const ScrollTop = styled.div `
    height: 35px;
    position: relative;
    float: right;
    right: -10px;
    top: 13px;
    width: 35px;
    cursor: pointer;
    opacity: 0.3;
    transition: all 0.2s ease-in-out;
    &:hover{
        top: 8px;
        opacity: 1;
        .arrow-top-line{
            height: 32px;
        }
    }
    .arrow-top{
        border-bottom: 2px solid #fff;
        border-left: 2px solid #fff;
        height: 10px;
        transform: rotate(135deg);
        width: 10px;
        position: absolute;
        left: 13.5px;
        top: 2px;
        &-line{
            background-color: #fff;
            height: 35px;
            left: 50%;
            position: absolute;
            top: 3px;
            width: 2px;
            transition: height 0.2s ease-in-out;
        }
    }
`;

export const FooterBottom = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 20px 0 45px;
    @media ${device.small} {
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;
        padding: 0;
    }
`;

export const FooterBottomLeft = styled.div `
    @media ${device.small}{
        padding-top: 10vw;
    }
    @media ${device.xsmall}{
        padding-top: 7vw;
    }
`;
export const FooterBottomRight = styled.div ``;