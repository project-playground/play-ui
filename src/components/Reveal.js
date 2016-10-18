// Reveal.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';

import classNames from 'classnames';

const CLASSNAME = 'reveal';

export default class Reveal extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();

        if(this.props.fade) {
            componentClass = classNames(componentClass, 'fade');
        }

        if(this.props.move) {
            if(this.props.move === 'left') {
                componentClass = classNames(componentClass, 'move');
            } else {
                componentClass = classNames(componentClass, this.props.move + ' move');
            }
        }

        if(this.props.state) {
            componentClass = classNames(componentClass, this.props.state);
        }

		return (
			<div className={componentClass}>
                {this.props.children}
            </div>
		);
	}
}

Reveal.propTypes = {
    fade: PropTypes.bool,
    move: PropTypes.oneOf(['left', 'right', 'up', 'down']),
    state: PropTypes.oneOf(['active', 'disabled']),
}

