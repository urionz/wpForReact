import React, { Component,Children } from 'react';

export default class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			searchFrmClass:'search-form'
		};
	}
	_handleClick(className){
		this.setState({
			searchFrmClass:className
		});
	}
	render(){
		return (
			<div id="headerContainer">
				<div className="topmenucon">
					<div className="topmenu">
						<ul id="menu-m" className="menu">
							<li id="menu-item-1004" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1004">
								<a href={"javascript:;"}><i className="fa fa-home"></i>首页</a>
							</li>
							<li id="menu-item-1008" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1008">
								<a href={"javascript:;"}><i className="fa fa-comments-o"></i>留言</a>
							</li>
							<li id="menu-item-1566" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1566">
								<a href={"javascript:;"}><i className="fa fa-info"></i>关于</a>
							</li>
						</ul>
					</div>
					<i id="psearch" className="fa fa-search right" onClick={this._handleClick.bind(this,'search-form active')}></i>
					<div className="clear"></div>
				</div>
				<form role="search" method="get" id="searchform" className={this.state.searchFrmClass} action={"http://wpbest.cc/"}>
					<span id="search-form-close" onClick={this._handleClick.bind(this,'search-form')}>×</span>
					<input type="text" name="s" id="search-input-s" className="search-input" placeholder="站内搜索" />
				</form>
			</div>
		);
	}
}