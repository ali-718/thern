import styled from 'styled-components';
import {device} from '../../../theme'

export const HeroArea = styled.section `
    position: relative;
    height: 100vh;
    min-height: 600px;
    display: flex;
    align-items: center;
`;


export const ContentWrapper = styled.div `
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    z-index: 9 !important;
    position: relative;

`;

export const ContentLeft = styled.div `
    max-width: 65%;
    flex-basis: 65%;
    z-index: 9 !important;
    @media ${device.small}{
        max-width: 100%;
        flex-basis: 100%;    
    }
    * {
        position: relative;
        z-index: 9;
    }
`;

export const ContentRight = styled.div `
    max-width: calc(100% - 65%);
    flex-basis: calc(100% - 65%);
    @media ${device.small}{
        max-width: 100%;
        flex-basis: 100%;   
    }
`;

export const VideoBtn = styled.button `
    display: flex;
    flex-direction: column;
    border: none;
    padding: 0;
    margin: 0;
    margin-left: auto;
    align-items: center;
    @media ${device.small}{
        margin-right: auto;
        margin-left: 0;
        margin-top: 20px;
        flex-direction: row;
        align-items: center;
    }
`;
export const VideoBtnIcon = styled.span `
    width: 122px;
    height: 122px;
    line-height: 126px;
    color: #fff;
    text-align: center;
    border: 2px solid #fff;
    border-radius: 50%;
    font-size: 20px;
    transition: all 1s cubic-bezier(0,0,.2,1);
    &:hover{
        transform: scale3d(1.15,1.15,1.15);
    }
    @media ${device.xlarge}{
        width: 100px;
        height: 100px;
        line-height: 106px;
    }
    @media ${device.medium}{
        width: 80px;
        height: 80px;
        line-height: 86px;
    }
    @media ${device.small}{

    }
`;
export const VideoBtnText = styled.span `
    color: #fff;
    margin-top: 25px;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 1px;
    @media ${device.small}{
        margin-top: 0;
        margin-left: 20px;
    }
`;

export const VideoBg = styled.div `
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    &:before{
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        z-index: 3;
    }
`;