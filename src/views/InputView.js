import React from 'react';

import Input from '../components/Input';
import Divider from '../components/Divider';

export default class InputView extends React.Component {
	render() {
		return (
			<div>
				<h2>Input</h2>
				<h3>Input</h3>
				<Input  />
				
				<h3>PlaceHolder</h3>
				<Input placeholder="Hello World" />
				
				<Divider />
			</div>		
		);
	}
}