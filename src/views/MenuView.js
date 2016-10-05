import React from 'react';

import Menu from '../collections/Menu';
import Item from '../collections/Item';
import LinkItem from '../collections/LinkItem';
import DropdownItem from '../collections/DropdownItem';

import Header from '../components/Header';
import Segment from '../components/Segment';
import Divider from '../components/Divider';
import Input from '../components/Input';

export default class MenuView extends React.Component {
	render() {

		return (
			<div>
				<Header type="h2" text="Menu"/>
				<Header type="h3" text="Menu"/>
				<Menu>
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<Header type="h3" text="Pointing"/>
				<Menu pointing={true}>
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<Header type="h3" text="Secondary"/>
				<Menu type="secondary">
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Secondary Pointing</h3>
				<Menu type="secondary" pointing={true}>
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Tabular</h3>
				<Menu type="tabular">
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Tabular & attached Segment</h3>
				<Menu type="tabular" attached="top">
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
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
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Text</h3>
				<Menu type="text">
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Vertical Basic</h3>
				<Menu vertical={true}>
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Vertical Basic Pointing</h3>
				<Menu vertical={true} pointing={true}>
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Vertical Secondary</h3>
				<Menu type="secondary" vertical={true}>
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Vertical Secondary Pointing</h3>
				<Menu type="secondary" vertical={true} pointing={true}>
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Vertical Tabular</h3>
				<Menu type="tabular" vertical={true}>
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Vertical Text</h3>
				<Menu type="text" vertical={true}>
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Pagination</h3>
				<Menu type="pagination">
					<LinkItem text="1" state="active" />
					<LinkItem text="2" />
					<LinkItem text="..." />
					<LinkItem text="4" />
					<LinkItem text="5" />
				</Menu>

				<Divider />

				<h3>HeaderItem</h3>
				<Menu>
					<Item text="Header" />
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />
				</Menu>

				<h3>Icon Item</h3>
				<Menu>
					<Item text="Header" icon="wrench" />
					<LinkItem text="Home" icon="home" />
					<LinkItem text="Edit" icon="edit" />
					<LinkItem text="View" icon="book" />
				</Menu>

				<h3>Right Sub Menu</h3>
				<Menu>
					<LinkItem text="Home" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />

					<Menu sub={true} align="right">
						<Item text="Sub1" />
						<LinkItem text="Sub2" />
						<LinkItem text="Sub3" />
					</Menu>
				</Menu>

				<h3>Custom Sub Menu</h3>
				<Menu>
					<LinkItem text="Home" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />

					<Menu sub={true} align="right">
						<Item><Input icon="search" placeholder="input here..." transparent={true}/></Item>
					</Menu>
				</Menu>

				<Menu type="secondary" pointing={true}>
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />

					<Menu sub={true} align="right">
						<Item><Input icon="search" placeholder="input here..." transparent={true}/></Item>
					</Menu>
				</Menu>

				<Menu type="tabular">
					<LinkItem text="Home" state="active" />
					<LinkItem text="Edit" />
					<LinkItem text="View" />

					<Menu sub={true} align="right">
						<Item><Input icon="search" placeholder="input here..." transparent={true}/></Item>
					</Menu>
				</Menu>

				<h3>Dropdown Menu</h3>
				<Divider />
				<Menu>
					<LinkItem text="Home" />
					<LinkItem text="Edit" />
					<DropdownItem text="View">
						<LinkItem text="Home" />
						<LinkItem text="Edit" />
						<LinkItem text="View" />
					</DropdownItem>
				</Menu>

				<h3>Dropdown Menu</h3>
				<h3>Dropdown Menu</h3>
				<h3>Dropdown Menu</h3>
				<h3>Dropdown Menu</h3>
				<h3>Dropdown Menu</h3>
				<h3>Dropdown Menu</h3>
				<h3>Dropdown Menu</h3>
				<h3>Dropdown Menu</h3>
			</div>
		);
	}
}
