import styled from 'styled-components';
import {device} from '../../../theme'

export const ProjectSectionWrap = styled.section `
    background-color: ${props => props.backgroundColor};
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
    .col-4.offset-2, .col-3.offset-2{
        @media ${device.xlarge}{
            margin-left: 10vw;
        }
    }
`;