// Button.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import classNames from 'classnames';

const CLASSNAME = 'buttons';

export default class Buttons extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	render() {
		let componentClass = this.getClassName();
		
		if(this.props.icon) {
			componentClass = classNames(componentClass, 'icon');
		}
		
		if(this.props.vertical) {
			componentClass = classNames(componentClass, 'vertical');
		}
		
		let buttonItems = [];
		if(this.props.condition) {
			for(let idx in this.props.children) {
				buttonItems.push(this.props.children[idx]);
				if(this.props.children.length - 1 > idx) {
					buttonItems.push(<div key={idx} className="or" data-text={this.props.condition}></div>);
				}
			}
		} else {
			buttonItems = this.props.children;
		}
		
		if(this.props.equalwidth) {
			let sizeStr;
			const childrenSize = this.props.children.length;
			switch (childrenSize) {
    		case 1:
				sizeStr = 'one';	
    			break;
    		case 2:
				sizeStr = 'two';	
    			break;
    		case 3:
				sizeStr = 'three';	
    			break;
    		case 4:
				sizeStr = 'four';	
    			break;
    		case 5:
				sizeStr = 'five';	
    			break;
    		case 6:
				sizeStr = 'six';	
    			break;
    		case 7:
				sizeStr = 'seven';	
    			break;
    		case 8:
				sizeStr = 'eight';	
    			break;
    		case 9:
				sizeStr = 'nine';	
    			break;
    		case 10:
				sizeStr = 'ten';	
    			break;
    		default:
    			console.err('Illegal children size to apply equal width');
    			break;
			}
			componentClass = classNames(componentClass, sizeStr);
		}
		
		if(this.props.colored) {
			componentClass = classNames(componentClass, this.props.colored);
		}
	
		return (
			<div className={componentClass}>
				{buttonItems}
			</div>
		)
	};
}

Buttons.propTypes = {
	icon: PropTypes.oneOf(['true', 'false']),
	vertical: PropTypes.oneOf(['true', 'false']),
	condition: PropTypes.string,
	equalwidth: PropTypes.oneOf(['true', 'false']),
	colored: PropTypes.oneOf(['primary', 'secondary', 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'brown', 'pink', 'grey', 'black'])
}