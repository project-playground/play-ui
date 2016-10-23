import React from 'react';

import Breadcrumb from '../components/Breadcrumb';
import Section from '../collections/Section';
import Divider from '../components/Divider';

export default class BreadcrumbView extends React.Component {
	render() {
		let dividerObj = {
			type: 'text',
			text: '<'
		};
		let dividerIcon = {
			type: 'icon',
			text: 'right angle icon'
		}
		return (
			<div>
				<h2>Breadcrumb</h2>
				<h3>Breadcrumb</h3>
				<Breadcrumb>
					<Section>a</Section>
					<Divider>/</Divider>
					<Section>b</Section>
					<Divider>/</Divider>
					<Section active={true}>c</Section>
				</Breadcrumb>

				<Breadcrumb divider={dividerIcon} >
					<div class="section">a</div>
					<div class="section">b</div>
					<div class="section">c</div>
				</Breadcrumb>
			</div>
		);
	}
}
