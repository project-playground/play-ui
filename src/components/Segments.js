// Segments.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import segment from 'semantic-ui-css/components/segment.css';
import classNames from 'classnames';

const CLASSNAME = 'segments';

export default class Segments extends UIComponent {
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
			<div className={componentClass}
				ref={(ref) => this.component = ref}>
				{this.props.children}
			</div>
		);
	};
}
