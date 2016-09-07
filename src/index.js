import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import homeView from './views/HomeView';
import buttonView from './views/ButtonView';
import labelView from './views/LabelView';
import inputView from './views/InputView';

export default class Index extends React.Component {
	
	componentDidMount() {
	}
	
	handleClick(event) {
		console.log('click~~~', this.style);
	}
	
	render() {
		return (
			<div className="ui container">
				<div className="ui inverted segment">
					<div className="ui inverted secondary pointing menu">
						<Link className="active item" to="home" onClick={this.handleClick}>Home</Link>
						<Link className="item" to="button" onClick={this.handleClick}>Button</Link>
						<Link className="item" to="label" onClick={this.handleClick}>Label</Link>
						<Link className="item" to="input" onClick={this.handleClick}>Input</Link>
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
			<Route path="label" component={labelView} />
			<Route path="input" component={inputView} />
		</Route>
	</Router>,
	document.getElementById('root')
);
