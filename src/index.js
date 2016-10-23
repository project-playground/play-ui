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
import revealView from './views/RevealView';
import dimmerView from './views/DimmerView';
import progressView from './views/ProgressView';
import ratingView from './views/RatingView';
import popupView from './views/PopupView';
import accordionView from './views/AccordionView';

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
						<LinkItem text="Header" to="header" />
						<LinkItem text="Label" to="label" />
						<LinkItem text="Input" to="input" />
						<LinkItem text="LabeledInput" to="labeledInput" />
						<LinkItem text="Divider" to="divider" />
						<LinkItem text="Message" to="message" />
						<LinkItem text="Loader" to="loader" />
						<LinkItem text="Image" to="image" />
						<LinkItem text="Reveal" to="reveal" />
						<LinkItem text="Dimmer" to="dimmer" />
					</DropdownItem>
					<DropdownItem text="Collections">
						<LinkItem text="Grid" to="grid" />
						<LinkItem text="Menu" to="menu" />
						<LinkItem text="Dropdown" to="dropdown" />
						<LinkItem text="List" to="list" />
						<LinkItem text="Step" to="step" />
						<LinkItem text="Breadcrumb" to="breadcrumb" />
					</DropdownItem>
					<DropdownItem text="Modules">
						<LinkItem text="Dropdown" to="dropdown" />
						<LinkItem text="CheckBox" to="checkbox" />
						<LinkItem text="Modal" to="modal" />
						<LinkItem text="Progress" to="progress" />
						<LinkItem text="Rating" to="rating" />
						<LinkItem text="Popup" to="popup" />
						<LinkItem text="Accordion" to="accordion" />
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
			<Route path="modal" component={modalView} />
			<Route path="breadcrumb" component={breadcrumbView} />
			<Route path="loader" component={loaderView} />
			<Route path="list" component={listView} />
			<Route path="checkbox" component={checkboxView} />
			<Route path="image" component={imageView} />
			<Route path="reveal" component={revealView} />
			<Route path="dimmer" component={dimmerView} />
			<Route path="progress" component={progressView} />
			<Route path="rating" component={ratingView} />
			<Route path="popup" component={popupView} />
			<Route path="accordion" component={accordionView} />

			<Route path="theming" component={themingView} />
		</Route>
	</Router>,
	document.getElementById('root')
);