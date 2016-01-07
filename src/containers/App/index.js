import React, {Component} from 'react';
import {connect} from 'react-redux';
import Appbar from '../../components/Appbar';
import HeaderStrip from '../../components/HeaderStrip';


require('./style.scss');

class App extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		const {dispatch} = this.props;
		//dispatch(fetchAllWords());
	}
	
	render(){
		return <div className="app">
				<HeaderStrip/>
				<Appbar path={this.props.routing.path}/>
				{this.props.children}
			</div>;
	}
};

function select(state){
	return state;
};

export default connect(select)(App);

