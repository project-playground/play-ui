// Images.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';

import classNames from 'classnames';

const CLASSNAME = 'images';

export default class Images extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();

        if(this.props.size) {
            componentClass = classNames(componentClass, this.props.size);
        }

		return (
			<div className={componentClass}>
                {this.props.children}
            </div>
		);
	}
}

Images.propTypes = {
    size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
}

