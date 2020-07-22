import styled from 'styled-components';
import {device} from '../../../theme'

export const AboutSectionWrap = styled.div `
    padding: 130px 0;
    .section-pt-md{
        padding-top: 70px;
    }
    @media ${device.xlarge}{
        .col-2.offset-1{
            margin-left: 20vw;
        }
    }
    @media ${device.medium}{
        padding: 70px 0;
        .col-1.offset-1, .col-2.offset-1 {
            max-width: 80vw;
            min-width: 80vw;
            flex: 0;
            margin-left: 10vw;
        }
        .section-pt-md{
            padding-top: 15px;
        }
        .project-type{
            flex-basis: 50%;
            max-width: 50%;
            width: 50%;
            margin: 30px 0;
        }
    }
    @media ${device.small}{
        padding: 10vw 0;
        .project-type{
            flex-basis: 100%;
            max-width: 100%;
            width: 100%;
            margin: 0;
            padding: 15px 0;
        }
    }
`;

export const SectionTitle = styled.div `
    margin-top: -10px;
`;

export const AboutContent = styled.div `
    margin-top: -7px;
    margin-bottom: -18px;
`;

export const ProjectTypeList = styled.ul `
    margin: 0;
    padding-left: 17px;
`;