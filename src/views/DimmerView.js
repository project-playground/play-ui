import React from 'react';

import Dimmer from '../modules/Dimmer';
import Segment from '../components/Segment';
import Button from '../components/Button';
import Buttons from '../components/Buttons';
import Content from '../components/Content';
import Image from '../components/Image';
import Images from '../components/Images';
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
				<Header size={2} text="Dimmer" />

				<Header size={3} text="Dimmer" />
                <Segment>
                    <Header size={3} text="Overlayable Section" />
                    <Images size="small">
                        <Image src="/assets/images/wireframe/image.png" />
                        <Image src="/assets/images/wireframe/image.png" />
                        <Image src="/assets/images/wireframe/image.png" />
                    </Images>
                    <Image src="/assets/images/wireframe/media-paragraph.png" size="medium" />
                    <Dimmer ref={(ref) => {this.dimmer = ref}} />
                </Segment>
                <Buttons>
                    <Button
                        text="Show"
                        onClick={() => this.handleShow("dimmer")}/>
                    <Button
                        text="Hide"
                        onClick={() => this.handleHide("dimmer")}/>
                </Buttons>

                <Header size={3} text="Page Dimmer" />
                <Dimmer ref={(ref) => {this.page = ref}} page={true}/>
                <Button
                    text="Show"
                    onClick={() => this.handleShow("page")}/>

                <Header size={3} text="States" />
                <Header size={4} text="Active" />
                <Segment>
                    <Image src="/assets/images/wireframe/short-paragraph.png" />
                    <Divider />
                    <Image src="/assets/images/wireframe/short-paragraph.png" />
                    <Dimmer state="active"/>
                </Segment>

                <Header size={4} text="Disabled" />
                <Segment>
                    <Image src="/assets/images/wireframe/short-paragraph.png" />
                    <Divider />
                    <Image src="/assets/images/wireframe/short-paragraph.png" />
                    <Dimmer state="disabled"/>
                </Segment>
			</div>		
		);
	}
}