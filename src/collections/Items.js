import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import classNames from 'classnames';

const CLASSNAME = 'items';

export default class Items extends UIComponent {
  constructor(props) {
    super(props);
  }

  getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
    let componentClass = this.getClassName();

		return (
			<div className={componentClass}>
          {this.props.children}
      </div>
		);
	}
}
