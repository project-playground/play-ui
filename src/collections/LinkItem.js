// MenuItem.js
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Item from './Item';
import Icon from '../components/Icon';
import classNames from 'classnames';

export default class LinkItem extends Item {
	constructor(props) {
		super(props);
		this.state = {
			'to': this.props.to
		};
		this.handleClick = this.handleClick.bind(this);
	}

	getClassName() {
		return super.getClassName();
	}

	handleClick(event) {
		if(!this.state.to) {
			event.preventDefault();
			return false;
		}
	}

	render() {
		let componentClass = this.getClassName();

		if(this.props.state) {
			componentClass = classNames(componentClass, this.props.state);
		}

		let icon;
		if(this.props.icon) {
			icon = <Icon icon={this.props.icon} />;
		}

		return (
			<Link className={componentClass} to={this.props.to} onClick={this.handleClick}>
				{icon}
				{this.props.text}
				{this.props.children}
			</Link>
		);
	};
}


LinkItem.propTypes = {
	state: PropTypes.oneOf(['active']),
	icon: PropTypes.string,
	to: PropTypes.string.isRequired,
}

LinkItem.defaultProps = {
	to: ''
}
/*
MenuItem.defaultProps = {

}
*/
