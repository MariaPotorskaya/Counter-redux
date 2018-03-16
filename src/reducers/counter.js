export default (state = [0,0,0,0], action) => {
    switch(action.type) {
        case 'INCREMENT':
            let newState = [...state];
            ++newState[action.i]
            return newState;
        default:
            return state;
    }
}