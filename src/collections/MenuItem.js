// MenuItem.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import classNames from 'classnames';

const CLASSNAME = 'item';

export default class MenuItem extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		
		if(this.props.state) {
			componentClass = classNames(componentClass, this.props.state);
		}
					
		return (
			<a className={componentClass}>
				{this.props.children}
			</a>
		);
	};
}


MenuItem.propTypes = {
	state: PropTypes.oneOf(['active'])
}
/*
MenuItem.defaultProps = {

}
*/