// Section.js
import React, { Component, PropTypes  } from 'react';

import classNames from 'classnames';

const COLUMNS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'Sectionirteen', 'fourteen', 'fifteen', 'sixteen'];

export default class Section extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let componentClass = 'section';
		let extProps = {};
		let text = this.props.text;
		
		if(componentClass) {
			extProps.className = componentClass;
		}

		if (this.props.active) {
			extProps.className = 'active';
		}

		return (
			<div {...extProps}>
				{text}
			</div>
		);
	};
}

Section.propTypes = {
	text: PropTypes.string.isRequired,
	linkTo: PropTypes.string,
	active: PropTypes.bool
}
