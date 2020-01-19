import React from 'react';
import styled from 'styled-components';

const Genres = () => {
    return (
        <Style>
            <div className="heading">
                Mood
            </div>
            <div className="tiles">
                <div className="tile">
                    Offbeat
                </div>
                <div className="tile">
                    Romantic
                </div>
                <div className="tile">
                    EDM
                </div>
                <div className="tile">
                    Baby's Bass
                </div>
                <div className="tile">
                    Jazz
                </div>
                <div className="tile">
                    Country
                </div>
            </div>
        </Style>
    )
}

export default Genres;

const Style = styled.div`
    grid-area: genres;

    .heading {
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .tiles {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(3, 1fr);

        .tile {
            width: 100%;
            height: 120px;
            background: #25262C;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;

            &:hover {
                color: #fff;
                cursor: pointer;
            }
        
            &:nth-child(1) {
                &:hover {
                    background: #7F00FF;
                    background: -webkit-linear-gradient(to right, #E100FF, #7F00FF);
                    background: linear-gradient(to right, #E100FF, #7F00FF);
                }
            }

            &:nth-child(2) {
                &:hover {
                    background: #DA4453;
                    background: -webkit-linear-gradient(to right, #89216B, #DA4453);
                    background: linear-gradient(to right, #89216B, #DA4453);

                }
            }

            &:nth-child(3) {
                &:hover {
                    background: #0f0c29;
                    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
                    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);

                }
            }

            &:nth-child(4) {
                &:hover {
                    background: #c31432;
                    background: -webkit-linear-gradient(to right, #c31432, #240b36);
                    background: linear-gradient(to right, #c31432, #240b36);
                }
            }

            &:nth-child(5) {
                &:hover {
                    background: #283c86;
                    background: -webkit-linear-gradient(to right, #45a247, #283c86);
                    background: linear-gradient(to right, #45a247, #283c86);
                }
            }

            &:nth-child(6) {
                &:hover {
                    background: #41295a;  /* fallback for old browsers */
                    background: -webkit-linear-gradient(to right, #2F0743, #41295a);
                    background: linear-gradient(to right, #2F0743, #41295a);
                }
            }
        }
    }

`