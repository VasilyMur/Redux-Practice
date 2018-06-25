import React from 'react';
import { connect } from 'react-redux';

import { TransitionGroup, CSSTransition } from 'react-transition-group';



class Counter extends React.Component {

    componentDidMount = () =>{
        const localStorageRef = localStorage.getItem('number');
        this.props.onReload(localStorageRef);
    }

    componentDidUpdate = () => {
        console.log(this.props.count)
        console.log('IT UPDATED!!!')
        localStorage.setItem('number', this.props.count)
    }


    render() {
        return (
            <React.Fragment>
                <h2>I'm the Counter</h2>
 
                    <p>Count: 
                        <TransitionGroup component="span" className="count">
                            <CSSTransition classNames="count" timeout={{ enter: 200, exit: 200 }} key={this.props.count}>
                                <span>{this.props.count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        </p>
    
                <button onClick={this.props.onIncrementClick}>Increment</button>
                <button onClick={this.props.onDecrementClick}>Decrement</button>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
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
        },

        onReload: (number) => {
            const action = { type: 'ON_RELOAD', number: parseFloat(number) };
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);