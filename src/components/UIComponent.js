// UIComponent.js
import React, { Component, PropTypes  } from 'react';
import semantic from 'semantic-ui-css/semantic.min.css';
import icon from 'semantic-ui-css/components/icon.css';
import classNames from 'classnames';

const CLASSNAME = 'ui';

/**
 * UIComponent
 */
export default class UIComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() { return CLASSNAME; }

	componentWillMount() {};
	componentDidMount() {};
	componentWillReceiveProps(nextProps) {};
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	componentWillUpdate(nextProps, nextState) {};
	componentDidUpdate(prevProps, prevState) {};
	componentWillUnMount() {};

}

