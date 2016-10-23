import React from 'react';

import Header from '../components/Header';
import Grid from '../collections/Grid';
import Row from '../collections/Row';
import Column from '../collections/Column';
import Menu from '../collections/Menu';
import Item from '../collections/Item';

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

				<Header size={2} divide={true} text="Menu" />

				<Menu itme={4} >
					<Item text="Brand"></Item>
					<Item text="Link"></Item>
					<Item text="Link"></Item>
					<Item text="Dropdown"></Item>

				</Menu>
			</div>		
		);
	}
}
