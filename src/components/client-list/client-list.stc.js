import styled from 'styled-components';
import {ClientWrap} from './client/client.stc'

export const ClientListWrap = styled.ul `
    padding: 0;
    margin: 0;
    align-items: center;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    ${ClientWrap}{
        &:nth-child(5),
        &:nth-child(6){
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
    }
`;