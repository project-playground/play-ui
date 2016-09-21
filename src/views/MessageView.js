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
				
				<h3>Message close icon</h3>
				<Message header="Message close" text="close icon" close={true} />
				
				<h3>Message hidden</h3>
				<Message header="hidden header" text="hidden text" hidden={true} />
				
				<h3>Message visible</h3>
				<Message header="visible header" text="visible" visible={true} />
				
				<h3>Message icon</h3>
				<Message header="icon header" text="icon" icon="inbox" />
				
				<h3>Message Warning</h3>
				<Message header="warning header" text="warning" level="warning" />
				
				<h3>Message Info</h3>
				<Message header="info header" text="info" level="info" />
				
				<h3>Message Positive</h3>
				<Message header="positive header" text="positive" level="positive" />
				
				<h3>Message Success</h3>
				<Message header="success header" text="success" level="success" />
				
				<h3>Message Negative</h3>
				<Message header="negative header" text="negative" level="negative" />
				
				<h3>Message Error</h3>
				<Message header="error header" text="error" level="error" />
				
				<h3>Message Colored</h3>
				<Message header="RED" colored="red" />
				<Message header="ORANGE" colored="orange" />
				<Message header="YELLOW" colored="yellow" />
				<Message header="OLIVE" colored="olive" />
				<Message header="GREEN" colored="green" />
				<Message header="TEAL" colored="teal" />
				<Message header="BLUE" colored="blue" />
				<Message header="VIOLET" colored="violet" />
				<Message header="PURPLE" colored="purple" />
				<Message header="PINK" colored="pink" />
				<Message header="BROWN" colored="brown" />
				<Message header="BLACK" colored="black" />
				
				<h3>Message size</h3>
				<Message header="Mini" size="mini" />
				<Message header="Tiny" size="tiny" />
				<Message header="Small" size="small" />
				<Message header="Large" size="large" />
				<Message header="Big" size="big" />
				<Message header="Huge" size="huge" />
				<Message header="Massive" size="massive" />
				
				<h3>Message</h3>
				<Message header="warning colored yellow" level="warning" colored="yellow" />
				<Message header="warning colored red size big" level="warning" colored="red" size="big" />

			</div>		
		);
	}
}