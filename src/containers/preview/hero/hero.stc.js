import styled from 'styled-components'
import {device} from '../../../theme'

export const HeroWrapper = styled.div `
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const HeroInner = styled.div `

`;

export const HeroContent = styled.div `
    text-align: center;
    padding-top: 20px;
    width: 70%;
    margin: auto;
    h1{
        font-size: 38px;
    }
    @media ${device.large}{
        width: 75%;
        h1{
            font-size: 30px;
            font-weight: 500;
        }
    }
    @media ${device.medium}{
        width: 95%;
    }
    @media ${device.small}{
        width: 90%;
        h1{
            font-size: 25px;
        }
    }
    @media ${device.small}{
        width: 100%;
        h1{
            font-size: 22px;
        }
    }
`;

export const HeroImages = styled.div `
    width: 55%;
    margin: auto;
    @media ${device.large}{
        width: 65%;
    }
    @media ${device.small}{
        width: 90%;
    }
`;

export const HeroImageInner = styled.div `
    position: relative;
    .laptop{
        left: -10%;
        position: relative;
    }
    .tablet{
        position: absolute;
        right: -5%;
        bottom: 0;
        width: 40%;
    }
    .phone{
        position: absolute;
        right: 25%;
        bottom: 0;
        width: 22%;
    }
`;