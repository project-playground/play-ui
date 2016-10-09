// Breadcrumb.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
//import breadcrumb from 'semantic-ui-css/components/breadcrumb.css';
import classNames from 'classnames';

const CLASSNAME = 'breadcrumb';

export default class Breadcrumb extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		let sections;
		

		if(this.props.section.length>0) {
			let sectionClass = 'section';
			if(this.props.section.active) {
				sectionClass = classNames(sectionClass, 'active');
			}
			sections.push('<div class="'+sectionClass+'">'+this.props.sections[i].to+'</div>');
		}

		if(this.props.size) {
			componentClass = classNames(componentClass, this.props.size);
		}
		
		return (
			<div className={componentClass}>
				{this.props.section}
				{this.props.divider}
			</div>
		)
	};
}

Breadcrumb.propTypes = {
	section: PropTypes.shape([{
		to: PropTypes.string.isRequried,
		active: PropTypes.bool
	}]),
	divider: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.icon
	]),
	size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
}

