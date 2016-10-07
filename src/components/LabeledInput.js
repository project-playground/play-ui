// LabeledInput.js
import React, { Component, PropTypes  } from 'react';
import Input from './Input';
import Label from './Label';
import classNames from 'classnames';

const CLASSNAME = 'labeled';

export default class LabeledInput extends Input {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		
		if(this.props.labelicon) {
			
		}
		
		return (
			<div className={componentClass}>
				<Label {...this.props} text={this.props.label}></Label>
				<Input {...this.props} isContained="true" />
			</div>
		)
	};
}

