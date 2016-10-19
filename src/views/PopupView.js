import React from 'react';

import Button from '../components/Button';
import Image from '../components/Image';
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
				<Header size={2} text="Popup" />

				<Header size={3} text="Popup" subHeader="An element can specify popup content to appear" />
                <Button icon="add" dataContent="Add users to your feed" />

                <Header size={3} text="Titled" subHeader="An element can specify popup content with a title" />
                <Image 
                    src="/assets/avatar/elliot.jpg" 
                    avatar={true} 
                    dataTitle="Elliot Fu" 
                    dataContent="Elliot has been a member since July 2012" />
                <Image 
                    src="/assets/avatar/stevie.jpg" 
                    avatar={true} 
                    dataTitle="Stevie Feliciano" 
                    dataContent="Stevie has been a member since August 2013" />
                <Image 
                    src="/assets/avatar/matthew.png" 
                    avatar={true} 
                    dataTitle="Matt" 
                    dataContent="Matt has been a member since July 2014" />

                <Header size={2} text="Tooltip" />
                <Header size={3} text="Tooltip" subHeader="An element can specify a simple tooltip that can appear without javascript" />
                <Button icon="add" dataTooltip="Add users to your feed" />
                <Button icon="add" dataTooltip="Add users to your feed" dataInverted={true}/>

                <Header size={3} text="Position" />
                <Button 
                    text="Top Left"
                    dataTooltip="Add users to your feed"
                    dataPosition="top left" />
                <Button 
                    text="Top Center"
                    dataTooltip="Add users to your feed"
                    dataPosition="top center" />
                <Button 
                    text="Top Right"
                    dataTooltip="Add users to your feed"
                    dataPosition="top right" />
                <Divider />
                <Button 
                    text="Left Center"
                    dataTooltip="Add users to your feed"
                    dataPosition="left center" />
                <Button 
                    text="Right Center"
                    dataTooltip="Add users to your feed"
                    dataPosition="right center" />
                <Divider />
                <Button 
                    text="Bottom Left"
                    dataTooltip="Add users to your feed"
                    dataPosition="bottom left" />
                <Button 
                    text="Bottom Center"
                    dataTooltip="Add users to your feed"
                    dataPosition="bottom center" />
                <Button 
                    text="Bottom Right"
                    dataTooltip="Add users to your feed"
                    dataPosition="bottom right" />
                <Divider />

			</div>		
		);
	}
}