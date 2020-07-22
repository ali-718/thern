import styled, {css} from 'styled-components';
import {Link} from 'gatsby'
import {device} from '../../theme'

export const ProjectWrapper = styled.div `
    margin-top: ${props => props.mt};
    ${props => props.responsive && css `
        ${props => props.responsive.medium && css `
            @media ${device.medium}{
                margin-top: ${props => props.responsive.medium.mt};
            }
        `};
    `}
`;
  
export const Thumb = styled.div `
    position: relative;
    z-index: 2;
    margin-left: -50px;
    display: inline-block;
    margin-bottom: 46px;
    width: 100%;
    max-width: 1062px;
    @media ${device.xlarge} {
        margin-left: 0;
        width: 100%;
    }
    @media ${device.small}{
        margin-bottom: 30px;
    }
    @media ${device.xsmall}{
        margin-bottom: 25px;
    }
    a{
        display: block;
    }
    img{
        border-radius: 5px;
        @media ${device.xlarge}{
            width: 100%;
        }
    }
`;

export const ProjectBtnWrap = styled.div `
    position: absolute !important;
    right: -65px;
    bottom: 0;
    @media ${device.medium}{
        right: 0;
    }
`;

export const ProjectBtn = styled(Link) `
    background: ${props => props.theme.colors.primary};
    width: 130px;
    display: block;
    height: 70px;
    color: ${props => props.theme.colors.white};
    text-align: center;
    line-height: 75px;
    font-size: 36px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    @media ${device.small}{
        width: 70px;
        height: 45px;
        line-height: 55px;
        font-size: 12px;
        border-radius: 0px;
    }
    i{
        color: #ffffff;
        transition: all .4s;
        z-index: 5;
        display: inline-block;
        @media ${device.small}{
            font-size: 20px;
        }
    }
    &:before{
        top: 0;
        content: '';
        height: 100%;
        position: absolute;
        left: 0;
        width: 0;
        z-index: 1;
        transition: all .4s;
        background: rgba(255,255,255,0.5);
    }
    &:hover{
        &:before{
            animation: slide-effect .7s cubic-bezier(.70,.15,.340,.870) both;
            width: 100%;
        }
        i{
            transform: translateX(10px);
        }
    }
`;


export const ProjectType = styled.div `
    flex-basis: 33.33%;
    @media ${device.small}{
        flex-basis: 100%;
        padding: 15px 0;
    }
    @media ${device.xsmall}{
        padding: 10px 0;
    }
`;
