import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import classNames from 'classnames';

import homeView from './views/HomeView';
import buttonView from './views/ButtonView';
import labelView from './views/LabelView';
import inputView from './views/InputView';
import labeledInputView from './views/LabeledInputView';

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentView: ''
		};
		// for access Index in eventMethod
		this.handleClick = this.handleClick.bind(this);
		this.getMenuActiveState = this.getMenuActiveState.bind(this);
	}
	
	componentWillMount() {
		this.changeLocation();
	}

	changeLocation() {
		const path = this.props.location.pathname.split('/');
		const currentView = path[path.length - 1];
		this.setState({ currentView });
	}
	
	handleClick(event) {
		this.setState({ currentView: event.target.getAttribute('href') });
	}
	
	getMenuActiveState(link) {
		let classes = 'item';
		if(this.state.currentView === link) {
			classes += ' active';
		}
		return classes;
	}
	
	render() {
		return (
			<div className="ui container">
				<div className="ui inverted segment">
					<div className="ui inverted secondary pointing menu">
						<Link className={this.getMenuActiveState('home')} to="home" onClick={this.handleClick}>Home</Link>
						<Link className={this.getMenuActiveState('button')} to="button" onClick={this.handleClick}>Button</Link>
						<Link className={this.getMenuActiveState('label')} to="label" onClick={this.handleClick}>Label</Link>
						<Link className={this.getMenuActiveState('input')} to="input" onClick={this.handleClick}>Input</Link>
						<Link className={this.getMenuActiveState('labeledInput')} to="labeledInput" onClick={this.handleClick}>LabeledInput</Link>
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
			<Route path="labeledInput" component={labeledInputView} />
		</Route>
	</Router>,
	document.getElementById('root')
);
