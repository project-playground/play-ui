import React from 'react';

import Progress from '../modules/Progress';
import Button from '../components/Button';
import Buttons from '../components/Buttons';
import Header from  '../components/Header';
import Divider from '../components/Divider';

export default class DimmerView extends React.Component {

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
				<Header size={2} text="Progress" />

				<Header size={3} text="Standard" subHeader="A standard progress bar" />
                <Progress data={ {percent: 90, label: 'Uploading Files'}} />
			</div>		
		);
	}
}