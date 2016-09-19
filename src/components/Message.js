// Message.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import message from 'semantic-ui-css/components/message.css';
import classNames from 'classnames';

const CLASSNAME = 'message';

export default class Mesage extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
			
		let header;
		if(this.props.header) {
			header = <div className="header">{this.props.header}</div>
		}

		let text;
		if(this.props.text) {
			text = <p>{this.props.text}</p>
		}
						
		return (
			<div className={componentClass}>
				{header}
				{text}
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