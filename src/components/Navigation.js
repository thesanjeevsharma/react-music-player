import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Navigation = () => {

    const dispatch = useDispatch();
    const global = useSelector(state => state);

    return (
        <Style>
            <div className="app-title">
                { global.app_name }
            </div>
            <List>
                <li className={ global.nav === 'explore' ? 'active' : '' } onClick={ () => dispatch({ type : 'NAV', payload : { to : 'explore' } }) }>
                    <i className="fas fa-book-open" /> Explore 
                </li>
                <li className={ global.nav === 'suggest' ? 'active' : '' } onClick={ () => dispatch({ type : 'NAV', payload : { to : 'suggest' } }) }>
                    <i className="fas fa-lightbulb" /> Suggest 
                </li>
                <li className={ global.nav === 'charts' ? 'active' : '' } onClick={ () => dispatch({ type : 'NAV', payload : { to : 'charts' } }) }>
                    <i className="fas fa-chart-line" /> Top Charts 
                </li>
                <li className={ global.nav === 'new' ? 'active' : '' } onClick={ () => dispatch({ type : 'NAV', payload : { to : 'new' } }) }>
                    <i className="fas fa-music"/> New Stuff 
                </li>
            </List>
            <div className="section-title">
                Personal
            </div>
            <List>
                <li className={ global.nav === 'favorites' ? 'active' : '' } onClick={ () => dispatch({ type : 'NAV', payload : { to : 'favorites' } }) }>
                    <i className="fas fa-heart" /> Favorites 
                </li>
                <li className={ global.nav === 'albums' ? 'active' : '' } onClick={ () => dispatch({ type : 'NAV', payload : { to : 'albums' } }) }>
                    <i className="fas fa-compact-disc" /> Albums 
                </li>
                <li className={ global.nav === 'playlists' ? 'active' : '' } onClick={ () => dispatch({ type : 'NAV', payload : { to : 'playlists' } }) }>
                    <i className="fas fa-list" /> Playlists 
                </li>
                <li className={ global.nav === 'genres' ? 'active' : '' } onClick={ () => dispatch({ type : 'NAV', payload : { to : 'genres' } }) }>
                    <i className="fas fa-headphones-alt"/> Genres 
                </li>
            </List>
            <div className="cta">
                <i className="fas fa-plus-square" /> Create Playlist
            </div>
        </Style>
    )
}

export default Navigation;

const Style = styled.div`
    background: #0B0D13;
    height: 100%;
    padding: 20px;
    color: #C0C3CA;
    position: relative;
    
    i {
        margin-right: 10px;
        min-width: 20px;
    }

    .section-title, .app-title {
        font-weight: 300;
    }

    .cta {
        position: absolute;
        bottom: 20px;
        
        &:hover {
            color: #fff;
            cursor: pointer;
        }
    }
`

const List = styled.ul`
    list-style-type: none;
    padding-left: 15px;
    font-weight: 500;
    margin-bottom: 50px;

    li {
        padding: 5px 10px;
        border-radius: 5px;
        margin: 10px 0;

        &.active {
            background: #1E35CD;
            box-shadow: 0 0 5px 1px #1E35CD;
            color: #fff;
        }

        &:hover {
            color: #fff;
            cursor: pointer;
        }
    }
`