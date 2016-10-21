import React from 'react';

import Container from '../components/Container';
import Segments from '../components/Segments';
import Segment from '../components/Segment';

import Grid from '../collections/Grid';
import Row from '../collections/Row';
import Column from '../collections/Column';

import Table from '../collections/Table';
import Thead from '../collections/Thead';
import Tbody from '../collections/Tbody';
import Tr from '../collections/Tr';
import Th from '../collections/Th';
import Td from '../collections/Td';

import Menu from '../collections/Menu';
import LinkItem from '../collections/LinkItem';
import Message from '../components/Message';

import Header from '../components/Header';
import Divider from '../components/Divider';

export default class AttachedView extends React.Component {
	render() {
		return (
			<div>
				<Container>
					<Header size={2} text="Attached Content" />
					<Grid column={3}>
						<Column>
							<Segment attached="top">Segment 1</Segment>
							<Segment attached="attached">Segment 2</Segment>
							<Segment attached="attached">Segment 3</Segment>
							<Segment attached="bottom">Segment 4</Segment>
							
							<Segments>
								<Segment>Top</Segment>
								<Segments>
									<Segment>Nested Top</Segment>
									<Segment>Nested Middle</Segment>
									<Segment>Nested Bottom</Segment>
								</Segments>
								<Segment>Middle</Segment>
								<Segments horizontal={true}>
									<Segment>Top</Segment>
									<Segment>Middle</Segment>
									<Segment>Bottom</Segment>
								</Segments>
								<Segment>Bottom</Segment>
							</Segments>
						</Column>
						<Column>
							<Table attached="top" basic="basic">
								<Thead>
									<Tr>
										<Th>Header</Th>
										<Th>Header</Th>
										<Th>Header</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
								</Tbody>
							</Table>
							<Table attached="attached">
								<Tbody>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
								</Tbody>
							</Table>
							<Table attached="attached" celled={true} selectable={true}>
								<Tbody>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
								</Tbody>
							</Table>
							<Table attached="bottom" celled={true}>
								<Thead>
									<Tr>
										<Th>Header</Th>
										<Th>Header</Th>
										<Th>Header</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
									<Tr>
										<Td>Cell</Td>
										<Td>Cell</Td>
										<Td>Cell</Td>
									</Tr>
								</Tbody>
							</Table>
						</Column>
						<Column>
							<Menu attached="top" item={3}>
								<LinkItem>Item</LinkItem>
								<LinkItem>Item</LinkItem>
								<LinkItem>Item</LinkItem>
							</Menu>
							<Menu attached="attached" item={3}>
								<LinkItem>Item</LinkItem>
								<LinkItem>Item</LinkItem>
								<LinkItem>Item</LinkItem>
							</Menu>
							<Menu attached="attached" item={3}>
								<LinkItem>Item</LinkItem>
								<LinkItem>Item</LinkItem>
								<LinkItem>Item</LinkItem>
							</Menu>
							<Menu attached="bottom" item={3}>
								<LinkItem>Item</LinkItem>
								<LinkItem>Item</LinkItem>
								<LinkItem>Item</LinkItem>
							</Menu>
							
							<Menu type="tabular" attached="top">
								<LinkItem state="active">Active Item</LinkItem>
								<LinkItem>Item</LinkItem>
								<LinkItem>Item</LinkItem>
							</Menu>
							<Segment attached="bottom">Segment</Segment>
	
							<Menu attached="top">
								<LinkItem state="active">Active Item</LinkItem>
								<LinkItem>Item</LinkItem>
								<LinkItem>Item</LinkItem>
							</Menu>
							<Segment attached="bottom">Segment</Segment>
						</Column>
					</Grid>
				</Container>
				
				<Container>
					<Header size={2} text="Header Group" />
					
					<Header size={4} text="Top Block Header" attached="top" block={true} />
					<Segment attached="bottom">Segment</Segment>
					
					<Divider section={true} />
					
					<Segment attached="top">Segment</Segment>
					<Header size={4} text="Bottom Block Header" attached="bottom" block={true} />
					
					<Divider section={true} />

					<Header size={4} text="Top Block Header" attached="top" block={true} />
					<Segment attached="attached">Segment</Segment>
					<Header size={4} text="Middle Block Header" attached="attached" block={true} />
					<Segment attached="attached">Segment</Segment>
					<Header size={4} text="Bottom Block Header" attached="bottom" block={true} />

					<Divider section={true} />

					<Header size={2} text="Mixed Attached Content" />
					
					<Segment attached="top">Segment</Segment>
					<Menu attached="attached" item={3}>
						<LinkItem>Item</LinkItem>
						<LinkItem>Item</LinkItem>
						<LinkItem>Item</LinkItem>
					</Menu>
					<Segment attached="attached">1</Segment>
					<Message attached="attached" text="Message" level="info" icon="help circle" />
					<Table attached="bottom">
						<Thead>
							<Tr>
								<Th>Header</Th>
								<Th>Header</Th>
								<Th>Header</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Cell</Td>
								<Td>Cell</Td>
								<Td>Cell</Td>
							</Tr>
							<Tr>
								<Td>Cell</Td>
								<Td>Cell</Td>
								<Td>Cell</Td>
							</Tr>
							<Tr>
								<Td>Cell</Td>
								<Td>Cell</Td>
								<Td>Cell</Td>
							</Tr>
						</Tbody>
					</Table>
					
					<Divider section={true} />
					
					<Message attached="top" text="Message" level="warning" icon="help circle" />
					<Table attached="attached">
						<Thead>
							<Tr>
								<Th>Header</Th>
								<Th>Header</Th>
								<Th>Header</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Cell</Td>
								<Td>Cell</Td>
								<Td>Cell</Td>
							</Tr>
							<Tr>
								<Td>Cell</Td>
								<Td>Cell</Td>
								<Td>Cell</Td>
							</Tr>
							<Tr>
								<Td>Cell</Td>
								<Td>Cell</Td>
								<Td>Cell</Td>
							</Tr>
						</Tbody>
					</Table>
					<Menu attached="bottom" item={3}>
						<LinkItem>Item</LinkItem>
						<LinkItem>Item</LinkItem>
						<LinkItem>Item</LinkItem>
					</Menu>
					
					<Divider section={true} />
					
					<Menu attached="top" inverted={true} item={3}>
						<LinkItem>Item</LinkItem>
						<LinkItem>Item</LinkItem>
						<LinkItem>Item</LinkItem>
					</Menu>
					<Table attached="attached" inverted={true}>
						<Thead>
							<Tr>
								<Th>Header</Th>
								<Th>Header</Th>
								<Th>Header</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Cell</Td>
								<Td>Cell</Td>
								<Td>Cell</Td>
							</Tr>
							<Tr>
								<Td>Cell</Td>
								<Td>Cell</Td>
								<Td>Cell</Td>
							</Tr>
							<Tr>
								<Td>Cell</Td>
								<Td>Cell</Td>
								<Td>Cell</Td>
							</Tr>
						</Tbody>
					</Table>
					<Segment attached="bottom" inverted={true}>Segment</Segment>
										
				</Container>
			</div>		
		);
	}
}
