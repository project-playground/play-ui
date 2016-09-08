import React from 'react';

import Label from '../components/Label';
import Divider from '../components/Divider';

export default class LabelView extends React.Component {
	render() {
		return (
			<div>
				<h2>Label</h2>
				<h3>Label</h3>
				<Label text="HelloWorld" />

				<h3>Basic</h3>
				<Label basic="true" text="HelloWorld" />
				
				<h3>Size</h3>
				<Label size="mini" text="Mini" />
				<Label size="tiny" text="Tiny" />
				<Label size="small" text="Small" />
				<Label size="large" text="Large" />
				<Label size="big" text="Big" />
				<Label size="huge" text="Huge" />
				<Label size="massive" text="Massive" />
				
				<h3>Icon</h3>
				<Label icon="search" text="Search" />	
				
				<Divider />
			</div>		
		);
	}
}