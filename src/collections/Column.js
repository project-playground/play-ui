// Column.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import classNames from 'classnames';

const CLASSNAME = 'column';
const COLUMNS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];

export default class Column extends UIComponent {
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
			componentClass = classNames(componentClass, COLUMNS[this.props.column - 1] + ' wide column');
		}

		if(this.props.floated) {
			componentClass = classNames(componentClass, this.props.floated + ' floated');
		}
		
		if(this.props.align) {
			componentClass = classNames(componentClass, this.props.align + ' aligned');
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

Column.propTypes = {
	column: PropTypes.number,
	floated: PropTypes.oneOf(['left', 'right']),
	align: PropTypes.oneOf(['left', 'center', 'right']),
	only: PropTypes.oneOf(['computer', 'tablet', 'mobile']),
}