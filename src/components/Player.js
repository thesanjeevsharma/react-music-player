import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Player = () => {

    const dispatch = useDispatch();
    const { player } = useSelector(state => state);
    const [song, setSong] = React.useState({});
    const [controls, setControls] = React.useState({ play : false, volume : 0.5 });
    const [track, setTrack] = React.useState(undefined);
    const [time, setTime] = React.useState({ current : 0, total : 1 });
    let timer;

    const clock = () => {
        timer = setInterval(() => {
            if (track && controls.play) setTime({ current : Math.floor(track.currentTime), total : Math.floor(track.duration) });
        }, 1000);
    }

    React.useEffect(() => {
        if (track) {
            track.pause();
            setControls({ ...controls, play : false });
        }
        (async () => {
            try {
                const response = await fetch(`/songs/${ player.song.id }`, {
                    method : 'GET',
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                });
                const res = await response.json();
                setSong(res);
                setTrack(new Audio(res.url));
                setControls({ ...controls, play : true });
            } catch (e) {
                console.log(e);
            }
        })();
    }, [player.song.id]);

    React.useEffect(() => {
        if (track) {
            if (controls.play) {
                track.play();
            } else {
                track.pause();
            }
        }
    }, [controls.play])

    React.useEffect(() => {
        if (track) {
            track.volume = controls.volume;
        }
    }, [controls.volume])

    React.useEffect(() => {
        clock();
        return () => {
            clearInterval(timer);
        }
    }, [track, controls.play])

    React.useEffect(() => {
        return () => {
            setTrack(undefined);
        };
    }, []);

    return (
        <Style progress={ !track ? '0' : (time.current / time.total) * 100 }>
            <div className="controls">
                <i className="fas fa-backward" onClick={ () => dispatch({ type : 'PREV_SONG' }) }/>
                <i className={ controls.play ? 'fas fa-pause' : 'hide' } onClick={ () => setControls({ ...controls, play : false }) }/>
                <i className={ controls.play ? 'hide' : 'fas fa-play' } onClick={ () => setControls({ ...controls, play : true }) }/>
                <i className="fas fa-forward" onClick={ () => dispatch({ type : 'NEXT_SONG' }) }/>
                <i className={ controls.volume ? 'fas fa-volume-up' : 'hide' } onClick={ () => setControls({ ...controls, volume : 0 }) }/>
                <i className={ controls.volume ? 'hide' : 'fas fa-volume-mute' } onClick={ () => setControls({ ...controls, volume : 0.5 }) }/>
            </div>
            <div className="song">
                <span className="song-img">
                    <img src={ song.img } />
                </span>
                <span className="song-title">
                    { song.title }
                </span>
                <span className="song-artist">
                    { song.artist }
                </span>
            </div>
            <div className="progress">
                <span className="current-time">
                    { 
                        time.current < 60 ?
                        (
                            '00:' + (time.current < 10 ? '0' + time.current : time.current)
                        )
                        :
                        (
                            '0' + Math.floor(time.current / 60) + ':' +( time.current - (Math.floor(time.current / 60) * 60))
                        )
                    }
                </span>
                <span className="progress-bg">
                    <span className="progress-bar"></span>
                </span>
                <span className="total-time">
                    { 
                        '0' + Math.floor(time.total / 60) + ':' + (time.total - (Math.floor(time.total / 60) * 60)) 
                    }
                </span>
            </div>
        </Style>
    );
}

export default Player;

const Style = styled.div(
    ({ progress }) => css`
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

            &.hide {
                display: none;
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
                height: 2px;
                background: #1E35CD;
                width: ${ progress }%;
                box-shadow: 0 0 10px 2px #1E35CD;
            }
        }
    }
    `
);