import React from 'react';

import Input from '../components/Input';
import Divider from '../components/Divider';

export default class InputView extends React.Component {
	render() {
		return (
			<div>
				<h2>Input</h2>
				<h3>Input</h3>
				<Input />
				
				<h3>Input Value</h3>
				<Input value="Input value here" />
				
				<h3>PlaceHolder</h3>
				<Input placeholder="Hello World" />

				<h3>Icon</h3>
				<Input icon="search" />
				
				<h3>Icon Align</h3>
				<Input icon="user" iconalign="left" placeholder="Icon Left" />
				<Input icon="user" iconalign="right" placeholder="Icon Right (default)" />

				<h3>State</h3>
				<Input state="active" placeholder="Hello World" />
				<Input state="disabled" placeholder="Hello World" />
				<Input state="loading" placeholder="Hello World" />
								
				<Divider />
			</div>		
		);
	}
}