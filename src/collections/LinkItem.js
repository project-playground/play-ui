// MenuItem.js
import React, { Component, PropTypes  } from 'react';
import Item from '../collections/Item';
import classNames from 'classnames';

export default class LinkItem extends Item {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return super.getClassName();
	}

	render() {
		let componentClass = this.getClassName();

		if(this.props.state) {
			componentClass = classNames(componentClass, this.props.state);
		}

		let icon;
		if(this.props.icon) {
			icon = <i className={classNames(this.props.icon, 'icon')} />;
		}

		return (
			<a className={componentClass}>
				{icon}
				{this.props.text}
				{this.props.children}
			</a>
		);
	};
}


LinkItem.propTypes = {
	state: PropTypes.oneOf(['active']),
	icon: PropTypes.string
}
/*
MenuItem.defaultProps = {

}
*/
