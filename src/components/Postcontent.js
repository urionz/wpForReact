import React from 'react';
export default class Postcontent extends React.Component{
	render(){
		return (
			<div id="PostContainer">
				<div className="post_header">
					<h4 className="site-title">
					<a href={"javascript:;"} rel="bookmark" title="3种方法实现网页自动刷新重新加载">3种方法实现网页自动刷新重新加载</a> 
					</h4>
					<p className="postmeta">
						<span className="post-date"><i className="datetime-icon"></i>2016/06/14</span> | 
						<span className="cat-links"><a href={"javascript:;"} rel="category tag">js，php，html</a>, <a href={"http://wpbest.cc/category/php%ef%bc%8cjs/%e5%bc%80%e6%ba%90-php%ef%bc%8cjs/"} rel="category tag">开源</a></span> | 
						<span className="comments-link"><a href={"http://wpbest.cc/zidongshuaxinyemian/#comments"}>评论(4)</a></span> | 
						<span className="post-views"><i className="views-icon"></i>阅读(256)</span>
					</p>
				</div>
				<div className="entry">
					<p></p>
					<p>有时候我们需要网页自动刷新，比如用户通过Ajax加载了一些东西，而此时我们通过JavaScript无法完成网页内容的修改，那么我们就需要网页自动刷新。</p>
					<div className="single-content">
						<p>大体来说，网页自动刷新有2中方法，一种是HTML的Meta标签，另外一种就是通过我们的JavaScript脚本，他们各有各的优势和缺点，这里分享给大家。</p>
						<h4 className="h4">页面自动刷新</h4>
						<pre>页面自动刷新，把如下代码加入&lt;head&gt;区域中
						&lt;meta http-equiv="refresh" content="20"&gt;</pre>
					<pre>其中20指每隔20秒刷新一次页面.
					页面自动跳转，把如下代码加入&lt;head&gt;区域中
					&lt;meta http-equiv="refresh" content="20;url=http://azfashao.com"&gt;</pre>
					<p>其中20指隔20秒后跳转到http://www.yuooi.com页面</p>
					<h4 className="h4">页面自动刷新JS版</h4>
					</div>
					<p></p>
				</div>
			</div>
		);
	}
}