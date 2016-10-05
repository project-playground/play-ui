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
				<Label icon="delete" iconPos="right" text="Delete" />
				
				<h3>Tag</h3>
				<Label tag="true" text="New" />
				<Label tag="true" colored="red" text="Uncoming" />
				<Label tag="true" colored="teal" text="Featured" />
				
				<h3>Circular</h3>
				<Label circular="true" colored="red" text="1" />
				<Label circular="true" colored="orange" text="2" />
				<Label circular="true" colored="yellow" text="3" />
				<Label circular="true" colored="green" text="4" />
				<Label circular="true" colored="teal" text="5" />
				
				<h3>Colored</h3>
				<Label colored="red" text="Red" />
				<Label colored="orange" text="Orange" />
				<Label colored="yellow" text="Yellow" />
				<Label colored="olive" text="Olive" />
				<Label colored="green" text="Green" />
				<Label colored="teal" text="Teal" />
				<Label colored="blue" text="Blue" />
				<Label colored="violet" text="Violet" />
				<Label colored="purple" text="Purple" />
				<Label colored="pink" text="Pink" />
				<Label colored="brown" text="Brown" />
				<Label colored="grey" text="Grey" />
				<Label colored="black" text="Black" />

				
				<Divider />
			</div>		
		);
	}
}