import React from 'react';

import Rating from '../modules/Rating';
import Header from  '../components/Header';
import Divider from '../components/Divider';

export default class RatingView extends React.Component {

    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow(key) {
        this[key].show();
    }

    handleHide(key) {
        this[key].hide();
    }

	render() {
		return (
			<div>
				<Header size={2} text="Rating" />

				<Header size={3} text="Rating" subHeader="A basic rating" />
                <Rating data={ {max: 1} } />

                <Header size={3} text="Star" subHeader="A rating can use a set of star icons" />
                <Rating data={ {rating: 3} } icon="star" />

                <Header size={3} text="Heart" subHeader="A rating can use a set of heart icons" />
                <Rating data={ {rating: 3} } icon="heart" />

                <Header size={3} text="Size" subHeader="A rating can vary in size" />
                <Rating data={ {rating: 3} } icon="star" size="mini" />
                <br/>
                <Rating data={ {rating: 3} } icon="star" size="tiny" />
                <br/>
                <Rating data={ {rating: 3} } icon="star" size="small" />
                <br/>
                <Rating data={ {rating: 3} } icon="star" size="medium" />
                <br/>
                <Rating data={ {rating: 3} } icon="star" size="large" />
                <br/>
                <Rating data={ {rating: 3} } icon="star" size="huge" />
                <br/>
                <Rating data={ {rating: 3} } icon="star" size="massive" />

			</div>		
		);
	}
}