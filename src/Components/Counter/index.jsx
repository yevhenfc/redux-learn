import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions'

function Counter(props) {
  return (
    <>
       <h1>{props.value}</h1> 
       <button onClick={props.add}>Add</button>
       <button onClick={props.sub}>Sub</button>
    </>
  )
}

const mapActions = (dispatch) => {
    return{
        add: () => dispatch(actionCreators.add()),
        sub: () => dispatch(actionCreators.sub()),
    }
};

const mapStates = (state) => {
  // const {value} = state;  
  // return {value};
  state.counterReducer
} 

export default connect(mapStates, mapActions) (Counter); 