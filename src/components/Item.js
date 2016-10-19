// Item.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from './UIComponent';
import item from 'semantic-ui-css/components/item.css';
import classNames from 'classnames';

const CLASSNAME = 'item';

export default class Item extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(CLASSNAME);
	}

	render() {
		
		let itemClass = this.getClassName();
		let itemContent = 'content';
		let iconClass;
		let imgContent;
		let itemText;
		
		if(this.props.itemAText) {
			if(this.props.status) {
				itemClass = classNames(itemClass, this.props.status);
			}
			
			itemContent = this.props.itemText;
			
			return (	
				<a className={itemClass}>
	        		{itemContent}
				</a>
			);
		} else {
			
		
			if(this.props.icon) {
				iconClass = classNames(this.props.icon, 'icon');
			}
			
			if(this.props.itemText) {
				itemText = <div className='item'>{this.props.itemText}</div>
			}
			
			if(this.props.itemLinkText) {
				itemText = <a href={this.props.itemLinkText}>{this.props.itemText}</a>
			}
			
			if(this.props.aHeader) {
				itemText = <a className='header'>{this.props.aHeader}</a>
				
				if(this.props.description) {
					itemText += <div className='description'>{this.props.description}</div>
				}
			}
			
			if(this.props.header) {
				itemText = <div className='header'>{this.props.header}</div>
				
				if(this.props.description) {
					itemText += <div className='description'>{this.props.description}</div>
				}
				
				if(this.props.headerChild) {
					itemText += {this.props.headerChild}
				}
			}
			
			let alignClass;
			if(this.props.aligned) {
				alignClass = classNames(this.props.aligned, 'aligned content');
				
				itemText = <div ClassName={alignClass}>{this.props.itemText}</div>
			}
			
			let imgClass = classNames(super.getClassName(), 'image')
			if(this.props.img) {
				imgClass = classNames(imgClass, this.props.img);
				
				imgContent = <img className={imgClass} src={this.props.src}>
			}
			
			itemContent = {itemText}	
			return (
				<div className={itemClass}
					ref={(ref) => this.component = ref}>
					{imgContent}
	        		{itemContent}
				</div>
			);
		}	
	};
}
/*
Item.propTypes = {
	itemText: PropTypes.string,
	icon: PropTypes.string,
	itemLinkText: PropTypes.string,
	aHeader: PropTypes.string,
	description: PropTypes.string,
	header: PropTypes.string,
	headerChild: PropTypes.string,
	img: PropTypes.string,
	src: PropTypes.string,
	status: PropTypes.oneOf(['active', 'disabled']),
	aligned: PropTypes.oneOf(['top', 'middle', 'bottom'])
}
*/
