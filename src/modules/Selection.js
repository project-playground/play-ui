// Dropdown.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import Icon from '../components/Icon';
import Item from '../collections/Item';
import Menu from '../collections/Menu';

import dropdown from 'semantic-ui-css/components/dropdown.min.css';
import classNames from 'classnames';

const CLASSNAME = 'selection dropdown';

export default class Selection extends UIComponent {
	constructor(props) {
		super(props);
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	componentWillMount() {

	}

	componentDidMount() {
		$('.ui.dropdown').dropdown();
	}

	render() {
		let componentClass = this.getClassName();

		if(this.props.search) {
			componentClass = classNames(componentClass, 'search');
		}

		if(this.props.multiple) {
			componentClass = classNames(componentClass, 'multiple');
		}

		if(this.props.fluid) {
			componentClass = classNames(componentClass, 'fluid');
		}

		return (
			<div className={componentClass}>
				<input type="hidden" name={this.props.name} />
				<div className="default text">{this.props.text}</div>
				<Icon icon="dropdown"/>
				<Menu>
					{this.props.children}
				</Menu>
			</div>
		);
	}
}

Selection.propTypes = {
	name: PropTypes.string.isRequired,
	text: PropTypes.string,
	search: PropTypes.bool,
	multiple: PropTypes.bool,
};

/*
Dropdown.defaultProps = {
	type: 'default',
};
*/
