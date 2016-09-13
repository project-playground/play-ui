// Row.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import classNames from 'classnames';

const CLASSNAME = 'row';
const COLUMNS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];

export default class Row extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();

		if(this.props.column) {
			componentClass = classNames(componentClass, COLUMNS[this.props.column - 1] + ' column');
		}
		
		if(this.props.equalwidth) {
			componentClass = classNames(componentClass, 'equal width');
		}
		
		if(this.props.centered) {
			componentClass = classNames(componentClass, 'centered');
		}
		
		if(this.props.align) {
			componentClass = classNames(componentClass, this.props.align + ' aligned');
		}
		
		if(this.props.doubling) {
			componentClass = classNames(componentClass, 'doubling');
		}
		
		if(this.props.only) {
			componentClass = classNames(componentClass, this.props.only + ' only');
		}
		
		return (
			<div className={componentClass}>
				{this.props.children}
			</div>
		);
	};
}

Row.propTypes = {
	column: PropTypes.number,
	equalwidth: PropTypes.bool,
	centered: PropTypes.bool,
	align: PropTypes.oneOf(['left', 'center', 'right']),
	doubling: PropTypes.bool,
	only: PropTypes.oneOf(['computer', 'tablet', 'mobile']),
}

Row.defaultProps = {
	equalwidth: false,
	centered: false,
	doubling: false,
}