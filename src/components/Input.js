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
		
		let icon;
		if(this.props.icon) {
			if(typeof this.props.icon === 'string') {
				componentClass = classNames(componentClass, 'icon');
				icon = <i className={classNames('icon', this.props.icon)} />;
			} else {
				if(this.props.icon.align) {
					componentClass = classNames(componentClass, this.props.icon.align);
				}
	
				componentClass = classNames(componentClass, 'icon');
				icon = <i className={classNames('icon', this.props.icon.icon)} />;
			}
		}
		
		let result;
		if(this.props.isContained) {
			result = <input type={this.props.type} placeholder={this.props.placeholder} defaultValue={this.props.value} />;
		} else {
			if(this.props.transparent) {
				componentClass = classNames(componentClass, 'transparent');
			}			
			
			result = <div className={componentClass}>
				<input type={this.props.type} placeholder={this.props.placeholder} defaultValue={this.props.value} />
				{icon}
			</div>;
		}
		
		return result;
	};
}

Input.propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	icon: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.shape({
			icon: PropTypes.string.isRequired,
			align: PropTypes.oneOf(['left', 'right']),
		})
	])
}
