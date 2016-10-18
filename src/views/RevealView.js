import React from 'react';

import Reveal from '../components/Reveal';
import Content from '../components/Content';
import Image from '../components/Image';
import Images from '../components/Images';
import Header from  '../components/Header';
import Divider from '../components/Divider';

export default class RevealView extends React.Component {
	render() {
		return (
			<div>
				<Header size={2} text="Reveal" />
				<Header size={3} text="Fade" />
                <Reveal fade={true}>
                    <Content state="visible">
                        <Image src="/assets/images/wireframe/square-image.png" size="small" />
                    </Content>
                    <Content state="hidden">
                        <Image src="/assets/avatar/ade.jpg" size="small" />
                    </Content>
                </Reveal>

                <Header size={3} text="Move" />
                <Reveal move="left">
                    <Content state="visible">
                        <Image src="/assets/images/wireframe/square-image.png" size="small" />
                    </Content>
                    <Content state="hidden">
                        <Image src="/assets/avatar/chris.jpg" size="small" />
                    </Content>
                </Reveal>

                <Header size={3} text="Move Right" />
                <Reveal move="right">
                    <Content state="visible">
                        <Image src="/assets/images/wireframe/square-image.png" size="small" />
                    </Content>
                    <Content state="hidden">
                        <Image src="/assets/avatar/jenny.jpg" size="small" />
                    </Content>
                </Reveal>

                <Header size={3} text="Move Up" />
                <Reveal move="up">
                    <Content state="visible">
                        <Image src="/assets/images/wireframe/square-image.png" size="small" />
                    </Content>
                    <Content state="hidden">
                        <Image src="/assets/avatar/justen.jpg" size="small" />
                    </Content>
                </Reveal>
				
                <Header size={3} text="Move Down" />
                <Reveal move="down">
                    <Content state="visible">
                        <Image src="/assets/images/wireframe/square-image.png" size="small" />
                    </Content>
                    <Content state="hidden">
                        <Image src="/assets/avatar/nan.jpg" size="small" />
                    </Content>
                </Reveal>
				
                <Header size={3} text="States" />
                <Header size={4} text="Active" />
                <Reveal move="left" state="active">
                    <Content state="visible">
                        <Image src="/assets/images/wireframe/square-image.png" size="small" />
                    </Content>
                    <Content state="hidden">
                        <Image src="/assets/avatar/nan.jpg" size="small" />
                    </Content>
                </Reveal>

                <Header size={4} text="Disabled" />
                <Reveal move="left" state="disabled">
                    <Content state="visible">
                        <Image src="/assets/images/wireframe/square-image.png" size="small" />
                    </Content>
                    <Content state="hidden">
                        <Image src="/assets/avatar/chris.jpg" size="small" />
                    </Content>
                </Reveal>

			</div>		
		);
	}
}