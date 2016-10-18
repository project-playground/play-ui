// List.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import Item from '../collections/Item';
import list from 'semantic-ui-css/components/list.css';
import classNames from 'classnames';

const CLASSNAME = 'list';

export default class List extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {

		let listClass = this.getClassName();
		if(this.props.relaxed) {
			listClass = classNames(listClass, this.props.relaxed);
		}

		if(this.props.divided) {
			listClass = classNames(listClass, this.props.divided);
		}

		if(this.props.bulleted) {
			listClass = classNames(listClass, 'bulleted');
		}

		if(this.props.ordered) {
			listClass = classNames(listClass, 'ordered');
		}

		if(this.props.horizontal) {
			listClass = classNames(listClass, 'horizontal');
		}

		if(this.props.link) {
			listClass = classNames(listClass, 'link');
		}

		if(this.props.aligned) {
			listClass = classNames(listClass, this.props.aligned)
		}

		if(this.props.selection) {
			listClass = classNames(listClass, 'selection');
		}

		if(this.props.animated) {
			listClass = classNames(listClass, 'animated');
		}

		if(this.props.size) {
			listClass = classNames(listClass, this.props.size);
		}

		if(this.props.floated) {
			listClass = classNames(listClass, this.props.floated);
		}
		
		if(this.props.childlist) {
			listClass = 'list';
		}

		return (
			<div className={listClass}>
        		{this.props.children}
			</div>
		);
	};
}

List.propTypes = {
	bulleted: PropTypes.bool,
	ordered: PropTypes.bool,
	horizontal: PropTypes.bool,
	link: PropTypes.bool,
	selection: PropTypes.bool,
	animated: PropTypes.bool,
	childlist: PropTypes.bool,
	divided: PropTypes.oneOf(['divided', 'celled']),
	relaxed: PropTypes.oneOf(['relaxed', 'very relaxed']),
	size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']),
	aligned: PropTypes.oneOf(['top', 'middle', 'bottom'])
}
