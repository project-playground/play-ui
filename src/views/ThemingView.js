import React from 'react';

import Header from '../components/Header';
import Grid from '../collections/Grid';
import Row from '../collections/Row';
import Column from '../collections/Column';

export default class ThemingView extends React.Component {
	render() {
		return (
			<div>
				<Header size={1} text="Theming Examples" align="center" />
				<Header size={2} divide={true} text="Site" />
				
				<Grid column={3} stackable={true}>
					<Column>
						<Header size={1} text="Heading 1" />
						<Header size={2} text="Heading 2" />
						<Header size={3} text="Heading 3" />
						<Header size={4} text="Heading 4" />
						<Header size={5} text="Heading 5" />
					</Column>
					<Column>
						<Header size={2} text="Example body text" />
					</Column>
					<Column>
						<Grid column={3} stackable={true} padded={true} valign="middle" centered={true} aligned={true}>
							<Column colored="red">Red</Column>
							<Column colored="orange">Orange</Column>
							<Column colored="yellow">Yellow</Column>
							<Column colored="olive">Olive</Column>
							<Column colored="blue">Blue</Column>
							<Column colored="violet">Violet</Column>
						</Grid>
					</Column>
				</Grid>
			</div>		
		);
	}
}
