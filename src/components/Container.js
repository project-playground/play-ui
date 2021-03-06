// Container.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import classNames from 'classnames';

const CLASSNAME = 'container';

export default class Container extends UIComponent {
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
				{...this.props.children}
			</div>
		)
	};
}
