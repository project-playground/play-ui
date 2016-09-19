// Menu.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import menu from 'semantic-ui-css/components/menu.css';
import classNames from 'classnames';

const CLASSNAME = 'menu';

export default class Menu extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		
		if(this.props.type && this.props.type != 'basic') {
			componentClass = classNames(componentClass, this.props.type);
		}
		
		if(this.props.pointing) {
			componentClass = classNames(componentClass, 'pointing');
		}
		
		if(this.props.attached) {
			componentClass = classNames(componentClass, this.props.attached + ' attached');
		}
		
		if(this.props.vertical) {
			componentClass = classNames(componentClass, 'vertical');
		}
		
		return (
			<div className={componentClass}>
				{this.props.children}
			</div>
		);
	};
}


Menu.propTypes = {
	type: PropTypes.oneOf(['basic', 'secondary', 'tabular', 'text', 'pagination']),
	pointing: PropTypes.bool,
	secondary: PropTypes.bool,
	attached: PropTypes.oneOf(['top', 'bottom']),
	vertical: PropTypes.bool,
}

Menu.defaultProps = {
	type: 'basic',
	pointing: false,
	vertical: false,
}
