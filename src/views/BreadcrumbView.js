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
			text: 'right angle'
		}
		return (
			<div>
				<h2>Breadcrumb</h2>
				<h3>Breadcrumb</h3>
				<Breadcrumb>
					<Section text="a"></Section>
					<Divider breadcrumb={dividerObj}>/</Divider>
					<Section text="b"></Section>
					<Divider breadcrumb={dividerObj}>/</Divider>
					<Section active={true} text="c"></Section>
				</Breadcrumb>

			</div>
		);
	}
}
