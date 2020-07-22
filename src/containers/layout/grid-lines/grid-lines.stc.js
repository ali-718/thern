import styled from 'styled-components'
import {device} from '../../../theme'

export const GridLinesWrapper = styled.div `
    position: relative;
    z-index: 1;
`;

export const GridLine = styled.div `
    width: 25vw;
    height: 100%;
    border-right: 1px solid rgba(221, 221, 221, 0.3);
`;

export const GridLinesInner = styled.div `
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;

    ${GridLine}{
        &:last-child {
            border-right: none;
        }
        @media ${device.xlarge}{
            &:nth-child(1),
            &:nth-child(6){
                width: 12.5VW;
            }
        }
        @media ${device.small}{
            &:nth-child(2),
            &:nth-child(4){
                border: none;
            }
        }
    }
`;