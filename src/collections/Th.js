// Th.js
import React, { Component, PropTypes  } from 'react';

import classNames from 'classnames';

const COLUMNS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];

export default class Th extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let componentClass = '';
		let extProps = {};

		if(this.props.colspan) {
			extProps.colSpan = this.props.colspan;
		}

		if(this.props.rowspan) {
			extProps.rowSpan = this.props.rowspan;
		}

		if(this.props.aligned) {
			componentClass = classNames(componentClass, this.props.aligned + ' aligned');
		}

		if(this.props.column) {
			componentClass = classNames(componentClass, COLUMNS[this.props.column - 1] + ' wide column');
		}

		if(componentClass) {
			extProps.className = componentClass;
		}
		
		return (
			<th {...extProps}>
				{this.props.children}
			</th>
		);
	};
}

Th.propTypes = {
	colspan: PropTypes.number,
	rowspan: PropTypes.number,
	aligned: PropTypes.oneOf(['left', 'center', 'right']),
}
