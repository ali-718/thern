import styled from 'styled-components';
import { device } from '../../../theme'

export const ContactSectionWrap = styled.div`
    background: #f8f8f8;
    @media ${device.medium}{
        .col-2{
            flex-basis: 100vw;
            max-width: 100vw;
        }
        .col-2.offset-1{
            flex-basis: 80vw;
            max-width: 80vw;
        }
    }
`;

export const BannerArea = styled.div`
    height: 100%;
    @media ${device.large}{
        max-height: 710px;
    }
    @media ${device.medium}{
        max-height: 100%;
        .gatsby-image-wrapper{
            max-width: 100% !important;
        }
    }
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

export const ContactWrap = styled.div`
    @media ${device.large}{
        padding: 90px 0;
    }
    @media ${device.medium}{
        padding: 70px 0;
    }
    @media ${device.small}{
        padding: 10vw 0;
    }
`;

export const ContactFormWrap = styled.div`
    margin-top: 70px;
    @media ${device.medium}{
        margin-top: 50px;
    }
`;