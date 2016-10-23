// Icon.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';

import classNames from 'classnames';

const CLASSNAME = 'content';

export default class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return CLASSNAME;
	}

	render() {
		let componentClass = this.getClassName();

    if(this.props.state) {
      componentClass = classNames(this.getClassName(), this.props.state);
    }

		if(this.props.title) {
      componentClass = classNames(this.getClassName(), this.props.title);
    }

		return (
      <div className={componentClass}>
        {this.props.children}
      </div>
		);
	}
}

Content.propTypes = {
    state: PropTypes.oneOf(['visible', 'hidden', 'active', ' ']),
		title: PropTypes.string,
};
