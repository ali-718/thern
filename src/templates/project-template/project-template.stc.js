import styled from 'styled-components';
import {device} from '../../theme'

export const BannerWrap = styled.div `
    .gatsby-image-wrapper{
        z-index: -1;
    }
`;

export const ProjectDetailsWrap = styled.div `
    background: #f8f8f8;
    .section-ptb-xl {
        padding: 130px 0;
        @media ${device.medium}{
            padding: 70px 0;
        }
        @media ${device.small}{
            padding: 10vw 0;
        }
    }
    .col-2.offset-1 {
        @media ${device.xlarge}{
            margin-left: 20vw;
        }
        @media ${device.small}{
            width: 80vw;
            margin-left: 10vw;
        }
    }

`;

export const ProjectHeaderWrap = styled.div `

`;

export const ProjectHeaderMeta = styled.div `
    margin-top: 80px;
    @media ${device.large}{
        margin-top: 100px;
    }
    @media ${device.small}{
        margin-top: 5px;
        margin-bottom: 38px;
    }
`;

export const ProjectType = styled.div `
    margin-top: 30px;
`;

export const ProjectFeatureWrap = styled.div `
    .rn-project-meta-inner{
        margin-top: -10px;
    }
    .rn-project-content {
        margin-top: -7px;
        margin-bottom: -18px;
    }
`;

export const FullwidthBox = styled.div `
    padding-left: 80px;
    padding-right: 80px;
    @media ${device.xlarge}{
        padding-left: 10vw;
        padding-right: 10vw;
    }
`;


export const NextProjectWrap = styled.div `
    background-color: #f8f8f8;
    padding: 130px 0;
    @media ${device.medium}{
        padding: 70px 0;
    }
    @media ${device.small}{
        padding: 10vw 0;
    }
    .col-1.offset-1{
        @media ${device.medium}{
            max-width: 40vw;
            flex: 0 0 40vw;
        }
    }
`;