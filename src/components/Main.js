import React, { Component,Children } from 'react';
import Router from 'react-router';
import Back from './Back';
import Container from './Container';
import Playlist from './Playlist';
import TopOrBottom from './TopOrBottom';

const musicList = [
	{
		'id':0,
		'song':'Should It Matter - Sissel',
		'src':'http://musicdata.baidu.com/data2/music/138388313/138388313.mp3'
	},
	{
		'id':1,
		'song':'Almost Lover - A Fine Frenzy',
		'src':'http://musicdata.baidu.com//data2/music/42195111/42195111.mp3'
	},
	{
		'id':2,
		'song':'莫失莫忘 - 纯音乐',
		'src':'http://musicdata.baidu.com//data2/music/240285620/240285620.mp3'
	}
];

// const REQUEST_URL = 'http://music.163.com/api/playlist/detail?id=73097868&updateTime=-1';

export default class Main extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentMusicKey:musicList[0].id,
			currentMusic:musicList[0].src
		};
	}

	callback(state){
		this.setState(state);
		this.refs.playlist.setState(state);
	}

	listCallback(state){
		this.setState({
			currentMusicKey:musicList[state.rel].id,
			currentMusic:musicList[state.rel].src
		});
	}

	render(){
		return (
			<div id="components">
				<Back />
				<Container musicList={musicList} callback={this.callback.bind(this)} />
				<Playlist musicList={musicList} listCallback={this.listCallback.bind(this)} ref="playlist" ParentState={this.state} />
				<TopOrBottom />
			</div>
		);
	}
}