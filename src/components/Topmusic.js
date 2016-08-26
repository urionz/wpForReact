import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Topmusic extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			musicPlay:'none',
			musicPause:'block',
			currentMusic:this.props.musicList[0].src,
			currentMusicKey:this.props.musicList[0].id
		};
	}

	/**
	 * component加载前绑定事件
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		let audioNode = ReactDOM.findDOMNode(this.refs.audio);
		audioNode.addEventListener('ended',function(){
			this._onEndedPlay(this.state.currentMusicKey);
		});
	}

	/**
	 * 上一曲控制
	 * @return {[type]} [description]
	 */
	_Prev(currentKey){
		let musicListLength = this.props.musicList.length - 1;
		if(this.props.musicList[--currentKey]){
			this.setState({
				currentMusic:this.props.musicList[currentKey].src,
				currentMusicKey:this.props.musicList[currentKey].id
			});
			this.props.callback({
				currentMusic:this.props.musicList[currentKey].src,
				currentMusicKey:this.props.musicList[currentKey].id
			});
		}else{
			this.setState({
				currentMusic:this.props.musicList[musicListLength].src,
				currentMusicKey:this.props.musicList[musicListLength].id
			});
			this.props.callback({
				currentMusic:this.props.musicList[musicListLength].src,
				currentMusicKey:this.props.musicList[musicListLength].id
			});
		}
	}

	/**
	 * 下一曲控制
	 * @param  {[type]} currentKey [description]
	 * @return {[type]}            [description]
	 */
	_Next(currentKey){
		if(this.props.musicList[++currentKey]){
			this.setState({
				currentMusic:this.props.musicList[currentKey].src,
				currentMusicKey:this.props.musicList[currentKey].id
			});
			this.props.callback({
				currentMusic:this.props.musicList[currentKey].src,
				currentMusicKey:this.props.musicList[currentKey].id
			});
		}else{
			this.setState({
				currentMusic:this.props.musicList[0].src,
				currentMusicKey:this.props.musicList[0].id
			});
			this.props.callback({
				currentMusic:this.props.musicList[0].src,
				currentMusicKey:this.props.musicList[0].id
			});
		}
		this._audioPlayCtrl();
	}

	/**
	 * 歌曲结束
	 * @param  {[type]} currentKey [description]
	 * @return {[type]}            [description]
	 */
	_onEndedPlay(currentKey){
		this._Next(currentKey);
	}

	_audioPlayCtrl(){
		let audioNode = ReactDOM.findDOMNode(this.refs.audio);
		let musicLogo = $('#logo');
		setTimeout(()=>{
			if(audioNode.paused){
				this.setState({
					musicPlay:'none',
					musicPause:'block',
					prevOrNextOpacity:'0'
				});
				musicLogo.addClass('rotate');
			}else{
				this.setState({
					musicPlay:'block',
					musicPause:'none'
				});
				musicLogo.removeClass();
			}
		},100);
	}

	/**
	 * 播放按钮点击
	 * @param  {[type]} playState [description]
	 * @return {[type]}           [description]
	 */
	_musicHandleClick(){
		let audioNode = ReactDOM.findDOMNode(this.refs.audio);
		let musicLogo = $('#logo');
		if(audioNode.paused){
			audioNode.play();
			this.setState({
				musicPlay:'none',
				musicPause:'block',
				prevOrNextOpacity:'0'
			});
			musicLogo.addClass('rotate');
		}else{
			audioNode.pause();
			this.setState({
				musicPlay:'block',
				musicPause:'none'
			});
			musicLogo.removeClass();
		}
	}

	/**
	 * 前后按钮显影藏
	 * @param  {[type]} MouseState [description]
	 * @return {[type]}            [description]
	 */
	_musicHandleHover(MouseState){
		MouseState == 'onMouseOut' &&
		$('#logo-music-prev,#logo-music-next').stop().animate({opacity:'0'},500) ||
		$('#logo-music-prev,#logo-music-next').stop().animate({opacity:'1'},500);
	}

	/**
	 * 组建渲染
	 * @return {[type]} [description]
	 */
	render(){
		return (
			<div className="logocon">
				<div id="logo" className="rotate">
					<a href={"javascript:;"} id="logolink">
						<img src={"./assets/978babf1357c9c9670869dcc2862a357.jpeg"} />
					</a>
				</div>
				<div id="sitetitle">
					<a href={"javascript:;"}>一个梦</a>
				</div>
				<div id="logo-music-name" style={{display: 'block', opacity: '0', top: '0px'}}>
					莫失莫忘 - 纯音乐
				</div>
				<div id="logo-music" onMouseEnter={this._musicHandleHover.bind(this,'onMouseOver')} onMouseLeave={this._musicHandleHover.bind(this,'onMouseOut')}>
					<div id="logo-music-prev" onClick={this._Prev.bind(this,this.state.currentMusicKey)} style={{opacity:this.state.prevOrNextOpacity}}>
						<svg className="icon-mprev" style={{width:'32px',height:'32px',fill:'#fff',opacity:'0.4'}}>
							<path d="M4 28v-24h4v11l10-10v10l10-10v22l-10-10v10l-10-10v11z"></path>
						</svg>
					</div>
					<div id="logo-music-play" onClick={this._musicHandleClick.bind(this,'play')} style={{display: this.state.musicPlay}}>
						<svg className="icon" viewBox="0 0 32 32" style={{width:'32px',height:'32px',fill:'#fff'}}>
							<path d="M6 4l20 12-20 12z"></path>
						</svg>
					</div>
					<div id="logo-music-pause" onClick={this._musicHandleClick.bind(this,'pause')} style={{display: this.state.musicPause}}>
						<svg className="icon" viewBox="0 0 32 32" style={{width:'32px',height:'32px',fill:'#fff'}}>
							<path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
						</svg>
					</div>
					<div id="logo-music-next" onClick={this._Next.bind(this,this.state.currentMusicKey)} style={{opacity:this.state.prevOrNextOpacity}}>
						<svg className="icon" style={{width:'32px',height:'32px',fill:'#fff',opacity:'0.4'}}>
							<path d="M28 4v24h-4v-11l-10 10v-10l-10 10v-22l10 10v-10l10 10v-11z"></path>
						</svg>
					</div>
				</div>
				<div id="logo_jplayer" className="jp-jplayer" style={{width: '0px', height: '0px'}}>
					<img id="jp_poster_0" style={{width: '0px', height: '0px', display: 'none'}} />
					<audio autoPlay="autoplay" ref="audio" id="jp_audio_0" preload="metadata" key={this.state.currentMusicKey} src={this.state.currentMusic}></audio>
				</div>
			</div>
		);
	}
}