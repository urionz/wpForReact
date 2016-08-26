import React from 'react';
import ReactDOM from 'react-dom';

export default class Back extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div id="divbg">
				<img src={"./assets/psb.jpg"} style={{height: '100%',  width: '100%'}} />
			</div>
		);
	}
}