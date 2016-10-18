// Item.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import Icon from '../components/Icon';
import Flag from '../components/Flag';
import Content from '../components/Content';
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

		let itemRender;
		if(!this.props.text) {
			itemRender = <div className={componentClass} data-value={this.props.value}>
				{icon}
				{image}
				{this.props.text}
				{description}
				{this.props.children}
			</div>;
		} else if(typeof(this.props.text) == 'string') {
			itemRender = <div className={componentClass} data-value={this.props.value}>
				{icon}
				{image}
				{this.props.text}
				{description}
				{this.props.children}
			</div>;
		} else {
			if(this.props.headerLink) {
				itemRender = <div className={componentClass} data-value={this.props.value}>
				{icon}
				{image}
				<Content>
					<a className="header">{this.props.text.header}</a>
					<div className="description">{this.props.text.description}</div>
					{this.props.children}
				</Content>
			</div>;
			} else {
				itemRender = <div className={componentClass} data-value={this.props.value}>
				{icon}
				{image}
				<Content>
					<div className="header">{this.props.text.header}</div>
					<div className="description">{this.props.text.description}</div>
					{this.props.children}
				</Content>
			</div>;
			}
		}

		return itemRender;
	}
}

Item.propTypes = {
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.shape({
			header: PropTypes.string.isRequired,
			description: PropTypes.string
		})
	]),
	header: PropTypes.string,
	icon: PropTypes.string,
	description: PropTypes.string,
	value: PropTypes.string,
	headerLink: PropTypes.bool
};

/*
Item.defaultProps = {

}
*/
