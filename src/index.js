import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Main from './components/Main';


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById('root')
);