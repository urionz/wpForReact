import React from 'react';
export default class Search extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<form role="search" method="get" id="searchform" className="search-form" action={"http://wpbest.cc/"}>
				<span id="search-form-close">×</span>
				<input type="text" name="s" id="search-input-s" className="search-input" value="" placeholder="站内搜索" />
			</form>
		);
	}
}