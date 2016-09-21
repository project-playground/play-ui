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
		let close;
		let header;
		if(this.props.header) {
			header = <div className="header">{this.props.header}</div>
		}

		let text;
		if(this.props.text) {
			text = <p>{this.props.text}</p>
		}
		
		let icon;
		let iconClass;
		let content;
		if(this.props.icon) {
			iconClass = classNames(this.props.icon, "icon");
			componentClass = classNames(componentClass, "icon");
			icon = <i className={iconClass}></i>
			
			content = <div className="content">{header}{text}</div>
			
		} else {
			content = <span>{header}{text}</span>;
		}
		
		if(this.props.close) {
			close = <i className="close icon"></i>
		}
		
		if(this.props.hidden) {
			componentClass = classNames(super.getClassName(), "hidden", CLASSNAME);
		}
		
		if(this.props.visible) {
			componentClass = classNames(super.getClassName(), "visible", CLASSNAME);
		}
		
		if(this.props.floating) {
			componentClass = classNames(super.getClassName(), "floating", CLASSNAME);
		}
		
		if(this.props.compact) {
			componentClass = classNames(super.getClassName(), "compact", CLASSNAME);
		}
		
		if(this.props.level) {
			componentClass = classNames(componentClass, this.props.level)
		}
		
		if(this.props.colored) {
			componentClass = classNames(componentClass, this.props.colored)
		}
		
		if(this.props.size) {
			componentClass = classNames(componentClass, this.props.size)
		}
		
						
		return (
			<div className={componentClass}>
				{icon}
				{close}
				{content}
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