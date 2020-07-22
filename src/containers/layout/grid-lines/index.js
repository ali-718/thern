import React from 'react';
import {GridLinesWrapper, GridLinesInner, GridLine} from './grid-lines.stc'

const GridLines = () => {
    return (
        <GridLinesWrapper>
            <GridLinesInner>
                <GridLine></GridLine>
                <GridLine></GridLine>
                <GridLine></GridLine>
                <GridLine></GridLine>
                <GridLine></GridLine>
                <GridLine></GridLine>
            </GridLinesInner>
        </GridLinesWrapper>
    )        
}

export default GridLines