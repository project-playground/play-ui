// UIContainer.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import classNames from 'classnames';

export default class UIContainer extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		//return classNames(super.getClassName(), CLASSNAME);
		return super.getClassName();
	}
	
	abstractRender() {
		throw new 'abstractRender() Method must be implemented!';
	}

	render() {
		let componentClass = this.getClassName();
	
		return (
			<div className={componentClass}>
				{...this.props.children}
			</div>
		)
	};
}
