// Section.js
import React, { Component, PropTypes  } from 'react';

import classNames from 'classnames';

const COLUMNS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'Sectionirteen', 'fourteen', 'fifteen', 'sixteen'];

export default class Section extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let componentClass = '';
		let extProps = {};
		
		if(componentClass) {
			extProps.className = componentClass;
		}

		if (active) {
			extProps.className = 'active';
		}

		return (
			<div {...extProps}>
			</div>
		);
	};
}

Section.propTypes = {
	linkTo: PropTypes.string,
	active: PropTypes.bool
}
