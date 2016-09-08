import React from 'react';

import LabeledInput from '../components/LabeledInput';
import Divider from '../components/Divider';

export default class LabeledInputView extends React.Component {
	render() {
		return (
			<div>
				<h2>LabeledInput</h2>
				<h3>LabeledInput</h3>
				<LabeledInput label="http://" />
				
				<h3>basic</h3>
				<LabeledInput label="http://" basic="true" />
				
				<Divider />
			</div>		
		);
	}
}