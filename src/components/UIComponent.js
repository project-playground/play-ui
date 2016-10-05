// UIComponent.js
import React, { Component, PropTypes  } from 'react';

import { jQuery } from 'jquery';
import semantic from 'semantic-ui-css/semantic.min.css';
import semanticjs from 'semantic-ui-css/semantic.min.js';
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

	getClassName() { 
		let renderClassName = CLASSNAME;
		/* if(this.props.state) {
			renderClassName = classNames(renderClassName, this.props.state);
		} */
		return renderClassName;
	}

	componentWillMount() {
		// Step I. children type check
		if(this.props.children && this.childrenTypes) {
			let childrenTypes = this.childrenTypes();
			this.props.children.map(
				(child) => {
					console.log(typeof(child))
					let result = childrenTypes.find(
						(value) => 
							(child.type === value) ? true : false
					);
					if(result === undefined) {
						console.log(this);
						throw new Error('Not allowed child "' + child.type.name + '" at ' + this.constructor.name + ' component');
					}
				});
		}
		
		if(this.willMount) { this.willMount(); }
	};
	componentDidMount() {
		// TODO implement componentDidMount
		
		if(this.didMount) { this.didMount(); }
	};
	componentWillReceiveProps(nextProps) {
		// TODO implement componentWillReceiveProps
		
		if(this.willReceiveProps) { this.willReceiveProps(nextProps); }
	};
	shouldComponentUpdate(nextProps, nextState) {
		// TODO implement shouldComponentUpdate
		
		if(this.shouldUpdate) { return this.shouldUpdate(nextProps, nextState); }
		else return true;
	}
	componentWillUpdate(nextProps, nextState) {
		// TODO implement componentWillUpdate
		
		if(this.willUpdate) { this.willUpdate(nextProps, nextState); }
	};
	componentDidUpdate(prevProps, prevState) {
		// TODO implement componentDidUpdate
		
		if(this.didUpdate) { this.didUpdate(prevProps, prevState); }
	};
	componentWillUnMount() {
		// TODO implement componentWillUnMount
				
		if(this.willUnMount) { this.willUnMount(); }
	};

}

