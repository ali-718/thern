import styled from 'styled-components'
import {device} from '../../../theme'

export const TeamSectionWrap = styled.div `
    background: #f8f8f8;
    padding-top: 130px;
    padding-bottom: 75px;
    @media ${device.medium}{
        padding: 70px 0;
        .col-1.offset-1 {
            max-width: 80vw;
        }
    }
    @media ${device.small}{
        padding: 10vw 0;
    }
`;

export const TeamContainer = styled.div ``;

export const TeamWrapper = styled.div `
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    @media ${device.medium}{
        .col-4.offset-1 {
            width: 80vw;
            .col-1 {
                max-width: 40vw;
                flex: 0 0 40vw;
            }
        }
    }
    @media ${device.small}{
        .col-4.offset-1 {
            .col-1 {
                max-width: 80vw;
                flex: 0 0 80vw;
            }
        }
    }
    @media ${device.xsmall}{
        .col-4.offset-1 {
            .col-1 {
                max-width: 40vw;
                flex: 0 0 40vw;
            }
        }
    }
    @media ${device.xxsmall}{
        .col-4.offset-1 {
            .col-1 {
                max-width: 80vw;
                flex: 0 0 80vw;
            }
        }
    }
`; 