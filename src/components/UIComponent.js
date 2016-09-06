// UIComponent.js
import React, { Component, PropTypes  } from 'react';
import semantic from 'semantic-ui-css/semantic.min.css';
import icon from 'semantic-ui-css/components/icon.css';
import classNames from 'classnames';

/**
 * UIComponent
 */
export default class UIComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
//		this.state.className = className(this.state.className, CLASSNAME);
	}

	getClassName() { return 'ui'; }

	componentWillMount() { console.log(this); };
	componentDidMount() {};
	componentWillReceiveProps(nextProps) {};
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	componentWillUpdate(nextProps, nextState) {};
	componentDidUpdate(prevProps, prevState) {};
	componentWillUnMount() {};

}

