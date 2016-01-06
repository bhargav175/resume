import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

function simpleReducer(state={}){
	return state;
}
const rootReducer = combineReducers({
    simpleReducer,
    routing: routeReducer
});

export default rootReducer;