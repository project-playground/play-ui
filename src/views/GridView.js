import React from 'react';
import Grid from '../collections/Grid';
import Row from '../collections/Row';
import Column from '../collections/Column';
import Segment from '../components/Segment';

export default class GridView extends React.Component {
	render() {

		return (
			<div>
				<h2>Grid</h2>
				<h3>Grids</h3>
				<Grid>
					<Column column={4}>
						<Segment>4 wide column</Segment>
					</Column>
					<Column column={4}>
						<Segment>4 wide column</Segment>
					</Column>
					<Column column={4}>
						<Segment>4 wide column</Segment>
					</Column>
					<Column column={4}>
						<Segment>4 wide column</Segment>
					</Column>
				</Grid>
			
				<h3>Columns</h3>
				<Grid>
					<Column column={4}>
						<Segment>4</Segment>
					</Column>
					<Column column={4}>
						<Segment>4</Segment>
					</Column>
					<Column column={4}>
						<Segment>4</Segment>
					</Column>
					<Column column={4}>
						<Segment>4</Segment>
					</Column>
					<Column column={2}>
						<Segment>2</Segment>
					</Column>
					<Column column={8}>
						<Segment>8</Segment>
					</Column>
					<Column column={6}>
						<Segment>6</Segment>
					</Column>
				</Grid>
				
				<h3>Rows</h3>
				<Grid column={4}>
					<Row>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
					</Row>
					<Column><Segment/></Column>
					<Column><Segment/></Column>
					<Column><Segment/></Column>
					<Column><Segment/></Column>
				</Grid>

				<h3>Rows column</h3>
				<Grid>
					<Row column={3}>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
					</Row>
					<Row column={8}>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
					</Row>
				</Grid>
				
				<h3>Gutters</h3>
				<Grid gutters={true}>
					<Row column={3}>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
					</Row>
					<Row column={8}>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
					</Row>
				</Grid>
				
				<h3>Divided</h3>
				<Grid divided={true}>
					<Row column={3}>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
					</Row>
					<Row column={8}>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
					</Row>
				</Grid>
				
				<h3>Nesting Grids</h3>
				<Grid column={2}>
					<Column>
						<Grid column={3}>
							<Column><Segment /></Column>
							<Column><Segment /></Column>
							<Column><Segment /></Column>
						</Grid>
					</Column>
					<Column><Segment /></Column>
					<Column><Segment /></Column>
					<Column>
						<Grid>
							<Column column={10}><Segment /></Column>
							<Column column={6}><Segment /></Column>
						</Grid>
					</Column>
				</Grid>

				<h3>Grid Align</h3>
				<Grid align="center">
					<Row column={3}>
						<Column>Center</Column>
						<Column>Center</Column>
						<Column>Center</Column>
					</Row>
				</Grid>

				<h3>Equal Width</h3>
				<Grid equalwidth={true}>
					<Column><Segment /></Column>
					<Column><Segment /></Column>
					<Column><Segment /></Column>
					<Row equalwidth={true}>
						<Column><Segment /></Column>
						<Column><Segment /></Column>
					</Row>
				</Grid>

				<h3>Centered</h3>
				<Grid column={2} centered={true}>
					<Column><Segment /></Column>
					<Row column={4} centered={true}>
						<Column><Segment /></Column>
						<Column><Segment /></Column>
					</Row>
				</Grid>
				
				<h3>Clearing Content</h3>
				<Grid>
					<Row column={4}>
						<Column floated="left"><Segment /></Column>
						<Column floated="right"><Segment /></Column>
					</Row>
					<Row>
						<Column column={3}><Segment /></Column>
						<Column column={8}><Segment /></Column>
						<Column column={5}><Segment /></Column>
					</Row>
				</Grid>

				<h3>Significant Word Order</h3>
				<Grid align="right">
					<Column floated="left" align="right" column={6}>
						<Segment>Left floated right aligned column</Segment>
					</Column>
					<Column floated="right" align="left" column={6}>
						<Segment>Right floated left aligned column</Segment>
					</Column>
					<Row align="center" column={2}>
						<Column><Segment>Center aligned row</Segment></Column>
						<Column><Segment>Center aligned row</Segment></Column>
					</Row>
					<Column column={16}><Segment>Right aligned grid</Segment></Column>
				</Grid>
				
				<h3>Stackable</h3>
				<Grid column={4} stackable={true}>
					<Column><Segment/></Column>
					<Column><Segment/></Column>
					<Column><Segment/></Column>
					<Column><Segment/></Column>
				</Grid>
				
				<h3>Doubling</h3>
				<Grid>
					<Row column={8} doubling={true}>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
					</Row>
					<Row column={6} doubling={true}>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
					</Row>
					<Row column={4} doubling={true}>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
						<Column><Segment/></Column>
					</Row>
				</Grid>
				
				<h3>Manual Tweaks</h3>
				<Grid>
					<Row only="computer">
						<Column><Segment>Computer</Segment></Column>
					</Row>
					<Row only="tablet">
						<Column><Segment>Tablet</Segment></Column>
					</Row>
					<Row equalwidth={true}>
						<Column><Segment>All</Segment></Column>
						<Column only="mobile"><Segment>Mobile</Segment></Column>
					</Row>
				</Grid>
			</div>		
		);
	}
}