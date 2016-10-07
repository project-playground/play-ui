// Flag.js
import React, { Component, PropTypes  } from 'react';
import Icon from './Icon';

import classNames from 'classnames';

const CLASSNAME = 'flag';

export default class Flag extends Icon {
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
		
		return (
			<i className={componentClass}></i>
		);
	}
}

Flag.propTypes = {
	icon: PropTypes.string,
}

