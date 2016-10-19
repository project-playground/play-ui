// Modal.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';
import Icon from '../components/Icon';
import Button from '../components/Button';

import modal from 'semantic-ui-css/components/modal.min.css';
import classNames from 'classnames';

const CLASSNAME = 'modal';

export default class Modal extends UIComponent {
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

	componentWillMount() {
		/*
		this.props.children.map(function(child, i) {
			console.log(i, child);
			if(child.type === Item) {
				console.log('Item!!!!!');
			} else {
				console.log('Not Item!!!!!', child.type);
			}
		});
		*/
	}

	componentDidMount() {
        
	}

    show() {
        this.setState({isShow: true});
        $(this.component).modal('show');
    }

    hide() {
        this.setState({isShow: false});
        $(this.component).modal('hide');
    }

    isShow() {
        return this.state.isShow;
    }

	render() {
		let componentClass = this.getClassName();

        let closeIcon;
        if(this.props.closable) {
            closeIcon = (
                <Icon icon="close" />
            );
        }

        if(this.props.basic) {
            componentClass = classNames(componentClass, 'basic');
        }

        if(this.props.fullscreen) {
            componentClass = classNames(componentClass, 'fullscreen');
        }

        let header;
        if(typeof this.props.header === 'string') {
            header = (
                <div className="header">
                    {this.props.header}
                </div>
            )
        } else if(typeof this.props.header !== 'string' && this.props.basic) {
            header = (
                <div className="ui icon header">
                    <Icon icon={this.props.header.icon} />
                    {this.props.header.header}
                </div>
            )
        } else {
            header = (
                <div className="header">
                    <Icon icon={this.props.header.icon} />
                    {this.props.header.header}
                </div>
            )
        }
	
		return (
			<div className={componentClass} 
				ref={(ref) => {this.component = ref}}>
				{closeIcon}
				{header}
                {this.props.children}
			</div>
		);
	}
}

Modal.propTypes = {
    header: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({
			icon: PropTypes.string.isRequired,
			header: PropTypes.string.isRequired,
		})
    ]),
	closable: PropTypes.bool,
};

Modal.defaultProps = {
    closable: false,
}
