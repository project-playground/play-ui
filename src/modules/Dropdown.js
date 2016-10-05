// Dropdown.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';

import Item from '../collections/Item';
import dropdown from 'semantic-ui-css/components/dropdown.min.css';
import classNames from 'classnames';

const CLASSNAME = 'dropdown';

export default class Dropdown extends UIComponent {
	constructor(props) {
		super(props); 
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

	componentWillMount() {
		this.props.children.map(function(child, i) {
			console.log(i, child);
			if(child.type === Item) {
				console.log('Item!!!!!');
			} else {
				console.log('Not Item!!!!!', child.type);
			}
		});
	};
	
	componentDidMount() {
		$('.ui.dropdown').dropdown();
	}

	render() {
		let componentClass = this.getClassName();
		
		if(this.props.type && this.props.type !== 'default') {
			componentClass = classNames(componentClass, this.props.type);
		}
						
		return (
			<div className={componentClass}>
				<div className="text">{this.props.text}</div>
				<i className="dropdown icon"></i>
				<div className="menu">
					{this.props.children}
				</div>
			</div>
		)
	};
}

Dropdown.propTypes = {
	type: PropTypes.oneOf(['default', 'selection']),
	text: PropTypes.string,
}

Dropdown.defaultProps = {
	type: 'default',
}
/*
			<div className={componentClass}>
				<div className="text">{this.props.text}</div>
				<i className="dropdown icon"></i>
				<div className="menu">
					<div className="item">New</div>
					<div className="item">
						<span className="description">ctrl + o</span>
						Open...
					</div>
					<div className="item">
						<span className="description">ctrl + s</span>
						Save as...
					</div>
					<div className="item">
						<span className="description">ctrl + r</span>
						Rename
					</div>
					<div className="item">Make a copy</div>
					<div className="item">
						<i className="folder icon"></i>
						Move to folder
					</div>
					<div className="item">
						<i className="trash icon"></i>
						Move to trash
					</div>
					<div className="divider"></div>
					<div className="item">Download As...</div>
					<div className="item">
						<i className="dropdown icon"></i>
						Publish To Web
						<div className="menu">
							<div className="item">Google Docs</div>
							<div className="item">Google Drive</div>
							<div className="item">Dropbox</div>
							<div className="item">Adobe Creative Cloud</div>
							<div className="item">Private FTP</div>
							<div className="item">Another Service...</div>
						</div>
					</div>
					<div className="item">E-mail Collaborators</div>
				</div>
			</div>	
*/