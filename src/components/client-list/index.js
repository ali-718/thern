import React from 'react';
import PropTypes from 'prop-types';
import {Client} from './client'
import {ClientListWrap} from './client-list.stc'

const ClientList = ({children}) => {
    return <ClientListWrap>{children}</ClientListWrap>
}

ClientList.propTypes = {
    children: PropTypes.node.isRequired
}

export {Client};

export default ClientList;