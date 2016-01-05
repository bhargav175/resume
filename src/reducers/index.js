import { combineReducers } from 'redux';

function simpleReducer(state={}){
	return state;
}
const rootReducer = combineReducers({
    simpleReducer
});

export default rootReducer;