// Item.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import Icon from '../components/Icon';
import Flag from '../components/Flag';
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
			if(this.props.icon.indexOf('flag') > 0)
				icon = <Flag icon={this.props.icon} />;
			else
				icon = <Icon icon={this.props.icon} />;
		}

		let description;
		if(this.props.description) {
			description = <span className="description">{this.props.description}</span>;
		}

		let image;
		if(this.props.imgSrc) {
			image = <img className="ui mini avatar image" src={this.props.imgSrc} />;
		}

		return (
			<div className={componentClass} data-value={this.props.value}>
				{icon}
				{description}
				{image}
				{this.props.text}
				{this.props.children}
			</div>
		);
	}
}

Item.propTypes = {
	text: PropTypes.string,
	header: PropTypes.string,
	icon: PropTypes.string,
	description: PropTypes.string,
	value: PropTypes.string,
};

/*
Item.defaultProps = {

}
*/
