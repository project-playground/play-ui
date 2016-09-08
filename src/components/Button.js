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
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		let iconButton;
		if(this.props.icon) {
			let iconClass = classNames('icon', this.props.icon);
			iconButton = <i className={iconClass} />
			if(!this.props.text) {
				componentClass = classNames(componentClass, 'icon');
			}
		}

		if(this.props.basic) {
			componentClass = classNames(componentClass, 'basic');
		}
		
		if(this.props.size) {
			// TODO size check
			componentClass = classNames(componentClass, this.props.size);
		}
		
		if(this.props.state) {
			// TODO state check
			componentClass = classNames(componentClass, this.props.state);
		}
		
		if(this.props.colored) {
			// TODO colored check
			componentClass = classNames(componentClass, this.props.colored);
		}
		
		if(this.props.compact) {
			componentClass = classNames(componentClass, 'compact');
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

