// Icon.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';

import classNames from 'classnames';

const CLASSNAME = 'icon';

export default class Icon extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return CLASSNAME;
	}

	render() {
		let componentClass = this.getClassName();

		if(this.props.icon) {
			componentClass = classNames(componentClass, this.props.icon);
		}

		if(this.props.size) {
			componentClass = classNames(componentClass, this.props.size);
		}

		if(this.props.colored) {
			componentClass = classNames(componentClass, this.props.colored);
		}

		return (
			<i className={componentClass}></i>
		);
	}
}

Icon.propTypes = {
	icon: PropTypes.string,
	floated: PropTypes.oneOf(['right']),
	size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
	colored: PropTypes.oneOf(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'brown', 'pink', 'grey', 'black']),
}
