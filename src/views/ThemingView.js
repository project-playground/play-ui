import React from 'react';

import Header from '../components/Header';
import Grid from '../collections/Grid';
import Row from '../collections/Row';
import Column from '../collections/Column';
import Menu from '../collections/Menu';
import Item from '../collections/Item';
import LinkItem from '../collections/LinkItem';
import Dropdown from '../modules/Dropdown';
import DropdownItem from '../collections/DropdownItem';
import Divider from '../components/Divider';
import Input from '../components/Input';
import Button from '../components/Button';
import Buttons from '../components/Buttons';

export default class ThemingView extends React.Component {
	render() {
		return (
			<div>
				<Header size={1} text="Theming Examples" align="center" />

				<Divider>
					<Header size={2} divide={true} text="Site" />
					<Grid column={3} stackable={true}>
						<Column>
							<Header size={1} text="Heading 1" />
							<Header size={2} text="Heading 2" />
							<Header size={3} text="Heading 3" />
							<Header size={4} text="Heading 4" />
							<Header size={5} text="Heading 5" />
							<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
						</Column>
						<Column>
							<Header size={2} text="Example body text" />
							<p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
							<p><small>This line of text is meant to be treated as fine print.</small></p>
							<p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
							<p>The following snippet of text is <em>rendered as italicized text</em>.</p>
							<p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>				
						</Column>
						<Column>
							<Grid column={3} stackable={true} padded={true} valign="middle" centered={true} aligned={true}>
								<Column colored="red">Red</Column>
								<Column colored="orange">Orange</Column>
								<Column colored="yellow">Yellow</Column>
								<Column colored="olive">Olive</Column>
								<Column colored="green">Green</Column>
								<Column colored="teal">Teal</Column>
								<Column colored="blue">Blue</Column>
								<Column colored="violet">Violet</Column>
								<Column colored="purple">Purple</Column>
								<Column colored="pink">Pink</Column>
								<Column colored="brown">Brown</Column>
								<Column colored="grey">Grey</Column>
								<Column colored="black">Black</Column>
							</Grid>
						</Column>
					</Grid>
				</Divider>

				<Divider>
					<Header size={2} divide={true} text="Menu" />

					<Menu>
						<Item text="Brand"></Item>
						<LinkItem text="Link" state="active"></LinkItem>
						<LinkItem text="Link"></LinkItem>
						<Dropdown text="Dropdown">
								<LinkItem text="Action"/>
								<LinkItem text="Another Action"/>
								<LinkItem text="Something else here"/>
								<LinkItem text="Action"/>
								<Divider></Divider>
								<LinkItem text="Separated Link"/>
								<Divider></Divider>
								<LinkItem text="One more separated link"/>
						</Dropdown>
						<Menu sub={true} align="right">
							<Item>
								<Input placeholder="Search" icon="search"></Input>
								<Button text="Submit"></Button>
							</Item>
						</Menu>
					</Menu>
					<Divider/>

					<Menu inverted={true} >
						<Item text="Brand"></Item>
						<LinkItem text="Link"></LinkItem>
						<LinkItem text="Link" state="active"></LinkItem>
						<Dropdown text="Dropdown">
								<LinkItem text="Action"/>
								<LinkItem text="Another Action"/>
								<LinkItem text="Something else here"/>
								<LinkItem text="Action"/>
								<Divider></Divider>
								<LinkItem text="Separated Link"/>
								<Divider></Divider>
								<LinkItem text="One more separated link"/>
						</Dropdown>
						<Menu sub={true} align="right">
							<Item>
								<Input placeholder="Search" icon="search"></Input>
							</Item>
							<LinkItem text="Link"></LinkItem>
						</Menu>
					</Menu>
					<Divider/>

					<Menu type="secondary">
						<Item text="Brand" state="active"></Item>
						<LinkItem text="Link"></LinkItem>
						<Dropdown text="Dropdown">
								<LinkItem text="Action"/>
								<LinkItem text="Another Action"/>
								<LinkItem text="Something else here"/>
								<LinkItem text="Action"/>
								<Divider></Divider>
								<LinkItem text="Separated Link"/>
								<Divider></Divider>
								<LinkItem text="One more separated link"/>
						</Dropdown>
						<Menu sub={true} align="right">
							<Item>
								<Input placeholder="Search" icon="search"></Input>
								<Button text="Submit"></Button>
							</Item>
							<LinkItem text="Link"></LinkItem>
						</Menu>
					</Menu>
					<Divider/>

					<Grid column={2} stackable={true}>
						<Column>
							<Menu type="secondary" pointing={true}>
								<LinkItem text="Home" state="active" />
								<LinkItem text="Edit" />
								<LinkItem text="View" />
							</Menu>
						</Column>
						<Column>
							<Menu type="tabular">
								<LinkItem text="Home" state="active" />
								<LinkItem text="Edit" />
								<LinkItem text="View" />
							</Menu>
						</Column>
					</Grid>
					<Divider/>

					<Menu pointing={true}>
						<LinkItem text="Home" state="active" />
						<LinkItem text="Edit" />
						<LinkItem text="View" />
						<Menu sub={true} align="right">
							<Item text="Right Text" />
						</Menu>
					</Menu>
				</Divider>

				<Divider>
					<Header size={2} divide={true} text="Buttons" />
					<Divider/>

					<Button text="Default" />
					<Button text="Primary" colored="primary" />
					<Button text="Secondary" colored="secondary" />
					<Button text="Basic" basic={true} />
					<Button text="Compact" compact={true} />
					<Divider fitted={true} />

					<Button icon="cloud" />
					<Buttons><Button text="Labeled" /><Button icon="heart"/></Buttons>
					<Buttons><Button icon="heart"/><Button text="Labeled" /></Buttons>
					<Divider fitted={true} />

					<Button text="Disabled" state="disabled" />
					<Button text="Active" state="loading" />
					<Divider fitted={true} />

					<Buttons>
						<Button text="1"/>
						<Button text="2"/>
						<Button text="3" />
					</Buttons>
					<Buttons icon={true}>
						<Button icon="align left" />
						<Button icon="align center" />
						<Button icon="align right" />
						<Button icon="align justify" />
					</Buttons>
					<Buttons condition="or">
						<Button text="1"/>
						<Button text="2" />
					</Buttons>
					<Divider fitted={true}/>
					
					<Button text="Mini" size="mini" />
					<Button text="Tiny" size="tiny" />
					<Button text="Small" size="small" />
					<Button text="Large" size="large" />
					<Button text="Big" size="big" />
					<Button text="Huge" size="huge" />
					<Button text="Massive" size="massive" />
					<Divider />

					<Button text="Yellow" colored="yellow" />
					<Button text="Orange" colored="orange" />
					<Button text="Green" colored="green" />
					<Button text="Teal" colored="teal" />
					<Button text="Blue" colored="blue" />
					<Button text="Purple" colored="purple" />
					<Button text="Pink" colored="pink" />
					<Button text="Red" colored="red" />
					<Button text="Black" colored="black" />
					<Divider fitted={true}/>
					
				</Divider>

				<Divider>
					<Header size={2} divide={true} text="Table" />
				</Divider>

				<Divider>
					<Header size={2} divide={true} text="Input" />
				</Divider>
			</div>		
		);
	}
}
