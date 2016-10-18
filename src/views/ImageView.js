import React from 'react';

import Image from '../components/Image';
import Images from '../components/Images';
import Header from  '../components/Header';
import Divider from '../components/Divider';
import Segment from '../components/Segment';

export default class ImagelView extends React.Component {
	render() {
		return (
			<div>
				<Header size={2} text="Image" />
				<Header size={3} text="Image" />
				<Image src="/assets/images/wireframe/image.png" size="medium" />
				
                <Header size={3} text="State" />
                <Header size={4} text="Hidden" />
				<Image src="/assets/images/wireframe/image.png" state="hidden" size="medium" />

                <Header size={4} text="Disabled" />
                <Image src="/assets/images/wireframe/image.png" state="disabled" size="medium" />

                <Header size={3} text="Avatar" />
                <Image src="/assets/images/wireframe/image.png" avatar={true} />
                <span>HelloWorld</span>

                <Header size={3} text="Bordered" />
                <Image src="/assets/images/wireframe/white-image.png" bordered={true} size="medium" />

                <Header size={3} text="Fluid" />
                <Image src="/assets/images/wireframe/image.png" fluid={true} />

                <Header size={3} text="Rounded" />
                <Image src="/assets/images/wireframe/square-image.png" shape="rounded" size="medium"/>

                <Header size={3} text="Circular" />
                <Image src="/assets/images/wireframe/square-image.png" shape="circular" size="medium" />

                <Header size={3} text="Vertically Aligned" />
                <Image src="/assets/images/wireframe/square-image.png" valign="top" size="tiny" />
                <span>Top Aligned</span>
                <Divider />
                <Image src="/assets/images/wireframe/square-image.png" valign="middle" size="tiny" />
                <span>Middle Aligned</span>
                <Divider />
                <Image src="/assets/images/wireframe/square-image.png" valign="bottom" size="tiny" />
                <span>Bottom Aligned</span>
                <Divider />

                <Header size={3} text="Centered" />
                <Segment>
                    <Image src="/assets/images/wireframe/image.png" align="centered" size="medium" />
                    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                    <Image src="/assets/images/wireframe/image-text.png" align="centered" size="small" />
                    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
                </Segment>

                <Header size={3} text="Spaced" />
                <Segment>
                    <p>Te eum doming eirmod, nominati pertinacia <Image src="/assets/images/wireframe/image.png" align="spaced" size="mini" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                </Segment>

                <Header size={3} text="Floated" />
                <Segment>
                    <Image src="/assets/images/wireframe/image.png" floated="left" size="small" />
                    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                    <Image src="/assets/images/wireframe/image-text.png" floated="right" size="small" />
                    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
                </Segment>

                <Header size={3} text="Size" />
                <Image src="/assets/images/wireframe/image.png" size="mini" />
                <Image src="/assets/images/wireframe/image.png" size="tiny" />
                <Image src="/assets/images/wireframe/image.png" size="small" />
                <Image src="/assets/images/wireframe/image.png" size="medium" />
                <Image src="/assets/images/wireframe/image.png" size="large" />
                <Image src="/assets/images/wireframe/image.png" size="big" />
                <Image src="/assets/images/wireframe/image.png" size="huge" />
                <Image src="/assets/images/wireframe/image.png" size="massive" />

				<Divider />

                <Header size={2} text="Groups" />
                <Header size={3} text="Size" />
                <Images size="tiny">
                    <Image src="/assets/images/wireframe/image.png" />
                    <Image src="/assets/images/wireframe/image.png" />
                    <Image src="/assets/images/wireframe/image.png" />
                    <Image src="/assets/images/wireframe/image.png" />
                </Images>

                <Images size="small">
                    <Image src="/assets/images/wireframe/image.png" />
                    <Image src="/assets/images/wireframe/image.png" />
                    <Image src="/assets/images/wireframe/image.png" />
                    <Image src="/assets/images/wireframe/image.png" />
                </Images>
			</div>		
		);
	}
}