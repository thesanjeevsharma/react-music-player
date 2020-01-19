import React from 'react';
import styled from 'styled-components';

import { TopBar, Artists } from './';

const Body = () => {
    return (
        <Style>
            <TopBar />
            <Artists />
        </Style>
    )
}

export default Body;

const Style = styled.div`
    background: #1A1C22;
    height: 100%;
    padding: 20px 50px;
    color: #5E6062;
`