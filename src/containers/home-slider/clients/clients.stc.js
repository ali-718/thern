import styled from 'styled-components';
import {device} from '../../../theme'

export const ClientSectionWrap = styled.section `
    padding: 130px 0;
    background-color: ${props => props.backgroundColor};
    @media ${device.medium}{
        padding: 70px 0;
    }
    @media ${device.small}{
        padding: 10vw 0;
    }
`;

export const ClientWrap = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const ClientLeft = styled.div `
    padding-right: 50px;
    width: 50%;
    @media ${device.medium}{
        padding: 0;
        width: 100%;
        margin-bottom: 50px;
    }
`;

export const ClientRight = styled.div `
    padding: 0 0px;
    margin: 0 auto;
    width: 50%;
    @media ${device.medium}{
        width: 100%;
    }
`;