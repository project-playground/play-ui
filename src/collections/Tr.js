// Tr.js
import React, { Component, PropTypes  } from 'react';

import classNames from 'classnames';

export default class Tr extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let componentClass = '';
		let extProps = {};

		if(this.props.state) {
			componentClass = classNames(componentClass, this.props.state);
		}

		if(this.props.valigned) {
			componentClass = classNames(componentClass, this.props.valigned + ' aligned');
		}

		if(componentClass) {
			extProps.className = componentClass;
		}

		return (
			<tr {...extProps}>
				{this.props.children}
			</tr>
		);
	};
}

Tr.propTypes = {
	state: PropTypes.oneOf(['positive', 'negative', 'warning', 'error', 'active', 'disabled']),
	valigned: PropTypes.oneOf(['top', 'middle', 'bottom']),
}

