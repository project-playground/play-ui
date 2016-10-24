import React from 'react';

import Items from '../collections/Items';
import Item from '../collections/Item';
import Image from '../components/Image';
import Header from '../components/Header'
import Divider from '../components/Divider';

export default class ItemView extends React.Component {
	render() {

		return (
			<div>
				<h2>Item</h2>
				<h3>Items</h3>
				<Items>
					<Item>
						<div class="image">
							<Image src="/assets/images/wireframe/image.png"></Image>
						</div>
						<div class="content">
							<Header aHeader={true} text="Header"></Header>
							<div class="meta">
								<span>Description</span>
							</div>
							<div class="description">
								<p></p>
							</div>
							<div class="extra">
								Additional Details
							</div>
						</div>
					</Item>
					<Item>
						<div class="image">
							<Image src="/assets/images/wireframe/image.png"></Image>
						</div>
						<div class="content">
							<Header aHeader={true} text="Header"></Header>
							<div class="meta">
								<span>Description</span>
							</div>
							<div class="description">
								<p></p>
							</div>
							<div class="extra">
								Additional Details
							</div>
						</div>
					</Item>
				</Items>
				<br/>
				

				<Divider/>

				
			</div>
		);
	}
}
