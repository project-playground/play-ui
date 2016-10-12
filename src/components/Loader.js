// Form.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import loader from 'semantic-ui-css/components/loader.css';
import classNames from 'classnames';

const CLASSNAME = 'loader';

export default class Loader extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
    let loaderContent;
    let overLap;
    let overLapClass = classNames(super.getClassName(), "active dimmer");

    let textLoader;
    if(this.props.text) {
      textLoader = this.props.text;
    }

    if(this.props.overLap) {

      if(this.props.inverted) {
        overLapClass = classNames(overLapClass, this.props.inverted);
      }

      if(this.props.state) {
        componentClass = classNames(componentClass, this.props.state);
      }

      if(this.props.size) {
        componentClass = classNames(componentClass, this.props.size);
      }

      if(this.props.inline) {
        componentClass = classNames(componentClass, "inline");
      }

      if(this.props.inlineCenter) {
        componentClass = classNames(componentClass, "inline centered");
      }

      loaderContent = <div className={overLapClass}><div className={componentClass}>{textLoader}</div></div>

    } else {

      if(this.props.state) {
        componentClass = classNames(componentClass, this.props.state);
      }

      if(this.props.inline) {
        componentClass = classNames(componentClass, "inline");
      }

      if(this.props.inlineCenter) {
        componentClass = classNames(componentClass, "centered inline");
      }

      if(this.props.size) {
        componentClass = classNames(componentClass, this.props.size);
      }

      loaderContent = <div className={componentClass}>{textLoader}</div>;

    }

		return (
			<div className="ui segment">
        {loaderContent}
        {this.props.children}
			</div>
		);
	};
}
/*
Loader.propTypes = {
	header: PropTypes.string,
	text: PropTypes.string,
	icon: PropTypes.string,
	close: PropTypes.bool,
	hidden: PropTypes.bool,
	visible: PropTypes.bool,
	level: PropTypes.oneOf(['warning', 'info', 'positive', 'success', 'negative', 'error']),
	colored: PropTypes.oneOf(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'black'])
}
*/
