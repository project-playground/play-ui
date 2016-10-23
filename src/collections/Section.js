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

		let result;
		
		if(componentClass) {
			extProps.className = componentClass;
		}

		if (this.props.active) {
			extProps.className = classNames(extProps.className, 'active');
		}

		if (this.props.linkTo) {
			result = <a {...extProps} href={this.props.linkTo}>{text}</a>;
		} else {
			result = <div {...extProps}>{text}</div>;
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
