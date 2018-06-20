import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>I'm the Counter</h2>
                <p>Count: {this.props.count}</p>
                <button onClick={this.props.onIncrementClick}>Increment</button>
                <button onClick={this.props.onDecrementClick}>Decrement</button>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: () => {
            const action = { type: 'INCREMENT' };
            dispatch(action);
        },
        onDecrementClick: () => {
            const action = { type: 'DECREMENT' };
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);