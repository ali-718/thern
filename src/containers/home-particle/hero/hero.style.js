import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import {device} from '../../../theme'


export const HeroArea = styled.section `
    position: relative;
    height: 100vh;
    min-height: 625px;
    z-index: 3;
    .particle{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`;
export const HeroBg = styled(BackgroundImage) `
    width: 100%;
    height: 100%;
    position: absolute !important;
    top: 0;
    left: 0;
`;

export const ContentWrapper = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContetnTop = styled.div `
    margin-top: auto;
`;

export const ContentBottom = styled.div `
    margin-top: auto;
`;

export const ContentBottomInner = styled.div `
    border-top: 1px solid #61656d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 45px;
    padding-bottom: 45px;
    @media ${device.xlarge}{
        padding-top: 40px;
        padding-bottom: 40px;
    }
    @media ${device.large}{
        padding-top: 25px;
        padding-bottom: 25px;
    }
    @media ${device.small}{
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;
export const ContentBottomLeft = styled.div `
    max-width: 34%;
    flex-basis: 34%;
    @media ${device.medium}{
        max-width: 40%;
        flex-basis: 40%;
    }
    @media ${device.small}{
        max-width: 100%;
        flex-basis: 100%;
    }
`;

export const ContentBottomRight = styled.div `
    max-width: calc(100% - 34%);
    flex-basis: calc(100% - 34%);
    @media ${device.medium}{
        max-width: calc(100% - 40%);
        flex-basis: calc(100% - 40%);
    }
    @media ${device.small}{
        max-width: 100%;
        flex-basis: 100%;
    }
`;

export const ClientItem = styled.div ``;

export const ClientWrap = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    @media ${device.small}{
        justify-content: space-between;
        margin-top: 10px;
    }
    @media ${device.xsmall}{
        
    }
    ${ClientItem}{
        &:not(:last-child){
            padding-right: 80px;
            @media ${device.large}{
                padding-right: 60px;
            }
            @media ${device.medium}{
                padding-right: 40px;
            }
            @media ${device.small}{
                padding-right: 0;
            }
            @media ${device.xsmall}{
                margin-bottom: 10px;
            }
        }
    }
    img{
        filter: invert(1);
        max-width: 110px;
        @media ${device.medium}{
            max-width: 90px;
        }
        @media ${device.small}{
            max-width: 120px;
        }
        @media ${device.xsmall}{
            max-width: 90px;
        }
    }
`;