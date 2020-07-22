import styled from 'styled-components'
import {device} from '../../../theme'

export const ClientWrap = styled.li `
    flex-basis: 50%;
    text-align: center;
    height: 214px;
    line-height: 214px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    @media ${device.small}{
        height: 150px;
        line-height: 150px;
    }
    a{
        display: block;
        &:hover{
            background-color: #fff;
            transform: scale(1.1);
            img{
                opacity: 1;
            }
        }
        img{
            opacity: 0.7;
            transition: 0.3s;
            max-height: 110px;
            max-width: 150px;
            @media ${device.small}{
                max-height: 70px;
                max-width: 70px;
            }
        }
    }
`;