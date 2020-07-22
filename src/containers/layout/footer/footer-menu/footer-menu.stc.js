import styled from 'styled-components';
import {device} from '../../../../theme'

export const FooterMenuWrap = styled.ul `
    display: flex;
    padding: 0;
    list-style: none;
    margin: 0 -30px;
    @media ${device.small}{
        flex-direction: column;
        margin: 0 -10px;
        margin-top: 10vw;
    }
`;

export const FooterMenuList = styled.li `
    margin: 0 30px;
    @media ${device.large}{
        margin: 0 12px;
    }
    @media ${device.medium}{
        margin: 0 10px;
    }
    a{
        color: #fff;
        font-weight: 400;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: 0.4s ease-in-out;
        opacity: 0.7;
        @media ${device.medium}{
            font-size: 10px;
        }
        &:hover{
            opacity: 1;
        }
    }
`;