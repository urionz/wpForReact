import React from 'react';
import Postheader from './Postheader';
import Postcontent from './Postcontent';
export default class Content extends React.Component{
	render(){
		return (
			<div id="main">
				<div id="content" className="content">
					<div className="post-2154 post type-post status-publish format-aside hentry category-phpjs category--phpjs tag-js tag-210 post_format-post-format-aside" id="post-2154">
						<Postcontent />
						<div className="clear"></div>
					</div>
				</div>
				<div className="pagenavi">
					<div id="pagination">
						<a href={"javascript:;"}>加载更多文章</a>
					</div>
				</div>
				<div id="footer">
					<span className="footi">
							© 2014&nbsp;<a href={"javascript:;"}>一个梦 </a>| Elegant由<a href={"javascript:;"} target="_blank">Wordpress</a>驱动.
					</span>
				</div>
			</div>
		)
	}
}