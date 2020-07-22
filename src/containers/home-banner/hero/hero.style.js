import styled, {css} from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import {device} from '../../../theme'


export const HeroArea = styled.section `
    position: relative;
    height: 100vh;
    min-height: 600px;
    @media ${device.small}{
        height: calc(100vh - 100px);
        min-height: 550px;
    }
    ${props => props.overlay && css `
        position: relative;
        &:before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            z-index: 2;
            background-color: ${props => props.overlayColor};
            opacity: ${props => props.opacity};
        }
    `}
`;

export const HeroBg = styled(BackgroundImage) `
    width: 100%;
    height: 100%;
    min-height: 600px;
    position: absolute !important;
    top: 0;
    left: 0;
    @media ${device.small}{
        min-height: 550px;
    }
`;

export const ContentWrapper = styled.div `
    height: 100%;
    display: flex;
    align-items: flex-end;
    @media ${device.small}{
        min-height: min-content;
        padding: 50vw 0 10vw 0;
    }
`;
