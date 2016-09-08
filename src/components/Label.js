// Label.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import label from 'semantic-ui-css/components/label.css';

import classNames from 'classnames';

const CLASSNAME = 'label';

export default class Label extends UIComponent {
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
				{this.props.text}
			</div>
		)
	};
}
