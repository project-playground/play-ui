import React from 'react';

import Message from '../components/Message';

export default class MessageView extends React.Component {
	render() {

		return (
			<div>
				<h2>Message</h2>
				<h3>Message</h3>
				<Message text="HelloWorld" />

				<h3>Message & Header</h3>
				<Message header="HelloWorld" text="This is HelloWorld!!" />

			</div>		
		);
	}
}