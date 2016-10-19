// Progress.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';

import progress from 'semantic-ui-css/components/progress.min.css';
import classNames from 'classnames';

const CLASSNAME = 'progress';

export default class Progress extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {}
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

    didMount() {
        $(this.component).progress();
    }

	render() {
        let componentClass = this.getClassName();

		return (
			<div className={componentClass} 
				data-percent={this.props.data.percent} 
				ref={(ref) => {this.component = ref}}>
                <div className="bar">
                    <div className="progress"></div>
                </div>
                <div className="label">{this.props.data.label}</div>
			</div>
		);
	};
}

Progress.propTypes = {
    data: PropTypes.shape({
        percent: PropTypes.number,
        label: PropTypes.string,
    })
}

Progress.defaultProps = {
    data: {
        percent: 0,
        label: ''
    }
}