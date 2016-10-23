import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';

import classNames from 'classnames';

const CLASSNAME = 'accordion';

export default class Reveal extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render(){
		let componentClass = this.getClassName();

		if(this.props.styled) {
				componentClass = classNames(componentClass, 'fade');
		}

		if(this.props.fluid) {
				componentClass = classNames(componentClass, 'fluid');
		}

		if(this.props.invented) {
				componentClass = classNames(componentClass, 'invented');
		}

		return (
			<div className={componentClass}
				ref={(ref) => this.component = ref}>
                {this.props.children}
            </div>
		);

	}

}



Accordion.propTypes = {
	styled : PropTypes.bool,
	fluid : PropTypes.bool,
	invented : PropTypes.bool,
}
