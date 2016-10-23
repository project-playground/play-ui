import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';

import classNames from 'classnames';

const CLASSNAME = 'accordion';

export default class Accordion extends UIComponent {
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
				componentClass = classNames(componentClass, 'styled');
		}

		if(this.props.fluid) {
				componentClass = classNames(componentClass, 'styled fluid');
		}

		if(this.props.invented) {
				componentClass = classNames(componentClass, 'inverted');
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
