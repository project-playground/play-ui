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
						
		return (
			<div className={componentClass}>
				{this.props.children}
			</div>
		);
	};
}

/*
Divider.propTypes = {
	type: PropTypes.oneOf(['horizontal', 'vertical']),
	header: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			icon: PropTypes.string
		})
	]),
	hidden: PropTypes.bool,
	fitted: PropTypes.bool
}

Divider.defaultProps = {
	type: 'horizontal',
	hidden: false,
	fitted: false
}
*/