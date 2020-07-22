import styled from 'styled-components';
import {device} from '../../../theme'

export const ProjectSectionWrap = styled.section `
    background-color: ${props => props.backgroundColor};
    padding-bottom: 130px;
    @media ${device.medium}{
        padding-bottom: 70px;
    }
    @media ${device.small}{
        padding-bottom: 10vw;
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