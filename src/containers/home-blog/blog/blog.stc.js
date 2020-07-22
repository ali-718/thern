import styled from 'styled-components';
import {device} from '../../../theme'

export const BlogSectionWrap = styled.section `
    padding-top: 80px;
    padding-bottom: 50px;
    background: #f8f8f8;
    @media ${device.medium}{
        padding-top: 20px;
    }
    @media ${device.small}{
        padding-top: 10px;
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