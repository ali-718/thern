import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import {device} from '../../../theme'


export const HeroArea = styled.section `
    position: relative;
    .slick-slide.slick-current .date{
        animation: fadeInUp .8s ease-in-out 0s 1 normal none running;
    }
    .slick-slide.slick-current .title{
        animation: fadeInUp 1s ease-in-out 0s 1 normal none running;
    }
    .slick-slide.slick-current .button{
        animation: fadeInUp 1.2s ease-in-out 0s 1 normal none running;
    }
    .slick-arrow{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 9;
        color: #fff;
        font-size: 20px;
        border: none;
        padding: 0;
        &.slick-disabled{
            opacity: .5;
            cursor: not-allowed;
        }
        &.slick-prev{
            left: 50px;
            @media ${device.small}{
                left: 30px;
            }
            @media ${device.xsmall}{
                left: 10px;
            }
        }
        &.slick-next{
            right: 50px;
            @media ${device.small}{
                right: 30px;
            }
            @media ${device.xsmall}{
                right: 10px;
            }
        }
    }
`;
export const SlideBg = styled(BackgroundImage) `
    width: 100%;
    height: 100%;
    position: absolute !important;
    top: 0;
    left: 0;
`;

export const SlideContent = styled.div `
    display: flex;
    align-items: center;
    position: relative;
    height: 100vh;
    min-height: 900px;
    @media ${device.xlarge}{
        min-height: 650px;
    }
    @media ${device.large}{
        min-height: 600px;
    }
`;

export const SlideNav = styled.div `
    border-bottom: 2px solid rgba(0,0,0,.6);
    margin-right: 70px;
    padding-bottom: 10px;
    position: relative;
    cursor: pointer;
    @media ${device.xlarge}{
        margin-right: 40px;
    }
`;

export const SlideNavWrap = styled.div `
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 90px;
    ${SlideNav}{
        &:after{
            position: absolute;
            content: '';
            left: 0;
            bottom: -2px;
            width: 0;
            height: 2px;
            background: #fff;
            transition: all .3s;
        }
    }
    .slick-slide{
        & > div,
        .item{
            outline: none;
        }
    }
    .slick-current{
        ${SlideNav}{
            &:after{
                width: 100%;
            }
        }
    }
    @media ${device.xlarge}{
        bottom: 40px;
    }
`;