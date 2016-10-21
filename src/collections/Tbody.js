// Tbody.js
import React, { Component, PropTypes  } from 'react';

import classNames from 'classnames';

export default class Tbody extends Component {
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
			<tbody {...extProps}>
				{this.props.children}
			</tbody>
		);
	};
}

