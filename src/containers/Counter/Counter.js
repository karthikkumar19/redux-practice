import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAdditionCounter}  />
                <CounterControl label="Subtract 15" clicked={  this.props.onSubtractioncounter} />
                <hr></hr>
                <button onClick={this.props.StoreResults}>Store Results</button>
                <ul>
                    {this.props.results.map(strResult => (
                                        <li onClick={ () => this.props.DeleteResults(strResult.id)} key={strResult.id}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr:state.counter,
        results:state.result
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter:() => dispatch({type: 'DECREMENT'}),
        onAdditionCounter : () => dispatch({type:'ADDITION' , value:10}),
        onSubtractioncounter : () => dispatch({type: 'SUBTRACTION', value: 15}),
        StoreResults : () => dispatch({type: 'STORE_RESULTS'}),
        DeleteResults : (id) => dispatch({type:'DELETE_RESULT', resultElId: id})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);