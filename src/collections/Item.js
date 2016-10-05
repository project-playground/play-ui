// Item.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import classNames from 'classnames';

const CLASSNAME = 'item';

export default class Item extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();

		if(this.props.header) {
			componentClass = classNames(componentClass, this.props.header);
		}

		let icon;
		if(this.props.icon) {
			icon = <i className={classNames(this.props.icon, 'icon')} />;
		}

		let description;
		if(this.props.description) {
			description = <span className="description">{this.props.description}</span>;
		}

		return (
			<div className={componentClass}>
				{icon}
				{description}
				{this.props.text}
				{this.props.children}
			</div>
		);
	};
}

Item.propTypes = {
	text: PropTypes.string,
	header: PropTypes.string,
	icon: PropTypes.string,
	description: PropTypes.string
}

/*
Item.defaultProps = {

}
*/
