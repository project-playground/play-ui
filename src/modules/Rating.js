// Rating.js
import React, { Component, PropTypes  } from 'react';
import UIComponent from '../components/UIComponent';

import rating from 'semantic-ui-css/components/rating.min.css';
import classNames from 'classnames';

const CLASSNAME = 'rating';

export default class Rating extends UIComponent {
	constructor(props) {
		super(props);
		this.state = {}
	}

	getClassName() {
		return classNames(super.getClassName(), CLASSNAME);
	}

    didMount() {
        $(this.component).rating();
    }

	render() {
        let componentClass = this.getClassName();

        if(this.props.icon && this.props.icon !== 'default') {
            componentClass = classNames(componentClass, this.props.icon);
        }

        if(this.props.size) {
            componentClass = classNames(componentClass, this.props.size);
        }

		return (
			<div 
                className={componentClass} 
                data-max-rating={this.props.data.max} 
                data-rating={this.props.data.rating}
                ref={(ref) => {this.component = ref}}>
			</div>
		);
	};
}

Rating.propTypes = {
    data: PropTypes.shape({
        max: PropTypes.number,
        rating: PropTypes.number,
    }),
    icon: PropTypes.oneOf(['default', 'star', 'heart']),
    size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
}

Rating.defaultProps = {
    data: {
        max: 4,
        rating: 0
    },
    icon: 'default',
    size: 'medium',
}