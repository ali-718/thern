import React from 'react'
import PropTypes from 'prop-types'
import {ClientWrap} from './client.stc'

export const Client = ({link, client_image, ...props}) => {
    return (
        <ClientWrap {...props}>
            <a href={link}>
                <img src={client_image.src} alt="Client"/>
            </a>
        </ClientWrap>
    )
}

Client.propTypes = {
    link: PropTypes.string,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}
