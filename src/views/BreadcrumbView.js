import React from 'react';

export default class BreadcrumbView extends React.Component {
	render() {
		let dividerObj = {
			type: 'text',
			text: '<'
		};
		return (
			<div>
				<h2>Breadcrumb</h2>
				<h3>Breadcrumb</h3>
				<Breadcrumb divider={dividerObj} />

			</div>
		);
	}
}
