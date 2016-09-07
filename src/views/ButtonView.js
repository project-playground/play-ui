import React from 'react';

import Button from '../components/Button';
import Buttons from '../components/Buttons';
import LabeledButton from '../components/LabeledButton';
import Divider from '../components/Divider';

export default class ButtonView extends React.Component {
	render() {
		return (
			<div>
				<h2>Button</h2>
				<h3>Button</h3>
				<Button text="HelloWorld" />
				
				<h3>Icon</h3>
				<Button text="HelloWorld" icon="star" />
				<Button icon="cloud" />
				
				<h3>State</h3>
				<Button text="Active" icon="star" state="active" />
				<Button text="Disabled" icon="star" state="disabled" />
				<Button text="Active" icon="star" state="loading" />
				
				<h3>Size</h3>
				<Button text="Mini" size="mini" />
				<Button text="Tiny" size="tiny" />
				<Button text="Small" size="small" />
				<Button text="Medium" size="medium" />
				<Button text="Large" size="large" />
				<Button text="Big" size="big" />
				<Button text="Huge" size="huge" />
				<Button text="Massive" size="massive" />
				
				<h3>Basic</h3>
				<Button text="Default" />
				<Button text="Basic" basic="true" />
				
				<h3>Colored</h3>
				<Button text="Primary" colored="primary" />
				<Button text="Secondary" colored="secondary" />
				<Button text="Red" colored="red" />
				<Button text="Orange" colored="orange" />
				<Button text="Yellow" colored="yellow" />
				<Button text="Olive" colored="olive" />
				<Button text="Green" colored="green" />
				<Button text="Teal" colored="teal" />
				<Button text="Blue" colored="blue" />
				<Button text="Violet" colored="violet" />
				<Button text="Purple" colored="purple" />
				<Button text="Brown" colored="brown" />
				<Button text="Pink" colored="pink" />
				<Button text="Grey" colored="grey" />
				<Button text="Black" colored="black" />
				
				<h3>Basic + Colored</h3>
				<Button text="Primary" basic="true" colored="primary" />
				<Button text="Secondary" basic="true" colored="secondary" />
				<Button text="Red" basic="true" colored="red" />
				<Button text="Orange" basic="true" colored="orange" />
				<Button text="Yellow" basic="true" colored="yellow" />
				<Button text="Olive" basic="true" colored="olive" />
				<Button text="Green" basic="true" colored="green" />
				<Button text="Teal" basic="true" colored="teal" />
				<Button text="Blue" basic="true" colored="blue" />
				<Button text="Violet" basic="true" colored="violet" />
				<Button text="Purple" basic="true" colored="purple" />
				<Button text="Brown" basic="true" colored="brown" />
				<Button text="Pink" basic="true" colored="pink" />
				<Button text="Grey" basic="true" colored="grey" />
				<Button text="Black" basic="true" colored="black" />
	
				<h3>Compact</h3>
				<Button text="Compact" compact="true" />
				
				<Divider />
			
				<h2>Buttons</h2>
				<h3>Basic</h3>
				<Buttons>
					<Button text="Hello" />
					<Button text="World" />
					<Button text="Playground" />
				</Buttons>
				
				<h3>Icon Buttons</h3>
				<Buttons icon="true">
					<Button icon="align left" />
					<Button icon="align center" />
					<Button icon="align right" />
					<Button icon="align justify" />
				</Buttons>
				<Buttons icon="true">
					<Button icon="bold" />
					<Button icon="underline" />
					<Button icon="text width" />
				</Buttons>
				
				<h3>Vertical</h3>
				<Buttons vertical="true">
					<Button text="Hello" />
					<Button text="World" />
					<Button text="Playground" />
				</Buttons>
				
				<h3>Conditional</h3>
				<Buttons condition="or">
					<Button text="Yes" colored="primary" />
					<Button text="No" />
				</Buttons>
				
				<h3>Equal Width</h3>
				<Buttons equalwidth="true">
					<Button text="one" />
					<Button text="two" />
					<Button text="three" />
				</Buttons>
				<Buttons equalwidth="true">
					<Button text="one" />
					<Button text="two" />
					<Button text="three" />
					<Button text="four" />
					<Button text="five" />
					<Button text="six" />
					<Button text="seven" />
					<Button text="eight" />
					<Button text="nine" />
					<Button text="ten" />
				</Buttons>
				
				<h3>Colored Buttons</h3>
				<Buttons colored="blue">
					<Button text="one" />
					<Button text="two" />
					<Button text="three" />
				</Buttons>
				
				<Divider />
				
				<h2>LabeledButton</h2>
				<LabeledButton text="Like" label="2,050" icon="heart" />	
				
			</div>		
		);
	}
}