import{
    BTN_TEST_SWITCH,
}from './TestDispatch.js'

export function btnTestSwitch(){
    return function(dispatch, getState){
        
        dispatch({ type: BTN_TEST_SWITCH });
    }
}