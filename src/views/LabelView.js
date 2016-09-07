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
				
				<Divider />
			</div>		
		);
	}
}