// Button.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import button from 'semantic-ui-css/components/button.css';
//import icon from 'semantic-ui-css/components/icon.css';
import classNames from 'classnames';

const CLASSNAME = 'button';

export default class Button extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), 'button');
	}

/*
	componentWillMount() {};
	componentDidMount() {};
	componentWillReceiveProps(nextProps) {};
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	componentWillUpdate(nextProps, nextState) {};
	componentDidUpdate(prevProps, prevState) {};
	componentWillUnMount() {};
*/
	render() {
		let componentClass = this.getClassName();
		let iconButton;
		if(this.props.icon) {
			let iconClass = classNames('icon', this.props.icon);
			iconButton = <i className={iconClass} />
		}

		if(this.props.emphasis) {
			componentClass = classNames(componentClass, this.props.emphasis);
		}

		return (
			<button className={componentClass}>
				{iconButton}
				{this.props.text}
				{this.props.children}
			</button>
		)
	};
}

