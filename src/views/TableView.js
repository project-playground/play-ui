import React from 'react';

import Table from '../collections/Table';
import Thead from '../collections/Thead';
import Tbody from '../collections/Tbody';
import Tfoot from '../collections/Tfoot';
import Tr from '../collections/Tr';
import Th from '../collections/Th';
import Td from '../collections/Td';

import Menu from '../collections/Menu';
import LinkItem from '../collections/LinkItem';

import Rating from '../modules/Rating';
import Checkbox from '../modules/Checkbox';

import Icon from '../components/Icon';
import Header from '../components/Header';
import Divider from '../components/Divider';

export default class ModalView extends React.Component {

    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div>
				<Header size={2} text="Table" />
				<Header size={3} text="Table" subHeader="A standard table" />
				
                <Table celled={true}>
                    <Thead>
                        <Tr>
                            <Th>Header</Th>
                            <Th>Header</Th>
                            <Th>Header</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>First</Td>
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
                    <Tfoot>
                        <Tr>
                            <Th colspan={3}>
                                <Menu type="pagination">
                                    <LinkItem icon="left chevron" />
                                    <LinkItem text="1" state="active" />
                                    <LinkItem text="2" />
                                    <LinkItem text="3" />
                                    <LinkItem text="4" />
                                    <LinkItem icon="right chevron" />
                                </Menu>
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
                
				<Divider />

                <Table celled={true} padded="padded">
                    <Thead>
                        <Tr>
                            <Th>Evidence Rating</Th>
                            <Th>Effect</Th>
                            <Th>Efficacy</Th>
                            <Th>Consensus</Th>
                            <Th>Comments</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Header size={2} align="center" text="A" />
                            </Td>
                            <Td>Power Output</Td>
                            <Td>
                                <Rating data={ {rating: 3, max: 3} } icon="star" />
                            </Td>
                            <Td>
                                80%<br/>
                                <a href="#">18 studies</a>
                            </Td>
                            <Td>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Header size={2} align="center" text="A" />
                            </Td>
                            <Td>Weight</Td>
                            <Td>
                                <Rating data={ {rating: 2, max: 3} } icon="star" />
                            </Td>
                            <Td>
                                100%<br/>
                                <a href="#">65 studies</a>
                            </Td>
                            <Td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</Td>
                        </Tr>
                    </Tbody>
                </Table>

				<Divider />

                <Table celled={true} basic="very" collapsing={true}>
                    <Thead>
                        <Tr>
                            <Th>Employee</Th>
                            <Th>Correct Guesses</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Header size={4} text="Lena" img="/assets/avatar/lena.png" subHeader="Human Resources"/>
                            </Td>
                            <Td>22</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Header size={4} text="Matthew" img="/assets/avatar/matthew.png" subHeader="Fabric Design"/>
                            </Td>
                            <Td>15</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Header size={4} text="Lindsay" img="/assets/avatar/lindsay.png" subHeader="Lindsay"/>
                            </Td>
                            <Td>12</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Header size={4} text="Mark" img="/assets/avatar/mark.png" subHeader="Executive"/>
                            </Td>
                            <Td>11</Td>
                        </Tr>
                    </Tbody>
                </Table>

				<Divider />

                <Table celled={true} striped={true}>
                    <Thead>
                        <Tr>
                            <Th colspan={3}>Git Repository</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td collapsing={true}>
                                <Icon icon="folder" /> node_modules
                            </Td>
                            <Td>Initial commit</Td>
                            <Td collapsing={true} aligned="right">10 hours ago</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Icon icon="folder" /> test
                            </Td>
                            <Td>Initial commit</Td>
                            <Td aligned="right">10 hours ago</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Icon icon="folder" /> build
                            </Td>
                            <Td>Initial commit</Td>
                            <Td aligned="right">10 hours ago</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Icon icon="file outline" /> package.json
                            </Td>
                            <Td>Initial commit</Td>
                            <Td aligned="right">10 hours ago</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Icon icon="file outline" /> Gruntfile.js
                            </Td>
                            <Td>Initial commit</Td>
                            <Td aligned="right">10 hours ago</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Divider />

                <Header size={3} text="Definition" subHeader="A table may be formatted to emphasize a first column that defines a rows content" />

                <Table definition={true}>
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Arguments</Th>
                            <Th>Description</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>reset rating</Td>
                            <Td>None</Td>
                            <Td>Resets rating to default value</Td>
                        </Tr>
                        <Tr>
                            <Td>set rating</Td>
                            <Td>rating (integer)</Td>
                            <Td>Sets the current star rating to specified value</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Divider />

                <Table compact="compact" celled={true} definition={true}>
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Name</Th>
                            <Th>Registration Date</Th>
                            <Th>E-mail address</Th>
                            <Th>Premium Plan</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td collapsing={true}>
                                <Checkbox type="slider" inputType="radio" fitted={true} />
                            </Td>
                            <Td>John Lilki</Td>
                            <Td>September 14,2013</Td>
                            <Td>jhlilk22@yahoo.com</Td>
                            <Td>No</Td>
                        </Tr>
                        <Tr>
                            <Td collapsing={true}>
                                <Checkbox type="slider" inputType="radio" fitted={true} />
                            </Td>
                            <Td>Jamie Harington</Td>
                            <Td>January 11, 2014</Td>
                            <Td>jamieharingonton@yahoo.com</Td>
                            <Td>Yes</Td>
                        </Tr>
                        <Tr>
                            <Td collapsing={true}>
                                <Checkbox type="slider" inputType="radio" fitted={true} />
                            </Td>
                            <Td>Jill Lewis</Td>
                            <Td>May 11, 2014</Td>
                            <Td>jilsewris22@yahoo.com</Td>
                            <Td>Yes</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Divider />

                <Header size={3} text="Structured" subHeader="A table can be formatted to display complex structured data" />
                
                <Table structured={true} celled={true}>
                    <Thead>
                        <Tr>
                            <Th rowspan={2}>Name</Th>
                            <Th rowspan={2}>Type</Th>
                            <Th rowspan={2}>Files</Th>
                            <Th colspan={3}>Languages</Th>
                        </Tr>
                        <Tr>
                            <Th>Ruby</Th>
                            <Th>JavaScript</Th>
                            <Th>Python</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Alpha Team</Td>
                            <Td>Project 1</Td>
                            <Td aligned="right">2</Td>
                            <Td aligned="center">
                                <Icon icon="checkmark" size="large" colored="green"/>
                            </Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td rowspan={3}>Beta Team</Td>
                            <Td>Project 1</Td>
                            <Td aligned="right">52</Td>
                            <Td aligned="center">
                                <Icon icon="checkmark" size="large" colored="green"/>
                            </Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Project 2</Td>
                            <Td aligned="right">12</Td>
                            <Td></Td>
                            <Td aligned="center">
                                <Icon icon="checkmark" size="large" colored="green"/>
                            </Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>Project 3</Td>
                            <Td aligned="right">21</Td>
                            <Td aligned="center">
                                <Icon icon="checkmark" size="large" colored="green"/>
                            </Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Divider />

                <Header size={3} text="States" />

                <Header size={4} text="Positive / Negative" subHeader="A cell or row may let a user know whether a value is good or bad" />
                
                <Table celled={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>No Name Specified</Td>
                            <Td>Unknown</Td>
                            <Td state="negative">None</Td>
                        </Tr>
                        <Tr state="positive">
                            <Td>Jimmy</Td>
                            <Td><Icon icon="checkmark"/> Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie</Td>
                            <Td>Unknown</Td>
                            <Td state="positive"><Icon icon="close"/> Requires call</Td>
                        </Tr>
                        <Tr state="negative">
                            <Td>Jill</Td>
                            <Td>Unknown</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Error" subHeader="A cell or row may call attention to an error or a negative value" />
                
                <Table celled={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>No Name Specified</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr state="error">
                            <Td>Jimmy</Td>
                            <Td>Cannot pull data</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie</Td>
                            <Td>Approved</Td>
                            <Td state="error"><Icon icon="attention"/> Classified</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Warning" subHeader="A cell or row may warn a user" />
                
                <Table celled={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>No Name Specified</Td>
                            <Td>Unknown</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr state="warning">
                            <Td>Jimmy</Td>
                            <Td><Icon icon="attention"/> Requires Action</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie</Td>
                            <Td>Unknown</Td>
                            <Td state="warning"><Icon icon="attention"/> Hostile</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill</Td>
                            <Td>Unknown</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Active" subHeader="A cell or row can be active or selected by a user" />
                
                <Table celled={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>No Name Specified</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr state="active">
                            <Td>Jimmy</Td>
                            <Td>Selected</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td state="active">Jill</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Disabled" subHeader="A cell can be disabled" />
                
                <Table celled={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr state="disabled">
                            <Td>No Name Specified</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jimmy</Td>
                            <Td>Selected</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td state="disabled">Jill</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={3} text="Variations" />

                <Header size={4} text="Single Line" subHeader="A table can specify that its cell contents should remain on a single line, and not wrap." />

                <Table singleLine={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Registration Date</Th>
                            <Th>E-mail address</Th>
                            <Th>Premium Plan</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>September 14,2013</Td>
                            <Td>jhlilk22@yahoo.com</Td>
                            <Td>No</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>January 11, 2014</Td>
                            <Td>jamieharingonton@yahoo.com</Td>
                            <Td>Yes</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>May 11, 2014</Td>
                            <Td>jilsewris22@yahoo.com</Td>
                            <Td>Yes</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Fixed" subHeader="A table can use table-layout: fixed a special faster form of table rendering that does not resize table cells based on content." />

                <Table fixed={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Description</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td>Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Fixed & Single line" />

                <Table fixed={true} singleLine={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Description</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>This is much too long to fit I'm sorry about that</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Shorter description</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td>Shorter description</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Stacking" subHeader="A table can specify how it stacks table content responsively" />

                <Table stackable="unstackable">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th aligned="right">Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td aligned="right">None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td aligned="right">Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td aligned="right">None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table stackable="stackable">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th aligned="right">Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td aligned="right">None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td aligned="right">Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td aligned="right">None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Selectable Row" subHeader="A table can have its rows appear selectable" />
                
                <Table selectable={true} celled={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr state="warning">
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td state="positive">Approved</Td>
                            <Td state="warning">Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td state="error">Denied</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table selectable={true} inverted={true} celled={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Selectable Cell" subHeader="A table cell can be selectable" />
                
                <Table celled={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td selectable={true}>Edit</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td selectable={true}>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td selectable={true}>None</Td>
                        </Tr>
                        <Tr state="warning">
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td selectable={true}>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td state="positive">Approved</Td>
                            <Td selectable={true} state="warning">Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td state="error">Denied</Td>
                            <Td selectable={true}>None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table celled={true} inverted={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td selectable={true}>Edit</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td selectable={true}>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td selectable={true}>None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Vertical Alignment" subHeader="A table header, row, or cell can adjust its vertical alignment" />
                
                <Table striped={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr valigned="top">
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td valigned="top">
                                Notes<br/>
                                1<br/>
                                2<br/>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td valigned="bottom">Approved</Td>
                            <Td>
                                Notes<br/>
                                1<br/>
                                2<br/>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Text Alignment" subHeader="A table header, row, or cell can adjust its text alignment" />
                
                <Table striped={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th aligned="right">Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr aligned="center">
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td aligned="right">None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td aligned="right">Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td aligned="right">None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Striped" subHeader="A table can stripe alternate rows of content with a darker color to increase contrast" />

                <Table striped={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Registration Date</Th>
                            <Th>E-mail address</Th>
                            <Th>Premium Plan</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>September 14,2013</Td>
                            <Td>jhlilk22@yahoo.com</Td>
                            <Td>No</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>January 11, 2014</Td>
                            <Td>jamieharingonton@yahoo.com</Td>
                            <Td>Yes</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>May 11, 2014</Td>
                            <Td>jilsewris22@yahoo.com</Td>
                            <Td>Yes</Td>
                        </Tr>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>September 14,2013</Td>
                            <Td>jhlilk22@yahoo.com</Td>
                            <Td>No</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>January 11, 2014</Td>
                            <Td>jamieharingonton@yahoo.com</Td>
                            <Td>Yes</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>May 11, 2014</Td>
                            <Td>jilsewris22@yahoo.com</Td>
                            <Td>Yes</Td>
                        </Tr>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>September 14,2013</Td>
                            <Td>jhlilk22@yahoo.com</Td>
                            <Td>No</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>January 11, 2014</Td>
                            <Td>jamieharingonton@yahoo.com</Td>
                            <Td>Yes</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>May 11, 2014</Td>
                            <Td>jilsewris22@yahoo.com</Td>
                            <Td>Yes</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Celled" subHeader="A table may be divided each row into separate cells" />

                <Table celled={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>3 People</Th>
                            <Th>2 Approved</Th>
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>

                <Header size={4} text="Basic" subHeader="A table can reduce its complexity to increase readability." />

                <Table basic='basic'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table basic='very'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Collapsing Cell" subHeader="A cell can be collapsing so that it only uses as much space as required" />

                <Table>
                    <Tbody>
                        <Tr>
                            <Td collapsing={true}>
                                <Icon icon="folder" /> node_modules
                            </Td>
                            <Td>Initial commit</Td>
                            <Td collapsing={true} aligned="right">10 hours ago</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Icon icon="folder" /> test
                            </Td>
                            <Td>Initial commit</Td>
                            <Td aligned="right">10 hours ago</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Icon icon="folder" /> build
                            </Td>
                            <Td>Initial commit</Td>
                            <Td aligned="right">10 hours ago</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Column Count" subHeader="A table can specify its column count to divide its content evenly" />

                <Table columnCount={5}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Age</Th>
                            <Th>Gender</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>22</Td>
                            <Td>Male</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>32</Td>
                            <Td>Male</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td>22</Td>
                            <Td>Female</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>3 People</Th>
                            <Th>2 Approved</Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>

                <Header size={4} text="Column Width" subHeader="A table can specify the width of individual columns independently." />

                <Table>
                    <Thead>
                        <Tr>
                            <Th column={10}>Name</Th>
                            <Th column={6}>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Collapsing" subHeader="A table can be collapsing, taking up only as much space as its rows." />

                <Table collapsing={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>3 People</Th>
                            <Th>2 Approved</Th>
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>

                <Header size={4} text="Colored" subHeader="A table can be given a color to distinguish it from other tables." />

                <Table colored="red">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table colored="orange">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table colored="yellow">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table colored="olive">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table colored="green">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table colored="teal">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table colored="blue">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table colored="violet">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table colored="purple">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table colored="pink">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table colored="grey">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table colored="black">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Inverted Colored" subHeader="A table's colors can be inverted" />

                <Table inverted={true} colored="red">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table inverted={true} colored="orange">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table inverted={true} colored="yellow">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table inverted={true} colored="olive">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table inverted={true} colored="green">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table inverted={true} colored="teal">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table inverted={true} colored="blue">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table inverted={true} colored="violet">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table inverted={true} colored="purple">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table inverted={true} colored="pink">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table inverted={true} colored="grey">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table inverted={true} colored="black">
                    <Thead>
                        <Tr>
                            <Th>Food</Th>
                            <Th>Calories</Th>
                            <Th>Protein</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apples</Td>
                            <Td>200</Td>
                            <Td>0g</Td>
                        </Tr>
                        <Tr>
                            <Td>Orange</Td>
                            <Td>310</Td>
                            <Td>0g</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Sortable" subHeader="A table may allow a user to sort contents by clicking on a table header." />

                <Table sortable={true} celled={true}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>Jill Lewis</Td>
                            <Td>Denied</Td>
                            <Td>None</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>3 People</Th>
                            <Th>2 Approved</Th>
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>

                <Header size={4} text="Padded" subHeader="A table may sometimes need to be more padded for legibility" />

                <Table padded='padded'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Jamie was not interested in purchasing our product.</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table padded='very'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Jamie was not interested in purchasing our product.</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Header size={4} text="Compact" subHeader="A table may sometimes need to be more compact to make more rows visible at a time" />

                <Table compact="compact">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Table compact="very">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Status</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                        <Tr>
                            <Td>John Lilki</Td>
                            <Td>Approved</Td>
                            <Td>None</Td>
                        </Tr>
                        <Tr>
                            <Td>Jamie Harington</Td>
                            <Td>Approved</Td>
                            <Td>Requires call</Td>
                        </Tr>
                    </Tbody>
                </Table>

			</div>		
		);
	}
}