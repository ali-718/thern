import styled from 'styled-components'
import {device} from '../../../theme'

export const JoinSectionWrap = styled.div `
    padding: 130px 0;
    @media ${device.xlarge}{
        .col-2.offset-1 {
            margin-left: 20vw;
        }
    }
    @media ${device.large}{
        .col-2.offset-1 {
            margin-left: 10vw;
        }
    }
    @media ${device.medium}{
        padding: 70px 0;
        .col-2.offset-1 {
            max-width: 80vw;
            min-width: 80vw;
            flex: 0;
        }
    }
    @media ${device.small}{
        padding: 10vw 0;
    }
`;

export const SectionInner = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-top: -10px;
`;

export const SectionTitleWrap = styled.div `
    line-height: 1;
`;