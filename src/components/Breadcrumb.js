// Breadcrumb.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
//import breadcrumb from 'semantic-ui-css/components/breadcrumb.css';
import classNames from 'classnames';

const CLASSNAME = 'breadcrumb';

export default class Breadcrumb extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		let sections;
		
		/*
		if(this.props.children.length > 0) {
			let sectionClass = 'section';
			let sectionCnt = this.props.children.length;
			
			this.props.children.map((ele, idx) => {
				if (sectionCnt == idx-1) {
					//sections += ele.addClass('active');
				} else {
					sections += ele;
					if (this.props.divider.type == 'icon') {
						sections += '<i class="divider '+this.props.divider.text+'"></i>';
					} else {
						sections += '<div class="divider">'+this.props.divider.text+'</div>';
					}
					
				}
			});
		}
		*/

		if(this.props.size) {
			componentClass = classNames(componentClass, this.props.size);
		}
		
		return (
			<div className={componentClass}>
				{this.props.children}
			</div>
		)
	};
}

Breadcrumb.propTypes = {
	divider: ({
		type: PropTypes.oneOf(['icon', 'text']),
		text: PropTypes.string
	}),
	size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
}

