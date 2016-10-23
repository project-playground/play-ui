import React from 'react';

import Breadcrumb from '../components/Breadcrumb';
import Section from '../collections/Section';
import Divider from '../components/Divider';

export default class BreadcrumbView extends React.Component {
	render() {
		let dividerObj = {
			type: 'text',
			text: '/'
		};
		let dividerIcon = {
			type: 'icon',
			text: 'right angle'
		}
		return (
			<div>
				<h2>Breadcrumb</h2>
				<h3>Breadcrumb</h3>
				<Breadcrumb>
					<Section text="Home"></Section>
					<Divider breadcrumb={dividerObj}></Divider>
					<Section text="Store"></Section>
					<Divider breadcrumb={dividerObj}></Divider>
					<Section active={true} text="T-Shirt"></Section>
				</Breadcrumb>
				<Breadcrumb>
					<Section linkTo="#" text="Home"></Section>
					<Divider breadcrumb={dividerIcon}></Divider>
					<Section linkTo="" text="Store"></Section>
					<Divider breadcrumb={dividerIcon}></Divider>
					<Section active={true} text="T-Shirt"></Section>
				</Breadcrumb>

				<h3>Divider</h3>
				<Breadcrumb>
					<Section linkTo="#" text="Store"></Section>
					<Divider breadcrumb={dividerObj}></Divider>
					<Section linkTo="" text="Registration"></Section>
					<Divider breadcrumb={dividerObj}></Divider>
					<Section active={true} text="Personal Information"></Section>
				</Breadcrumb>

			</div>
		);
	}
}
