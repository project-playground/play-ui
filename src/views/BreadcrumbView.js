import React from 'react';

import Breadcrumb from '../components/Breadcrumb';
import Section from '../collections/Section';
import Divider from '../components/Divider';

export default class BreadcrumbView extends React.Component {
	render() {
		let dividerObj1 = {
			type: 'text',
			text: '/'
		};
		let dividerIcon1 = {
			type: 'icon',
			text: 'right angle'
		}
		let dividerIcon2 = {
			type: 'icon',
			text: 'right chevron'
		}
		let dividerIcon3 = {
			type: 'icon',
			text: 'right arrow'
		}
		return (
			<div>
				<h2>Breadcrumb</h2>
				<h3>Breadcrumb</h3>
				<Breadcrumb>
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerObj1}></Divider>
					<Section linkTo="#" text="Store"></Section>
					<Divider breadcrumb={dividerObj1}></Divider>
					<Section active={true} text="T-Shirt"></Section>
				</Breadcrumb>
				<br/>
				<Breadcrumb>
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerIcon1}></Divider>
					<Section linkTo="#" text="Store"></Section>
					<Divider breadcrumb={dividerIcon1}></Divider>
					<Section active={true} text="T-Shirt"></Section>
				</Breadcrumb>

				<Divider/>

				<h3>Divider</h3>
				<Breadcrumb>
					<Section linkTo="#" text="Store"></Section>
					<Divider breadcrumb={dividerObj1}></Divider>
					<Section linkTo="#" text="Registration"></Section>
					<Divider breadcrumb={dividerObj1}></Divider>
					<Section active={true} text="Personal Information"></Section>
				</Breadcrumb>
				<br/>
				<Breadcrumb>
					<Section linkTo="#" text="Store"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section linkTo="#" text="Registration"></Section>
					<Divider breadcrumb={dividerIcon3}></Divider>
					<Section active={true} text="Personal Information"></Section>
				</Breadcrumb>

				<Divider/>

				<h3>Section</h3>
				<Breadcrumb>
					<Section text="Home"></Section>
					<Divider breadcrumb={dividerObj1}></Divider>
					<Section active={true} text="Search"></Section>
				</Breadcrumb>

				<Divider/>

				<h3>Link</h3>
				<Breadcrumb>
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerObj1}></Divider>
					<Section linkTo="#" active={true} text="Search for: paper towels"></Section>
				</Breadcrumb>

				<Divider/>

				<h3>Active</h3>
				<Breadcrumb>
					<Section linkTo="#" text="Products"></Section>
					<Divider breadcrumb={dividerObj1}></Divider>
					<Section active={true} text="Paper Towels"></Section>
				</Breadcrumb>

				<Divider/>

				<h3>Variations</h3>
				<Breadcrumb size="mini">
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section linkTo="#" text="Registration"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section active={true} text="Personal Information"></Section>
				</Breadcrumb>
				<br/>
				<Breadcrumb size="tiny">
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section linkTo="#" text="Registration"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section active={true} text="Personal Information"></Section>
				</Breadcrumb>
				<br/>
				<Breadcrumb size="small">
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section linkTo="#" text="Registration"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section active={true} text="Personal Information"></Section>
				</Breadcrumb>
				<br/>
				<Breadcrumb size="medium">
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section linkTo="#" text="Registration"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section active={true} text="Personal Information"></Section>
				</Breadcrumb>
				<br/>
				<Breadcrumb size="large">
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section linkTo="#" text="Registration"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section active={true} text="Personal Information"></Section>
				</Breadcrumb>
				<br/>
				<Breadcrumb size="big">
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section linkTo="#" text="Registration"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section active={true} text="Personal Information"></Section>
				</Breadcrumb>
				<br/>
				<Breadcrumb size="huge">
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section linkTo="#" text="Registration"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section active={true} text="Personal Information"></Section>
				</Breadcrumb>
				<br/>
				<Breadcrumb size="massive">
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section linkTo="#" text="Registration"></Section>
					<Divider breadcrumb={dividerIcon2}></Divider>
					<Section active={true} text="Personal Information"></Section>
				</Breadcrumb>
				
			</div>
		);
	}
}
