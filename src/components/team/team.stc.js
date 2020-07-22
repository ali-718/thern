import styled from 'styled-components';

export const TeamThumb = styled.div `
    overflow: hidden;
    position: relative;
    img{
        transition: 0.3s !important;
        width: 100%;
    }
`;

export const TeamOverlay = styled.div ``;

export const TeamContent = styled.div `
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
`;

export const TeamWrapper = styled.div `
    margin-bottom: ${props => props.mb};
    position: relative;
    overflow: hidden;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    &:hover{
        ${TeamThumb}{
            img{
                transform: scale(1.1);
            }
        }
    }
`;