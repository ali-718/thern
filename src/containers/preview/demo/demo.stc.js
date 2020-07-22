import styled from 'styled-components'
import {device} from '../../../theme'

export const DemoSection = styled.div `

`;

export const HomeDemo = styled.div `
    padding: 100px;
    margin-top: 130px;
    background: #0e0f11;
    @media ${device.medium}{
        padding: 80px;
        margin-top: 100px;
    }
    @media ${device.small}{
        padding: 50px 10px;
        margin-top: 80px;
    }
`;

export const TitleWrapper = styled.div `
    padding: 25px 0;
    text-align: center;
    h2{
        font-size: 42px;
    }
    h2, p{
        color: rgba(255,255,255,0.7);
    }
    &.black-text{
        h2, p{
            color: #0e0f11;
        }
    }
    @media ${device.xsmall}{
        h2{
            font-size: 25px;
        }
    }
`;

export const DemoRow = styled.div `
    display: flex;
    flex-wrap: wrap;
`;

export const DemoCol = styled.div `
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    @media ${device.large}{
        flex: 0 0 50%;
        max-width: 50%;
    }
    @media ${device.small}{
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

export const DemoItem = styled.div `
    padding: 0 50px;
    margin: 50px 0;
    @media ${device.large}{
        padding: 0 20px;
    }
    @media ${device.small}{
        padding: 0 15px;
        margin: 20px 0;
    }
    a{
        display: block;
        position: relative;
        &:hover{
            transform: translateY(-10px);
        }
    }
    span{
        display: block;
        text-align: center;
        padding: 20px 0;
        color: rgba(255,255,255,0.7);
        font-size: 20px;
        font-weight: 500;
        transition: 0.3s ease-in-out;
        letter-spacing: .20px;
        &.black-text{
            color: #0e0f11;
        }
    }
`;

export const InnerDemo = styled.div `
    padding: 100px;
    background: #fafafa;
    @media ${device.medium}{
        padding: 80px;
    }
    @media ${device.small}{
        padding: 50px 10px;
    }
`;