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
			if(this.props.iconalign) {
				componentClass = classNames(componentClass, this.props.iconalign);
			}

			componentClass = classNames(componentClass, 'icon');
			icon = <i className={classNames('icon', this.props.icon)} />;
		}
		
		let result;
		if(this.props.isContained) {
			result = <input type={this.props.type} placeholder={this.props.placeholder} defaultValue={this.props.value} />;
		} else {
			result = <div className={componentClass}>
				<input type={this.props.type} placeholder={this.props.placeholder} defaultValue={this.props.value} />
				{icon}
			</div>;
		}
		
		return result;
	};
}

