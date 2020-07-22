import styled from 'styled-components';
import {device} from '../../../theme'
import BackgroundImage from 'gatsby-background-image'

export const StorySection = styled.section `
    background-color: ${props => props.backgroundColor};
    padding: 130px 0;
    @media ${device.medium}{
        padding: 70px 0;
    }
    @media ${device.small}{
        padding: 10vw 0;
    }
    .col-2.offset-1,
    .col-1.offset-1{
        @media ${device.medium}{
            flex: 0 0 80vw;
            max-width: 80vw;
        }
    }
`;
 
export const StoryInner = styled.div `
    position: relative;
    z-index: 2;
    padding-right: 0;
    @media ${device.medium}{
        padding-top: 50px;
    }
    @media ${device.small}{
        padding-top: 10vw;
    }
`;

export const Content = styled.div `
    margin-top: 42px;
    @media ${device.small}{
        margin-top: 10vw;
    }
`;

export const StoryImgWrap = styled.div `
    height: 100%;
`;

export const StoryImage = styled(BackgroundImage) `
    height: 100%;
    width: 100%;
    min-height: 450px;
    background-position: ${props => props.backgroundPosition};
    @media ${device.small}{
        min-height: 350px;
    }
`;