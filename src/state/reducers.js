const initial_state = {
    app_name : 'App',
    nav : 'explore'
}

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'NAV': {
            return { ...state, nav : action.payload.to };
        }
        default:
            return state;
    }
}

export default reducer;