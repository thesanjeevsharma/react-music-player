import React from 'react';
import styled from 'styled-components';

const Player = () => {

    // Calculations TBD
    const [track] = React.useState({ current_time : 143, total_time : 215 });

    return (
        <Style progress={ Math.floor((track.current_time / track.total_time) * 100) }>
            <div className="controls">
                <i className="fas fa-backward" />
                <i className="fas fa-pause" />
                <i className="fas fa-forward" />
                <i className="fas fa-volume-down" />
            </div>
            <div className="song">
                <span className="song-img">
                    <img src="/assets/img/ekali.jpg" />
                </span>
                <span className="song-title">
                    Crashing
                </span>
                <span className="song-artist">
                    Ekali
                </span>
            </div>
            <div className="progress">
                <span className="current-time">
                    02:23
                </span>
                <span className="progress-bg">
                    <span className="progress-bar"></span>
                </span>
                <span className="total-time">
                    03:35
                </span>
            </div>
        </Style>
    );
}

export default Player;

const Style = styled.div`
    position: absolute;
    background: #0F0F0F;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 20px 50px;
    color: #fff;
    display: flex;

    .controls {
        display: flex;
        align-items: center;
        margin-right: 30px;

        i {
            margin-right: 15px;

            &:hover {
                cursor: pointer;
            }
        }
    }

    .song {
        display: flex;
        align-items: center;

        .song-img {
            width: 40px;
            height: 40px;
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
            min-width: 200px;
        }

        .song-artist {
            margin-left: 20px;
            min-width: 150px;
            color: #aaa;
        }
    }

    .progress {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        
        .progress-bg {
            width: 100%;
            height: 2px;
            margin: 0 20px;
            background: #666;
            position: relative;

            .progress-bar {
                position: absolute;
                left: 0;
                height: 100%;
                background: #1E35CD;
                width: 60%;
                box-shadow: 0 0 10px 2px #1E35CD;
            }
        }
    }
`