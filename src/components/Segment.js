// Segment.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import segment from 'semantic-ui-css/components/segment.css';
import classNames from 'classnames';

const CLASSNAME = 'segment';

export default class Segment extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		
		if(this.props.attached) {
			componentClass = classNames(componentClass, this.props.attached + ' attached');
		}
						
		return (
			<div className={componentClass}>
				{this.props.children}
			</div>
		);
	};
}

Segment.propTypes = {
	attached: PropTypes.oneOf(['top', 'bottom']),
}

/*
Divider.defaultProps = {
	type: 'horizontal',
	hidden: false,
	fitted: false
}
*/