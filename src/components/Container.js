import React from 'react';
import Topmusic from './Topmusic';
import Header from './Header';
import Search from './Search';
import Content from './Content';
export default class Container extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="container">
				<Topmusic musicList={this.props.musicList} callback={this.props.callback} />
				<Header />
				<Content />
			</div>
		);
	}
}