import React from 'react';
import $ from 'jquery';
export default class Playlist extends React.Component{
	constructor(props){
		super(props);
		this.state = this.props.ParentState;
		
	}

	componentDidMount(){
		let play_list = $('#play-list');
		setTimeout(function(){
			play_list.stop().animate({opacity:0},400);
			setTimeout(function(){
				play_list.hide();
			},400);
		},10000);
	}

	openMusicList(){
		let play_list = $('#play-list');
		if(play_list.css('display') == 'none'){
			play_list.show();
			play_list.stop().animate({opacity:1},400);
		}else{
			play_list.stop().animate({opacity:0},400);
			setTimeout(function(){
				play_list.hide();
			},400);
		}
	}

	_listCallback(rel){
		this.props.listCallback({rel:rel});
	}

	render(){
		let musicNameDOM = this.props.musicList.map(function(item){
			if(this.state.currentMusicKey == item.id){
				return (
					<span rel={item.id} key={item.id} onClick={this._listCallback.bind(this,item.id)} className="list-current">{item.song}</span>
				);
			}else{
				return (
					<span rel={item.id} key={item.id} onClick={this._listCallback.bind(this,item.id)} >{item.song}</span>
				);
			}
		},this);//歌曲列表

		return (
			<div id="playList">
				<div id="play-list" style={{bottom: '195px'}}>
					<div className="list-wrap">
						{musicNameDOM}
					</div>
				</div>
				<div id="clistplay" onClick={this.openMusicList.bind(this)} className="clistplay colorTipContainer black">
					<i className="fa fa-music"></i>
					<span className="colorTip" style={{marginLeft: '-43px', display: 'none'}}>音乐列表开关
						<span className="pointyTipShadow"></span>
						<span className="pointyTip"></span>
					</span>
				</div>
			</div>
		);
	}
}