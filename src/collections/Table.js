// Table.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';

import table from 'semantic-ui-css/components/table.css';
import classNames from 'classnames';
import jqueryTableSort from 'jquery-tablesort';
import tableExt from './Table.css';

const CLASSNAME = 'table';
const COLUMNS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];

export default class Table extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

    didMount() {
        if(this.props.sortable) {
            $(this.component).tablesort();
        }
    }

	render() {
		let componentClass = this.getClassName();
        let extProps = {};

        if(this.props.celled) {
            componentClass = classNames(componentClass, 'celled');
        }
		
        if(this.props.padded) {
            if(this.props.padded === 'very')
                componentClass = classNames(componentClass, 'very padded');
            else
                componentClass = classNames(componentClass, this.props.padded);
        }

        if(this.props.basic) {
            if(this.props.basic === 'very')
                componentClass = classNames(componentClass, 'very basic');
            else
                componentClass = classNames(componentClass, this.props.basic);
        }

        if(this.props.collapsing) {
            componentClass = classNames(componentClass, 'collapsing');
        }

        if(this.props.striped) {
            componentClass = classNames(componentClass, 'striped');
        }

        if(this.props.definition) {
            componentClass = classNames(componentClass, 'definition');
        }

        if(this.props.compact) {
            if(this.props.compact === 'very')
                componentClass = classNames(componentClass, 'very compact');
            else
                componentClass = classNames(componentClass, this.props.compact);
        }

        if(this.props.structured) {
            componentClass = classNames(componentClass, 'structured');
        }

        if(this.props.singleLine) {
            componentClass = classNames(componentClass, 'single line');
        }

        if(this.props.fixed) {
            componentClass = classNames(componentClass, 'fixed');
        }

        if(this.props.stackable) {
            componentClass = classNames(componentClass, this.props.stackable);
        }

        if(this.props.selectable) {
            componentClass = classNames(componentClass, 'selectable');
        }

        if(this.props.inverted) {
            componentClass = classNames(componentClass, 'inverted');
        }

		if(this.props.columnCount) {
			componentClass = classNames(componentClass, COLUMNS[this.props.columnCount - 1] + ' column');
		}

        if(this.props.colored) {
            componentClass = classNames(componentClass, this.props.colored);
        }
        
        if(this.props.attached) {
        	if(this.props.attached === 'attached')
        		componentClass = classNames(componentClass, this.props.attached);
        	else
        		componentClass = classNames(componentClass, this.props.attached + ' attached');
        }

		return (
			<table className={componentClass}
                ref={(ref) => this.component = ref}>
				{this.props.children}
			</table>
		);
	};
}

Table.propTypes = {
	celled: PropTypes.bool,
    padded: PropTypes.oneOf(['padded', 'very']),
    basic: PropTypes.oneOf(['basic', 'very']),
    collapsing: PropTypes.bool,
    striped: PropTypes.bool,
    definition: PropTypes.bool,
    compact: PropTypes.oneOf(['compact', 'very']),
    structured: PropTypes.bool,
    singleLine: PropTypes.bool,
    fixed: PropTypes.bool,
    stackable: PropTypes.oneOf(['stackable', 'unstackable']),
    selectable: PropTypes.bool,
    inverted: PropTypes.bool,
    columnCount: PropTypes.number,
    colored: PropTypes.oneOf(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'brown', 'pink', 'grey', 'black']),
    sortable: PropTypes.bool,
    attached: PropTypes.oneOf(['attached', 'top', 'bottom']),
}
