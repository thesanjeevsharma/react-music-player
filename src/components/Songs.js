import React from 'react';
import styled from 'styled-components';

const Song = ({ index, data }) => {
    return (
        <div className="song">
            <div className="left">
                <span className="number">
                #{ index }
                </span>
                <span className="song-img">
                    <img src={ data.img }/>
                </span>
                <span className="song-title">
                    { data.title }
                </span>
                <span className="song-artist">
                    { data.artist }
                </span>
            </div>
            <div className="right">
                <span className="song-length">
                    { data.length }
                </span>
                <span className="actions">
                    <i className="fas fa-ellipsis-v" />
                </span>
            </div>
        </div>
    )
}

const Songs = () => {

    const [songs, setSongs] = React.useState([]);
    React.useEffect(() => {
        ( async() => {
            const response = await fetch('/songs', {
                method : 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const res = await response.json();
            setSongs(res);
        })();
    }, []);

    return (
        <Style>
            <div className="heading">
                Popular
            </div>
            <div className="songs">
                {
                    songs.map((song, index) => <Song key={ song.id } data={ song } index={ index + 1 }/>)
                }
                
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
            margin-bottom: 10px;
            transition: .2s ease;
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
                }
            }

            .right {
                grid-area: right;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            &:hover {
                color: #fff;
                cursor: pointer;
            }
            
        }
    }
`