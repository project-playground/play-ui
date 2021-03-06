import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import classNames from 'classnames';
import Menu from './collections/Menu';
import Item from './collections/Item';
import LinkItem from './collections/LinkItem';
import DropdownItem from './collections/DropdownItem';

import homeView from './views/HomeView';
import buttonView from './views/ButtonView';
import labelView from './views/LabelView';
import inputView from './views/InputView';
import labeledInputView from './views/LabeledInputView';
import dividerView from './views/DividerView';
import messageView from './views/MessageView';
import gridView from './views/GridView';
import menuView from './views/MenuView';
import headerView from './views/HeaderView';
import stepView from './views/StepView';
import dropdownView from './views/DropdownView';
import imageView from './views/ImageView';

import modalView from './views/ModalView';
import breadcrumbView from './views/BreadcrumbView';
import loaderView from './views/LoaderView';
import listView from './views/ListView';
import checkboxView from './views/CheckboxView';

import themingView from './views/ThemingView';

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
				<Menu inverted={true}>
					<LinkItem text="Home" to="home" icon="home" />
					<DropdownItem text="Components">
						<LinkItem text="Button" to="button" />
						<LinkItem text="Label" to="label" />
						<LinkItem text="Input" to="input" />
						<LinkItem text="LabeledInput" to="labeledInput" />
						<LinkItem text="Divider" to="divider" />
						<LinkItem text="Message" to="message" />
						<LinkItem text="Header" to="header" />
						<LinkItem text="Image" to="image" />
						<LinkItem text="Loader" to="loader" />
						<LinkItem text="List" to="list" />
					</DropdownItem>
					<DropdownItem text="Collections">
						<LinkItem text="Grid" to="grid" />
						<LinkItem text="Menu" to="menu" />
						<LinkItem text="Dropdown" to="dropdown" />
						<LinkItem text="Step" to="step" />
						<LinkItem text="Breadcrumb" to="breadcrumb" />
					</DropdownItem>
					<DropdownItem text="Modules">
						<LinkItem text="Dropdown" to="dropdown" />
						<LinkItem text="Modal" to="modal" />
						<LinkItem text="CheckBox" to="checkbox" />
					</DropdownItem>
					<DropdownItem text="Examples">
						<LinkItem text="Theming" to="theming" />
					</DropdownItem>
					<Menu sub={true} align="right">
						<Item text="play-ui" icon="leaf"/>
					</Menu>
				</Menu>

				{this.props.children}
			</div>
		);
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
			<Route path="divider" component={dividerView} />
			<Route path="message" component={messageView} />
			<Route path="header" component={headerView} />
			<Route path="grid" component={gridView} />
			<Route path="menu" component={menuView} />
			<Route path="dropdown" component={dropdownView} />
			<Route path="step" component={stepView} />
			<Route path="image" component={imageView} />
			<Route path="modal" component={modalView} />
			<Route path="breadcrumb" component={breadcrumbView} />
			<Route path="loader" component={loaderView} />
			<Route path="list" component={listView} />
			<Route path="checkbox" component={checkboxView} />

			<Route path="theming" component={themingView} />
		</Route>
	</Router>,
	document.getElementById('root')
);

/*
				<div className="ui inverted segment">
					<div className="ui inverted secondary pointing menu">
						<Link className={this.getMenuActiveState('home')} to="home" onClick={this.handleClick}>Home</Link>
						<Link className={this.getMenuActiveState('button')} to="button" onClick={this.handleClick}>Button</Link>
						<Link className={this.getMenuActiveState('label')} to="label" onClick={this.handleClick}>Label</Link>
						<Link className={this.getMenuActiveState('input')} to="input" onClick={this.handleClick}>Input</Link>
						<Link className={this.getMenuActiveState('labeledInput')} to="labeledInput" onClick={this.handleClick}>LabeledInput</Link>
						<Link className={this.getMenuActiveState('divider')} to="divider" onClick={this.handleClick}>Divider</Link>
						<Link className={this.getMenuActiveState('message')} to="message" onClick={this.handleClick}>Message</Link>
                        <Link className={this.getMenuActiveState('header')} to="header" onClick={this.handleClick}>Header</Link>
						<Link className={this.getMenuActiveState('grid')} to="grid" onClick={this.handleClick}>Grid</Link>
						<Link className={this.getMenuActiveState('menu')} to="menu" onClick={this.handleClick}>Menu</Link>
						<Link className={this.getMenuActiveState('dropdown')} to="dropdown" onClick={this.handleClick}>Dropdown</Link>
						<Link className={this.getMenuActiveState('step')} to="step" onClick={this.handleClick}>Step</Link>
					</div>
				</div>

*/
