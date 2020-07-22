import styled from 'styled-components';
import {device} from '../../theme'

export const TestimonialWrap = styled.div `
    text-align: ${props => props.textAlign};
`;

export const Content = styled.div ``;

export const ClientInfo = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.small}{
        flex-direction: column;
    }
`;

export const ClientThumb = styled.figure `
    @media ${device.small}{
        margin-bottom: 5vw;
    }
    img{
        border-radius: 100%;
    }
`;
 
export const ClientDetails = styled.div `
    text-align: left;
    padding-left: 30px;
    @media ${device.small}{
        text-align: center;
        padding-left: 0;
    }
`;