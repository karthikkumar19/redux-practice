import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../store/actions';

class Counter extends Component {
    state = {
        counter: 0,
        value:''
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
      }

    render () {
        
        return (
            <div>
                <CounterOutput value={this.props.ctr}  />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAdditionCounter}  />
                <CounterControl label="Subtract 15" clicked={  this.props.onSubtractioncounter} />
                <hr></hr>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={() => this.props.StoreResults(this.props.ctr, this.state.value)}>Store Results</button>
                <ul>
                    {this.props.results.map(strResult => (
                                        <li onClick={ () => this.props.DeleteResults(strResult.id)} key={strResult.id}>{strResult.value} {strResult.secvalue}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr:state.ctr.counter,
        results:state.res.result,
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter:() => dispatch({type: actionTypes.DECREMENT}),
        onAdditionCounter : () => dispatch({type:actionTypes.ADD , value:10}),
        onSubtractioncounter : () => dispatch({type: actionTypes.SUBTRACT, value: 15}),
        StoreResults : (result,value) => dispatch({type: actionTypes.STORE_RESULT, result:result, value:value}),
        DeleteResults : (id) => dispatch({type:actionTypes.DELETE_RESULT, resultElId: id}),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);