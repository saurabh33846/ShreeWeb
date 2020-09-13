const defaultState = {
    user: null,
    busy: false
}
function reducer(state = defaultState, action ) {
    switch( action.type) {
        case "SET-USER" : return {
            ...state,
            user: action.payload.user
        }
        case "SET-BUSY" : return {
            ...state,
            busy: action.payload.busy
        }
        default: return state;
    }
}
export default reducer;