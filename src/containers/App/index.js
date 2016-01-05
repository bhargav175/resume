import React, {Component} from 'react';
import {connect} from 'react-redux';


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
		return <div className="root">
				
			</div>;
	}
};

function select(state){
	return state;
};

export default connect(select)(App);

