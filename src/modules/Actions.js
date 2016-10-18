// Actions.js
import React, { Component, PropTypes  } from 'react';

export default class Modal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="actions">
                {this.props.children}
			</div>
		);
	}
}