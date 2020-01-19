import React from 'react';
import styled from 'styled-components';

const Artists = () => {
    return (
        <Style>
            <div className="heading">
                Explore new
            </div>
            <div className="carousel">
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/lana.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Lana Del Rey
                        </div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/eminem.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Eminem
                        </div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/lana.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Lana Del Rey
                        </div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/eminem.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Eminem
                        </div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/lana.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Lana Del Rey
                        </div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/eminem.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Eminem
                        </div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/lana.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Lana Del Rey
                        </div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/eminem.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Eminem
                        </div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/lana.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Lana Del Rey
                        </div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/eminem.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Eminem
                        </div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/lana.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Lana Del Rey
                        </div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-img">
                        <img src={ require('../assets/img/eminem.jpg') }/>
                    </div>
                    <div className="tile-content">
                        <div className="name">
                            Eminem
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default Artists;

const Style = styled.div`
    margin-bottom: 50px;

    .heading {
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .carousel {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        scroll-direction: horizontal;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;

        .tile {
            width: 150px;
            margin-right: 20px;
            flex: 0 0 auto; 

            .tile-img {
                width: 150px;
                height: 150px;
                overflow: hidden;
                border-radius: 20px;
                margin-bottom: 5px;

                img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    transition: .5s ease;
                    user-drag: none; 
                    user-select: none;
                    -moz-user-select: none;
                    -webkit-user-drag: none;
                    -webkit-user-select: none;
                    -ms-user-select: none;
                }
            }

            .tile-content {
                color: #fff;

                .name {
                    text-align: center;
                }
            }

            &:hover {
                cursor: pointer;

                img {
                    transform: scale(1.2);
                }
            }
        }
    }
`