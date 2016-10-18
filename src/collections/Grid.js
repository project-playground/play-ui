// Grid.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import grid from 'semantic-ui-css/components/grid.css';
import classNames from 'classnames';

const CLASSNAME = 'grid';
const COLUMNS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];

export default class Grid extends UIComponent {
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
		
		if(this.props.gutters) {
			componentClass = classNames(componentClass, 'relaxed');
		}
		
		if(this.props.divided) {
			componentClass = classNames(componentClass, 'divided celled');
		}
		
		if(this.props.align) {
			componentClass = classNames(componentClass, this.props.align + ' aligned');
		}
		
		if(this.props.equalwidth) {
			componentClass = classNames(componentClass, 'equal width');
		}
		
		if(this.props.centered) {
			componentClass = classNames(componentClass, 'centered');
		}
		
		if(this.props.stackable) {
			componentClass = classNames(componentClass, 'stackable');
		}

		if(this.props.color) {
			componentClass = classNames(componentClass, 'color');
		}
		
		return (
			<div className={componentClass}>
				{this.props.children}
			</div>
		);
	};
}

Grid.propTypes = {
	column: PropTypes.number,
	gutters: PropTypes.bool,
	divided: PropTypes.bool,
	align: PropTypes.oneOf(['left', 'center', 'right']),
	equalwidth: PropTypes.bool,
	centered: PropTypes.bool,
	stackable: PropTypes.bool,
	color: PropTypes.bool,
}

Grid.defaultProps = {
	gutters: false,
	divided: false,
	equalwidth: false,
	centered: false,
	stackable: false,
}
