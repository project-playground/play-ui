import React from 'react';

import Breadcrumb from '../components/Breadcrumb';

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
				<Breadcrumb divider={dividerObj}>
					<div class="section">a</div>
					<div class="divider">/</div>
					<div class="section">b</div>
					<div class="divider">/</div>
					<div class="section active">c</div>
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
