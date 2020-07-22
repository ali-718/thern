import styled from 'styled-components'
import {device} from '../../../theme'

export const SectionWrap = styled.div `
    background-color: #fff;
    .row{
        flex-wrap: nowrap;
    }
    @media ${device.medium}{
        .col-1.offset-1{
            max-width: 30vw;
            flex: 0 0 30vw;
        }
    }
    @media ${device.small}{
        .row{
            flex-wrap: wrap;
        }
        .col-1.offset-1{
            max-width: 80vw;
            flex: 0 0 80vw;
            width: 80vw;
        }
    }
`;

export const ContactInfoWrap = styled.div `
    padding: 130px 0;
    @media ${device.medium}{
        padding: 70px 0;
    }
    @media ${device.small}{
        padding: 10vw 0;
    }
`;

export const SingleInfo = styled.div `
    padding-right: 100px;
    margin-top: 20px;
`;

export const MapWrapper = styled.div `
    width: 100%;
    height: 700px;
    @media ${device.small}{
        margin-bottom: 10vw;
        height: 500px;
    }
    @media ${device.xsmall}{
        height: 300px;
    }
    & > div {
        width: 100%;
        height: 100%;
    }
`;