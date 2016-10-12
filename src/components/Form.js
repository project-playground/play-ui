// Form.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import Icon from './Icon';
import message from 'semantic-ui-css/components/form.css';
import classNames from 'classnames';

const CLASSNAME = 'form';

export default class Form extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();


		return (
			<form className={componentClass}>

			</form>
		);
	};
}
/*
Form.propTypes = {
	header: PropTypes.string,
	text: PropTypes.string,
	icon: PropTypes.string,
	close: PropTypes.bool,
	hidden: PropTypes.bool,
	visible: PropTypes.bool,
	level: PropTypes.oneOf(['warning', 'info', 'positive', 'success', 'negative', 'error']),
	colored: PropTypes.oneOf(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'black'])
}
*/
