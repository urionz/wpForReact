import React from 'react';
export default class Postheader extends React.Component{
	render(){
		return (
			<div className="post_header">
				<h4 className="site-title">
				<a href={"javascript:;"} rel="bookmark" title="3种方法实现网页自动刷新重新加载">3种方法实现网页自动刷新重新加载</a> 
				</h4>
				<p className="postmeta">
					<span className="post-date"><i className="datetime-icon"></i>2016/06/14</span> | 
					<span className="cat-links"><a href={"javascript:;"} rel="category tag">js，php，html</a>, <a href={"javascript:;"} rel="category tag">开源</a></span> | 
					<span className="comments-link"><a href={"javascript:;"}>评论(4)</a></span> | 
					<span className="post-views"><i className="views-icon"></i>阅读(256)</span>
				</p>
			</div>
		);
	}
}