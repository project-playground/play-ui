// Message.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import Icon from './Icon';
import message from 'semantic-ui-css/components/message.css';
import classNames from 'classnames';

const CLASSNAME = 'message';

export default class Message extends UIComponent {
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
		let content;
		if(this.props.icon) {
			componentClass = classNames(componentClass, "icon");
			icon = <Icon icon={this.props.icon} />

			content = <div className="content">{header}{text}</div>

		} else {
			content = <span>{header}{text}</span>;
		}

		if(this.props.close) {
			close = <i className="close icon"></i>
		}

		if(this.props.hidden) {
			componentClass = classNames(componentClass, "hidden");
		}

		if(this.props.visible) {
			componentClass = classNames(componentClass, "visible");
		}
		{/*priority hidden > visible*/}

		if(this.props.floating) {
			componentClass = classNames(componentClass, "floating");
		}

		if(this.props.compact) {
			componentClass = classNames(componentClass, "compact");
		}

		if(this.props.level) {
			componentClass = classNames(componentClass, this.props.level)
		}

		if(this.props.colored) {
			componentClass = classNames(componentClass, this.props.colored)
		}
		{/*colored > level priority*/}

		if(this.props.size) {
			componentClass = classNames(componentClass, this.props.size)
		}
		
		if(this.props.attached) {
			if(this.props.attached === 'attached')
				componentClass = classNames(componentClass, this.props.attached)
			else
				componentClass = classNames(componentClass, this.props.attached + ' attached');
		}

		return (
			<div className={componentClass}
				ref={(ref) => this.component = ref}>
				{icon}
				{close}
				{content}
			</div>
		);
	};
}

Message.propTypes = {
	header: PropTypes.string,
	text: PropTypes.string,
	icon: PropTypes.string,
	close: PropTypes.bool,
	hidden: PropTypes.bool,
	visible: PropTypes.bool,
	level: PropTypes.oneOf(['warning', 'info', 'positive', 'success', 'negative', 'error']),
	colored: PropTypes.oneOf(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'black']),
	attached: PropTypes.oneOf(['attached', 'top', 'bottom']),
}
