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
		
		if(this.props.basic) {
			componentClass = classNames(componentClass, 'basic');
		}
		
		if(this.props.size) {
			componentClass = classNames(componentClass, this.props.size);
		}
		
		let icon;
		let rightIcon;
		if(this.props.icon) {
			if (this.props.iconPos == 'right') {
				rightIcon = <i className={classNames('icon', this.props.icon)} />
			} else {
				icon = <i className={classNames('icon', this.props.icon)} />
			}
		}
		
		if(this.props.tag) {
			componentClass = classNames(componentClass, 'tag');
		}
		
		if(this.props.floating) {
			componentClass = classNames(componentClass, 'floating');
		}
		
		if(this.props.circular) {
			componentClass = classNames(componentClass, 'circular');
		}
		
		if(this.props.colored) {
			componentClass = classNames(componentClass, this.props.colored);
		}
		
		return (
			<div className={componentClass}>
				{icon}
				{this.props.text}
				{rightIcon}
			</div>
		)
	};
}

Label.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.string,
	size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
	basic: PropTypes.bool,
	colored: PropTypes.oneOf(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'brown', 'pink', 'grey', 'black'])
}