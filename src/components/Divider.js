// Divider.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import Icon from './Icon';
import classNames from 'classnames';

const CLASSNAME = 'divider';

export default class Divider extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();

		if(this.props.type) {
			if(this.props.type === 'horizontal' && this.props.header) {
				componentClass = classNames(componentClass, this.props.type);
			}
		}

		if(this.props.hidden) {
			componentClass = classNames(componentClass, 'hidden');
		}

		if(this.props.fitted) {
			componentClass = classNames(componentClass, 'fitted');
		}

		if(this.props.section) {
			componentClass = classNames(componentClass, 'section');
		}

		let result;
		if(this.props.header) {
			componentClass = classNames(componentClass, 'header');
			let title;
			let icon;
			if(typeof this.props.header === 'string') {
				title = this.props.header;
			} else {
				title = this.props.header.title;
				if(this.props.header.icon) {
					icon = <Icon icon={this.props.header.icon} />;
				}
			}
			result = <h4 className={componentClass}>{icon}{title}</h4>;
		} else {
			result = <div className={componentClass}></div>
		}

		return result;
	};
}

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
