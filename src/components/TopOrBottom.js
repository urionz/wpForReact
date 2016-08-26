import React from 'react';
import $ from 'jquery';
export default class TopOrBottom extends React.Component{
	constructor(props){
		super(props);
	}
	_goToTop(){
		$('html,body').animate({scrollTop:0},800);
	}

	_goToBottom(){
		$('html,body').animate({scrollTop:$(document).height()-$(window).height()},800);
	}

	render(){
		return (
			<div id="TopOrBottom">
				<div id="gototop" onClick={this._goToTop.bind(this)} className="colorTipContainer black">
					<i className="fa fa-chevron-up"></i>
					<span className="colorTip">到顶部
						<span className="pointyTipShadow"></span>
						<span className="pointyTip"></span>
					</span>
				</div>
				<div id="gotobottom" onClick={this._goToBottom.bind(this)} className="colorTipContainer black">
					<i className="fa fa-chevron-down"></i>
					<span className="colorTip">到底部
						<span className="pointyTipShadow"></span>
						<span className="pointyTip"></span>
					</span>
				</div>
			</div>
		);
	}
}