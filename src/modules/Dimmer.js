// Dimmer.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';

import dimmer from 'semantic-ui-css/components/dimmer.min.css';
import classNames from 'classnames';

const CLASSNAME = 'dimmer';

export default class Dimmer extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {
            isShow: false
        }

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.isShow = this.isShow.bind(this);
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

    show() {
        this.setState({isShow: true});
        $(this.dimmer).dimmer('show');
    }

    hide() {
        this.setState({isShow: false});
        $(this.dimmer).dimmer('hide');
    }

    isShow() {
        return this.state.isShow;
    }

	render() {
        let componentClass = this.getClassName();

        if(this.props.page) {
            componentClass = classNames(componentClass, 'page');
        }

        if(this.props.state) {
            componentClass = classNames(componentClass, this.props.state);
        }

		return (
			<div className={componentClass} ref={(ref) => {this.dimmer = ref}}>
                {this.props.children}
			</div>
		);
	};
}

Dimmer.propTypes = {
    page: PropTypes.bool,
    state: PropTypes.oneOf(['active', 'disabled']),
}
