import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import homeView from './views/HomeView';
import buttonView from './views/ButtonView';

export default class Index extends React.Component {
	render() {
		return (
			<div className="ui container">
				<div className="ui inverted segment">
					<div className="ui inverted secondary pointing menu">
						<a className="active item"><Link to="home">Home</Link></a>
						<a className="item"><Link to="button">Button</Link></a>
						<a className="item"><Link to="button">Label</Link></a>
						<a className="item"><Link to="button">Input</Link></a>
					</div>
				</div>
				
				{this.props.children}
			</div>			
		)
	}
}

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path="/" component={Index}>
			<IndexRoute component={homeView} />
			<Route path="home" component={homeView} />
			<Route path="button" component={buttonView} />
		</Route>
	</Router>,
	document.getElementById('root')
);
