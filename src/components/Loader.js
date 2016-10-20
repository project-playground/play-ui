// Loader.js
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
		let loaderClass = classNames(super.getClassName(), "segment"); 
	    let loaderContent;
    let overLap;
    let overLapClass = classNames(super.getClassName(), "active dimmer");

    let textLoader;
    if(this.props.text) {
      textLoader = this.props.text;
      componentClass = classNames(componentClass, "text");
    }

    if(this.props.overLap) {

      if(this.props.inverted) {
        overLapClass = classNames(super.getClassName(), "active inverted dimmer");
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
        componentClass = classNames(componentClass, "active centered inline");
      }

      loaderContent = <div className={overLapClass}><div className={componentClass}>{textLoader}</div></div>

    } else {
    	
      if(this.props.inverted) {
      	componentClass = classNames(componentClass, "inverted");
      	loaderClass = classNames(loaderClass, "inverted");
      }
      
      if(this.props.dimmer) {
      	componentClass = classNames(this.getClassName());
      	loaderClass = classNames(super.getClassName(), "segment"); 
      }
      
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
			<div className={loaderClass}
				ref={(ref) => this.component = ref}>
		        {loaderContent}
		        {this.props.children}
			</div>
		);
	};
}

Loader.propTypes = {
	text: PropTypes.string,
	overLap: PropTypes.bool,
	inverted: PropTypes.bool,
	dimmer: PropTypes.bool,
	inline: PropTypes.bool,
	inlineCenter: PropTypes.bool,
	size: PropTypes.oneOf(['mini','tiny','small','medium','large','big','huge','massive']),
	state: PropTypes.oneOf(['active', 'disabled','indeterminate'])
}

