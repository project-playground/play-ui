// Input.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import input from 'semantic-ui-css/components/input.css';
import classNames from 'classnames';

const CLASSNAME = 'input';

export default class Input extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		
		return (
			<div className={componentClass}>
				<input type="text" placeholder={this.props.placeholder} />
			</div>
		)
	};
}

