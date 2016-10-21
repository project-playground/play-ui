// Td.js
import React, { Component, PropTypes  } from 'react';

import classNames from 'classnames';

export default class Td extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let componentClass = '';
		let extProps = {};
		let contents = this.props.children;

		if(this.props.colspan) {
			extProps.colSpan = this.props.colspan;
		}

		if(this.props.rowspan) {
			extProps.rowSpan = this.props.rowspan;
		}

		if(this.props.collapsing) {
			componentClass = classNames(componentClass, 'collapsing');
		}

		if(this.props.aligned) {
			componentClass = classNames(componentClass, this.props.aligned + ' aligned');
		}

		if(this.props.state) {
			componentClass = classNames(componentClass, this.props.state);
		}

		if(this.props.selectable) {
			componentClass = classNames(componentClass, 'selectable');
			contents = (
				<a>{contents}</a>
			)
		}

		if(this.props.valigned) {
			componentClass = classNames(componentClass, this.props.valigned + ' aligned');
		}

		if(componentClass) {
			extProps.className = componentClass;
		}

		return (
			<td {...extProps}>
				{contents}
			</td>
		);
	};
}

Td.propTypes = {
	colspan: PropTypes.number,
	rowspan: PropTypes.number,
	collapsing: PropTypes.bool,
	aligned: PropTypes.oneOf(['left', 'center', 'right']),
	state: PropTypes.oneOf(['positive', 'negative', 'warning', 'error', 'active', 'disabled']),
	selectable: PropTypes.bool,
	valigned: PropTypes.oneOf(['top', 'middle', 'bottom']),
}