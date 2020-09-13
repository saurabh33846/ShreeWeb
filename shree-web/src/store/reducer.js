const initialState = {
    user:null
}
const reducer = (state = initialState, action) => {
    if (action.type === 'SIGNIN') {

        return {
            ...state,
            counter:state.counter+1
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter+ action.value
        }
    }
    return state;
}
export default reducer;