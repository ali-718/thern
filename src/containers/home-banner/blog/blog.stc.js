import styled from 'styled-components';
import {device} from '../../../theme'

export const BlogSectionWrap = styled.section `
    padding-top: 130px;
    padding-bottom: 80px;
    background-color: ${props => props.backgroundColor};
    @media ${device.medium}{
        padding-top: 70px;
        padding-bottom: 23px;
    }
    @media ${device.small}{
        padding-top: 10vw;
        padding-bottom: 0;
    }
    .col-1.offset-1{
        @media ${device.medium}{
            max-width: 100%;
            flex: 0 0 100%;
        }
    }
`;

export const BlogInner = styled.div `
    margin-top: 98px;
    @media ${device.medium}{
        margin-top: 50px;
    }
    .col-2:nth-child(odd) {
        padding-right: 30px;
        @media ${device.small}{
            padding-right: 0;
        }
    }
    .col-2:nth-child(even) {
        padding-left: 30px;
        @media ${device.small}{
            padding-left: 0;
        }
    }
`;