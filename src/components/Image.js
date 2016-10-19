// Image.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';

import classNames from 'classnames';

const CLASSNAME = 'image';

export default class Image extends UIComponent {
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

        if(this.props.state) {
            componentClass = classNames(componentClass, this.props.state);
        }

        if(this.props.avatar) {
            componentClass = classNames(componentClass, 'avatar');
        }

        if(this.props.bordered) {
            componentClass = classNames(componentClass, 'bordered');
        }

        if(this.props.fluid) {
            componentClass = classNames(componentClass, 'fluid');
        }

        if(this.props.shape) {
            componentClass = classNames(componentClass, this.props.shape);
        }

        if(this.props.valign) {
            componentClass = classNames(componentClass, this.props.valign + ' aligned');
        }

        if(this.props.align) {
            componentClass = classNames(componentClass, this.props.align);
        }

        if(this.props.floated) {
            componentClass = classNames(componentClass, this.props.floated + ' floated');
        }

		return (
			<img 
                className={componentClass} 
                src={this.props.src} 
                ref={(ref) => this.component = ref}/>
		);
	}
}

Image.propTypes = {
	src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    state: PropTypes.oneOf(['hidden', 'disabled']),
    avatar: PropTypes.bool,
    bordered: PropTypes.bool,
    fluid: PropTypes.bool,
    shape: PropTypes.oneOf(['rounded', 'circular']),
    valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
    align: PropTypes.oneOf(['centered', 'spaced']),
    floated: PropTypes.oneOf(['left', 'right']),
}

