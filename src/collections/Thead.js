// Thead.js
import React, { Component, PropTypes  } from 'react';

import classNames from 'classnames';

export default class Thead extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let componentClass = '';
		let extProps = {};

		if(componentClass) {
			extProps.className = componentClass;
		}
		
		return (
			<thead {...extProps}>
				{this.props.children}
			</thead>
		);
	};
}

