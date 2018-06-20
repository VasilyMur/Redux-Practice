import { createStore } from 'redux';

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    console.log('Reducer Running: ', action)

    switch(action.type) {
        case 'INCREMENT' :
            const incState = {...state, count: state.count + 1}
            return incState;

        case 'DECREMENT' :
            const decState = {...state, count: state.count - 1}
            return decState;

        default:
            return state;
    }

}

const store = createStore(reducer);


export default store;