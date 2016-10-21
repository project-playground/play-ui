// Segment.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import Header from './Header';

import segment from 'semantic-ui-css/components/segment.css';
import classNames from 'classnames';

const CLASSNAME = 'segment';

export default class Segment extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		
		if(this.props.raised) {
			componentClass = classNames(componentClass, 'raised');
		}

		if(this.props.stacked) {
			componentClass = classNames(componentClass, 'stacked');
		}

		if(this.props.piled) {
			componentClass = classNames(componentClass, 'piled');
		}

		let header;
		if(this.props.header) {
			header = (
				<Header size={4} text={this.props.header} />	
			);
		}

		if(this.props.compact) {
			componentClass = classNames(coponentClass, 'compact');
		}

		if(this.props.padded) {
			componentClass = classNames(componentClass, this.props.padded);
		}

		if(this.props.colored) {
			componentClass = classNames(componentClass, this.props.colored);
		}

		if(this.props.inverted) {
			componentClass = classNames(componentClass, 'inverted');
		}

		if(this.props.emphasis && this.props.emphasis == 'primary') {
			componentClass = classNames(componentClass, this.props.emphasis);
		}

		if(this.props.attached) {
			// default - only attached
			componentClass = classNames(componentClass, this.props.attached + ' attached');
		}
						
		return (
			<div className={componentClass}
				ref={(ref) => this.component = ref}>
				{header}
				{this.props.children}
			</div>
		);
	};
}

Segment.propTypes = {
	raised: PropTypes.bool,
	stacked: PropTypes.bool,
	piled: PropTypes.bool,
	header: PropTypes.string,
	compact: PropTypes.bool,
	padded: PropTypes.oneOf(['default', 'very']),
	attached: PropTypes.oneOf(['default', 'top', 'bottom']),
	colored: PropTypes.oneOf(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'brown', 'pink', 'grey', 'black']),
	emphasis: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
}

Segment.defaultProps = {
	emphasis: 'primary'
}
