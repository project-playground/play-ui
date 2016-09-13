import React from 'react';

import Menu from '../collections/Menu';
import MenuItem from '../collections/MenuItem';
import Segment from '../components/Segment';
import Divider from '../components/Divider';

export default class MenuView extends React.Component {
	render() {

		return (
			<div>
				<h2>Menu</h2>
				<h3>Menu</h3>
				<Menu>
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>

				<h3>Pointing</h3>
				<Menu pointing={true}>
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>

				<h3>Secondary</h3>
				<Menu type="secondary">
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>

				<h3>Secondary Pointing</h3>
				<Menu type="secondary" pointing={true}>
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>
				
				<h3>Tabular</h3>
				<Menu type="tabular">
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>
				
				<h3>Tabular & attached Segment</h3>
				<Menu type="tabular" attached="top">
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>
				<Segment attached="bottom">
					<p>Hello World</p>
					<p>Hello World</p>
					<p>Hello World</p>
				</Segment>

				<Segment attached="top">
					<p>Hello World</p>
					<p>Hello World</p>
					<p>Hello World</p>
				</Segment>
				<Menu type="tabular" attached="bottom">
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>

				<h3>Text</h3>
				<Menu type="text">
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>

				<h3>Vertical Basic</h3>
				<Menu vertical={true}>
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>

				<h3>Vertical Basic Pointing</h3>
				<Menu vertical={true} pointing={true}>
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>

				<h3>Vertical Secondary</h3>
				<Menu type="secondary" vertical={true}>
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>

				<h3>Vertical Secondary Pointing</h3>
				<Menu type="secondary" vertical={true} pointing={true}>
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>

				<h3>Vertical Tabular</h3>
				<Menu type="tabular" vertical={true}>
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>

				<h3>Vertical Text</h3>
				<Menu type="text" vertical={true}>
					<MenuItem state="active">Home</MenuItem>
					<MenuItem>Edit</MenuItem>
					<MenuItem>View</MenuItem>
				</Menu>

				<h3>Pagination</h3>
				<Menu type="pagination">
					<MenuItem state="active">1</MenuItem>
					<MenuItem>2</MenuItem>
					<MenuItem>...</MenuItem>
					<MenuItem>4</MenuItem>
					<MenuItem>5</MenuItem>
				</Menu>


				<Divider />

			</div>		
		);
	}
}