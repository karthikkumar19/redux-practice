import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState={
    result:[],   
}

const deleteResult = (state, action) => {
    const newArray = state.result.filter(result => result.id !== action.resultElId);
    return updateObject(state,{results:newArray});

}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.STORE_RESULT:
            return updateObject(state, {result: state.result.concat({id: new Date(), value: action.result, secvalue: action.value})
        })
            case actionTypes.DELETE_RESULT:
            //method:1 (array immutable)    
            // const id=2;
                // const newArray = [...state.result];
                // newArray.splice(id,1)

            //method:-2 using filter
            return deleteResult(state,action)

                
    }
    return state;
}

export default reducer;