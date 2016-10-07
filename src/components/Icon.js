// Icon.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';

import classNames from 'classnames';

const CLASSNAME = 'icon';

export default class Icon extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		
		if(this.props.icon) {
			componentClass = classNames(componentClass, this.props.icon);
		}
		
		return (
			<i className={componentClass}></i>
		);
	}
}

Icon.propTypes = {
	icon: PropTypes.string,
}

