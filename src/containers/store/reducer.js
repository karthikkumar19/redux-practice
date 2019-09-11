const initialState={
    counter:0,
    result:[]
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case 'INCREMENT':
                const newstate = Object.assign({}, state);
                newstate.counter = state.counter+1;
                return newstate;
        case 'DECREMENT':
                return{
                    ...state,
                    counter: state.counter-1
                }
        case 'ADDITION':
                return{
                    ...state,
                    counter: state.counter+action.value
                }
        case 'SUBTRACTION':
                return{
                    ...state,
                    counter: state.counter-action.value 
                }
        case 'STORE_RESULTS':
            return{
                ...state,
                result: state.result.concat({id: new Date(), value: state.counter})
            }
            case 'DELETE_RESULT':
            //method:1 (array immutable)    
            // const id=2;
                // const newArray = [...state.result];
                // newArray.splice(id,1)

            //method:-2 using filter

            const newArray = state.result.filter(result => result.id !== action.resultElId);
                return {
                    ...state,
                    result:newArray,
                    counter:0
                }
    }
    return state;
}

export default reducer;