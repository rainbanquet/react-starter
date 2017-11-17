import{
    BTN_TEST_SWITCH,
}from './TestDispatch.js'

const init_state = {
	btn_test: false,
}
export default function TestReducer(state = init_state, action){
  	switch (action.type) {
  		case BTN_TEST_SWITCH:{
  			return {...state, btn_test: !state.btn_test}
  		}
  		default:
  			return state;
  	}
}