import React from 'react';

import Container from '../components/Container';
import Segments from '../components/Segments';
import Segment from '../components/Segment';
import Grid from '../collections/Grid';
import Row from '../collections/Row';
import Column from '../collections/Column';
import Header from '../components/Header';
import Divider from '../components/Divider';

export default class ResponsiveView extends React.Component {
	render() {
		return (
			<div>
				<Header size={1} text="Responsive UI Examples" align="center" />
				<Header size={2} text="Basic Responsive" align="center"/>
				<Header size={3} text="Container" align="center"/>				
				<Container>
					<Segments>
						<Segment>Content</Segment>
						<Segment>Content</Segment>
						<Segment>Content</Segment>
						<Segment>Content</Segment>
					</Segments>
				</Container>
				
				<Header size={3} text="Text Container" align="center"/>				
				<Container text={true}>
					<Segments>
						<Segment>Content</Segment>
						<Segment>Content</Segment>
						<Segment>Content</Segment>
						<Segment>Content</Segment>
					</Segments>
				</Container>
				
				<Header size={3} text="Stackable Grid" align="center"/>				
				<Grid column={2} stackable={true}>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Row column={3}>
						<Column><Segment>Content</Segment></Column>
						<Column><Segment>Content</Segment></Column>
						<Column><Segment>Content</Segment></Column>
					</Row>
					<Column column={10}><Segment>Content</Segment></Column>
					<Column column={6}><Segment>Content</Segment></Column>
				</Grid>

				<Header size={3} text="Doubling Grid" align="center"/>
				<Grid column={3} doubling={true}>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
				</Grid>

				<Header size={3} text="Doubling Stackable Grid" align="center"/>
				<Grid column={3} doubling={true} stackable={true}>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
				</Grid>

				<Header size={3} text="Nested Stackable Grid" align="center"/>
				<Grid column={2}>
					<Column>
						<Grid column={2} doubling={true} stackable={true}>
							<Column><Segment>Content</Segment></Column>
							<Column><Segment>Content</Segment></Column>
						</Grid>
					</Column>
					<Column>
						<Grid column={3} doubling={true} stackable={true}>
							<Column><Segment>Content</Segment></Column>
							<Column><Segment>Content</Segment></Column>
							<Column><Segment>Content</Segment></Column>
						</Grid>
					</Column>
				</Grid>
				
				<Header size={3} text="Stackable Grid Container" align="center"/>
				<Grid column={2} stackable={true} container={true}>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
				</Grid>
				
				<Header size={3} text="Doubling Grid Container" align="center"/>
				<Grid column={3} doubling={true} container={true}>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
				</Grid>

				<Header size={3} text="Doubling Stackable Grid Container" align="center"/>
				<Grid column={3} doubling={true} stackable={true} container={true}>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
					<Column><Segment>Content</Segment></Column>
				</Grid>
				
				<Divider />
				
				<Header size={2} text="Device Adjustment" align="center"/>

				<Header size={3} text="Device Column Width" align="center"/>
				<Grid>
					<Column column={ {computer: 3, tablet: 9, mobile: 6} }>
						<Segment>Content</Segment>
					</Column>
					<Column column={4}><Segment>Content</Segment></Column>
					<Column column={ {computer: 9, tablet: 3, mobile: 6} }>
						<Segment>Content</Segment>
					</Column>
					<Column column={ {computer: 9, tablet: 3, mobile: 6} }>
						<Segment>Content</Segment>
					</Column>
					<Column column={4}><Segment>Content</Segment></Column>
					<Column column={ {computer: 3, tablet: 9, mobile: 6} }>
						<Segment>Content</Segment>
					</Column>
				</Grid>
				
				<Header size={3} text="Device Visibility" align="center"/>
				<Grid column={4}>
					<Column column={10} only='widescreen'><Segment>Widescreen</Segment></Column>
					<Column column={6} only='widescreen'><Segment>Widescreen</Segment></Column>
					<Column column={6} only='large'><Segment>Large Screen</Segment></Column>
					<Column column={10} only='large'><Segment>Large Screen</Segment></Column>
				</Grid>
			</div>		
		);
	}
}
