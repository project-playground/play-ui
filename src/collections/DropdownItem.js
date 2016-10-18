// Item.js
import React, { Component, PropTypes  } from 'react';
import Item from '../collections/Item';
import Menu from '../collections/Menu';
import classNames from 'classnames';

const CLASSNAME = 'dropdown';

export default class DropdownItem extends Item {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

  componentDidMount() {
		$('.ui.dropdown').dropdown();
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
        <i className="dropdown icon" />
        <Menu sub={true}>
          {this.props.children}
        </Menu>
			</div>
		);
	};
}

DropdownItem.propTypes = {
	text: PropTypes.string,
	header: PropTypes.string,
	icon: PropTypes.string,
	description: PropTypes.string
}

/*
Item.defaultProps = {

}
*/
