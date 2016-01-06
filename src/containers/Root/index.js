import React, {Component} from 'react';
import { Provider } from 'react-redux';
import DevTools from '../DevTools';
import App from '../App';
import About from '../About';
import Blog from '../Blog';
import Contact from '../Contact';
import { Router, Route , IndexRoute, Link} from 'react-router'
const createHistory = require('history/lib/createHashHistory');
import { syncReduxAndRouter } from 'redux-simple-router';
import reducers from '../../reducers';
import { devTools } from 'redux-devtools';
import configureStore from '../../store';
const history = createHistory();
const store = configureStore();

syncReduxAndRouter(history, store);



class Root extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <Provider store={store}>
				<div>
			    <Router history={history}>
			      <Route path="/" component={App}>
			       <IndexRoute component={About}/>
			        <Route path="blog" component={Blog}/>
			        <Route path="contact" component={Contact}/>
			      </Route>
			    </Router>
			    <DevTools>	
			   </DevTools>
			   </div>
			  </Provider>
	}
};

export default Root;

