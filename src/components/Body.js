import React from 'react';
import styled from 'styled-components';

import { TopBar, Artists, Songs, Genres, Player } from './';

const Body = () => {
    return (
        <Style>
            <TopBar />
            <Artists />
            <section>
                <Songs />
                <Genres />
            </section>
            <Player />
        </Style>
    )
}

export default Body;

const Style = styled.div`
    background: #1A1C22;
    height: 100%;
    padding: 20px 50px;
    color: #5E6062;

    section {
        display: grid;
        grid-gap: 20px;
        grid-template-areas:
            'songs songs genres';
    }
`