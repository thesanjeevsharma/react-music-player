import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TopBar = () => {

    const global = useSelector(state => state);

    return (
        <Style>
            <div className="search">
                <i className="fas fa-search" />
                <input type="text" placeholder="Search music"/>
            </div>
            <div className="actions">
                Hi, { global.user.name }
                <i className="fas fa-ellipsis-v" />
            </div>
        </Style>
    )
}

export default TopBar;

const Style = styled.div`
    display: grid;
    align-items: baseline;
    grid-template-areas:
        'search search . actions';

    .search {
        grid-area: search;
        align-items: baseline;

        i {
            margin-right: 15px;
        }

        input {
            background: none;
            outline: none;
            border: none;
            font-size: 1.1rem;
            color: #fff;
            border-bottom: 1px solid #1A1C22;
            transition: .2s ease;
            width: 400px;

            &:focus {
                border-color: #fff;
            }
        }
    }

    .actions {
        grid-area: actions;

        i {
            margin-left: 15px;

            &:hover {
                cursor: pointer;
                color: #fff;
            }
        }
    }
`