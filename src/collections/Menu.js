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
		if(this.props.sub) {
			return CLASSNAME;
		} else {
			return classNames(super.getClassName(), CLASSNAME);
		}
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

		if(this.props.align) {
			componentClass = classNames(componentClass, 'right');
		}
		
		if(this.props.inverted) {
			componentClass = classNames(componentClass, 'inverted');
		}

		return (
			<div className={componentClass}
				ref={(ref) => this.component = ref}>
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
	align: PropTypes.oneOf(['right']),
	inverted: PropTypes.bool,
}

Menu.defaultProps = {
	type: 'basic',
	pointing: false,
	vertical: false,
}
