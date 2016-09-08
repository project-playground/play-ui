// LabeledButton.js
import React, { Component, PropTypes  } from 'react';
import Button from './Button';
import classNames from 'classnames';

export default class LabeledButton extends Button {

	getClassName() {
		return classNames(super.getClassName(), 'labeled');
	}

	render() {
		//return super.render();
		var componentClass = this.getClassName();

		return (
			<div className={componentClass}>
				<Button {...this.props} />
				<a className="ui basic left pointing label">{this.props.label}</a>
			</div>
		)
	}

}

