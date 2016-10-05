import React from 'react';

import Dropdown from '../modules/Dropdown';
import LinkItem from '../collections/LinkItem';
import DropdownItem from '../collections/DropdownItem';
import Item from '../collections/Item';
import Menu from '../collections/Menu';

import Header from '../components/Header';
import Divider from '../components/Divider';

export default class DropdownView extends React.Component {
	render() {
		return (
			<div>
				<Header size={2} text="Dropdown" />

				<Header size={3} text="Dropdown" />
				<Dropdown text="HelloWorld">
					<Item text="Menu1" description="ctrl + 1" />
					<Item text="Menu2" description="ctrl + 2" />
					<Item text="Menu3" description="ctrl + 3" />
					<Divider />
					<DropdownItem text="HelloWorld">
						<Item text="Sub Menu1" description="ctrl + alt + 1" />
						<Item text="Sub Menu2" description="ctrl + alt + 2" />
						<Item text="Sub Menu3" description="ctrl + alt + 3" />
					</DropdownItem>
				</Dropdown>

				<Header size={3} text="Selection" />
				<Dropdown type="selection">
					<Item text="Menu1" />
					<Item text="Menu2" />
				</Dropdown>


				<Divider />
			</div>
		);
	}
}
