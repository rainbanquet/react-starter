import { combineReducers } 	from 'redux'

import TestReducer  from '../../module/Test/TestReducer.js';
import Test2Reducer from '../../module/Test2/Test2Reducer.js';

const rootReducer = combineReducers({
	Test : TestReducer,
	Test2: Test2Reducer,
})

export default rootReducer