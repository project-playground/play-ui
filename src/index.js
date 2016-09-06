import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Buttons from './components/Buttons';
import LabeledButton from './components/LabeledButton';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<div>
		<div>
			<h2>Button</h2>
			<h3>Basic</h3>import Button from './components/Button';
			
			<h3>Emphasis</h3>
			<Button text="Default" />
			<Button text="Basic" emphasis="basic" />
			<Button text="Primary" emphasis="primary" />
			<Button text="Secondary" emphasis="secondary" />
			
			<h3>Icon</h3>
			<Button text="HelloWorld" icon="star" />
			
			<h3>Disabled</h3>
			<Button text="HelloWorld" icon="star" disabled="true" />
			
			<h3>Size</h3>
			<Button text="Mini" size="mini" />
			<Button text="Tiny" size="tiny" />
			<Button text="Small" size="small" />
			<Button text="Medium" size="medium" />
			<Button text="Large" size="large" />
			<Button text="Big" size="big" />
			<Button text="Huge" size="huge" />
			<Button text="Massive" size="massive" />
			
			<h3>Colored</h3>
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
			
			<h3>Compact</h3>
			<Button text="Compact" compact="true" />
			
			<h2>Buttons</h2>
			<Buttons>
				<Button text="Hello" />
				<Button text="World" />
				<Button text="Playground" />
			</Buttons>
		</div>
		<hr/>
		<div>
			<h3>LabeledButton</h3>
			<LabeledButton text="Like" label="2,050" icon="heart" />
		</div>
	</div>, 
	rootElement
);
