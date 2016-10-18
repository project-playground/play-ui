// Table.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import classNames from 'classnames';

const CLASSNAME = 'table';

export default class Table extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		let sections;
		

		if(this.props.section.length>0) {
			let sectionClass = 'section';
			if(this.props.section.active) {
				sectionClass = classNames(sectionClass, 'active');
			}
			sections.push('<div class="'+sectionClass+'">'+this.props.sections[i].to+'</div>');
		}

		if(this.props.size) {
			componentClass = classNames(componentClass, this.props.size);
		}
		
		return (
			<div className={componentClass}>
				{this.props.section}
				{this.props.divider}
			</div>
		)
	};
}

Table.propTypes = {
	celled: PropTypes.bool,
	singleLine: PropTypes.bool,
	fixed: PropTypes.bool,
	padded: PropTypes.oneOf([
		'padded', 'very padded'
	]),
	colllapsing: PropTypes.bool,
	striped: PropTypes.bool,
	definition: PropTypes.bool,
	structured: PropTypes.bool,
	stackable: PropTypes.oneOf([
		'unstackable', 'tablet', 'mobile'
	]),
	selectable: PropTypes.bool,
	inverted: PropTypes.bool,
	basic: PropTypes.oneOf([
		'basic', 'very basic'
	]),
	column: PropTypes.number,
	colored: PropTypes.oneOf([
		'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'brown', 'pink', 'grey', 'black'
	]),
	sortable: PropTypes.bool,
	compact: PropTypes.oneOf([
		'compact', 'very compact'
	]),
	size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
}

Table.Thead = {
	fullWidth: PropType.bool
}

Table.Tbody = {

}

Table.Tfoot = {

}

Table.Tr = {
	state: PropTypes.oneOf([
		'positive', 'negative', 'error', 'warning', 'active', 'disabled'
	]),
	align: PropTypes.oneOf([
		'left', 'center', 'right'
	])
}

Table.Th = {
	state: PropTypes.oneOf([
		'positive', 'negative', 'error', 'warning', 'active', 'disabled'
	]),
	align: PropTypes.oneOf([
		'left', 'center', 'right'
	]),
	column: PropTypes.number
}

Table.Td = {
	state: PropTypes.oneOf([
		'positive', 'negative', 'error', 'warning', 'active', 'disabled'
	]),
	selectable: PropTypes.bool,
	align: PropTypes.oneOf([
		'left', 'center', 'right'
	]),
	colllapsing: PropTypes.bool
}
