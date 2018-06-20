import { createStore } from 'redux';

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    console.log('Reducer Running: ', action)

    switch(action.type) {
        case 'INCREMENT' :
            const newState = {...state}
            newState.count = state.count + 1;
            return newState;
        default:
            return state;
        //console.log(Object.assign({}, state, { count: state.count + 1}))
    }

}

const store = createStore(reducer);




export default store;