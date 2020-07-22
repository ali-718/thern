import styled from 'styled-components';
import {device} from '../../../theme'

export const TestimonialWrap = styled.section `
    padding: 130px 0;
    background-color: ${props => props.backgroundColor};
    @media ${device.medium}{
        padding: 70px 0;
    }
    @media ${device.small}{
        padding: 10vw 0;
    }
    .col-6{
        @media ${device.small}{
            margin-left: 10vw;
        }
    }
`;