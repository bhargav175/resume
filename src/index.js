import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import reducers from './reducers'

/*
 * Root Dev Component
*/
class Main extends React.Component{
	render(){
		return <div>Main</div>;
	}
}

class Foo extends React.Component{
	render(){
		return <div>Foo</div>;
	}
}
class Bar extends React.Component{
	render(){
		return <div>Bar</div>;
	}
}

export default Main;


const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))
const store = createStore(reducer)
const history = createHistory()

syncReduxAndRouter(history, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)