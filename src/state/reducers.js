const initial_state = {
    app_name : 'App',
    nav : 'explore',
    user : {
        name : 'Sanjeev'
    },
    player : {
        song : {
            id : 3
        },
        active : false
    }
}

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'NAV': {
            return { ...state, nav : action.payload.to };
        }
        case 'PLAY_SONG': {
            return { ...state, player : { ...action.payload } };
        }
        case 'NEXT_SONG': {
            return { ...state, player : { ...state.player, song : { id : state.player.song.id === 5 ? 0 : state.player.song.id + 1 } } };
        }
        case 'PREV_SONG': {
            return { ...state, player : { ...state.player, song : { id : state.player.song.id === 0 ? 5 : state.player.song.id - 1 } } };
        }
        default:
            return state;
    }
}

export default reducer;