import React from 'react';
import styled from 'styled-components';

const Song = ({ data }) => {
    return (
        <div className="song">
            <div className="left">
                <span className="number">
                #{ data.index }
                </span>
                <span className="song-img">
                    <img src={ require('../assets/img/lana.jpg') }/>
                </span>
                <span className="song-title">
                    { data.song.title }
                </span>
            </div>
            <div className="right">
                <span className="song-length">
                    { data.song.length }
                </span>
                <span className="actions">
                    <i className="fas fa-ellipsis-v" />
                </span>
            </div>
        </div>
    )
}

const Songs = () => {
    return (
        <Style>
            <div className="heading">
                Popular
            </div>
            <div className="songs">
                <Song data={ { index : 1, song : { img : '../assets/img/lana.jpg', title : 'Love', length : '2:34' } } }/>
            </div>
        </Style>
    )
}

export default Songs;

const Style = styled.div`
    grid-area: songs;

    .heading {
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .songs {

        .song {
            background: #25262C;
            padding: 5px 10px;
            border-radius: 5px;
            display: grid;
            grid-template-areas:
                'left left . right'; 

            .left {
                grid-area: left;
                display: flex;
                align-items: center;
                
                .number {
                    min-width: 40px;
                }
    
                .song-img {
                    width: 50px;
                    height: 50px;
                    overflow: hidden;
                    border-radius: 5px;
    
                    img {
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                        user-drag: none; 
                        user-select: none;
                        -moz-user-select: none;
                        -webkit-user-drag: none;
                        -webkit-user-select: none;
                        -ms-user-select: none;
                    }
                }
    
                .song-title {
                    margin-left: 20px;
                }
            }

            .right {
                grid-area: right;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
        }
    }
`