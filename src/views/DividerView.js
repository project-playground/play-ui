import React from 'react';

import Divider from '../components/Divider';

export default class LabelView extends React.Component {
	render() {
		let headerIcon = {
			title: 'Specifications',
			icon: 'bar chart'
		}
		return (
			<div>
				<h2>Divider</h2>
				<h3>Divider</h3>
				<Divider />

				<h3>Header</h3>
				<Divider header="HelloWorld" />

				<h3>Header & Icon</h3>
				<Divider header={headerIcon} />
				
				<h3>Hidden</h3>
				<Divider hidden={true} />
				
				<h3>Fitted</h3>
				<p>Hellworld!!</p>
				<Divider fitted={true} />
				<p>Hellworld!!!!!</p>
				
				<h3>Section</h3>
				<p>Hellworld!!</p>
				<Divider section={true} />
				<p>Hellworld!!!!!</p>

			</div>		
		);
	}
}