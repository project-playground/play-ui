// Dropdown.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import Icon from '../components/Icon';
import Item from '../collections/Item';
import Menu from '../collections/Menu';

import dropdown from 'semantic-ui-css/components/dropdown.min.css';
import classNames from 'classnames';

const CLASSNAME = 'dropdown';

export default class Dropdown extends UIComponent {
	constructor(props) {
		super(props);
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	componentWillMount() {
		/*
		this.props.children.map(function(child, i) {
			console.log(i, child);
			if(child.type === Item) {
				console.log('Item!!!!!');
			} else {
				console.log('Not Item!!!!!', child.type);
			}
		});
		*/
	}

	componentDidMount() {
		$(this.component).dropdown();
	}

	render() {
		let componentClass = this.getClassName();
		let textClass = 'text';

		let dataInput;
		if(this.props.type && this.props.type !== 'default') {
			componentClass = classNames(componentClass, this.props.type);
			if(!this.props.name)
				throw new Error('name is required at selection type in dropdown');

			textClass = classNames(textClass, 'default');
			dataInput = <input type="hidden" name={this.props.name} />;
		}

		let search;
		if(this.props.search) {
			componentClass = classNames(componentClass, 'search');
		}

		let multiple;
		if(this.props.multiple) {
			componentClass = classNames(componentClass, 'multiple');
		}

		return (
			<div className={componentClass}
				ref={(ref) => this.component = ref}>
				{dataInput}
				<div className={textClass}>{this.props.text}</div>
				<Icon icon="dropdown"/>
				<Menu>
					{this.props.children}
				</Menu>
			</div>
		);
	}
}

Dropdown.propTypes = {
	type: PropTypes.oneOf(['default', 'selection']),
	name: PropTypes.string,
	text: PropTypes.string,
	search: PropTypes.bool,
	multiple: PropTypes.bool,
};

Dropdown.defaultProps = {
	type: 'default',
};
