import * as actionTypes from './actionTypes';

export const saveResult = (res,value) =>{
    return {
        type: actionTypes.STORE_RESULT,
        result:res,
        value:value

    };
}

export const storeResult = (res,value) =>{
    return dispatch => {
        setTimeout( () =>{
            dispatch(saveResult(res,value));
        },2000);
    }   
};

export const deleteResult = (resEID) =>{
    return {
        type: actionTypes.DELETE_RESULT,
        resultElid:resEID
    };
};