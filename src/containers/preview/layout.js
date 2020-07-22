import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import Client from '../layout/client'
import {theme} from '../../theme';
import {GlobalCSS} from '../../assets/css/style';
import {GridCSS} from '../../assets/css/grid';
import '../../assets/fonts/themify-icons.css' 
import '../../assets/css/animation.css' 
import '../../assets/css/animate.min.css' 

const Layout = ({children}) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    useEffect(() => {
        if(!isOverlayOpen){
            document.querySelector('body').classList.remove('overlay-wrapper-open');
        }
        setIsOverlayOpen(false)
    }, [isOverlayOpen])
    return (
        <ThemeProvider theme={theme}>
            <GlobalCSS/>
            <GridCSS/>
            <Client/>
            <div id="wrpper" className="wrapper">
                {children}
            </div>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout