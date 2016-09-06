import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import LabeledButton from './components/LabeledButton';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<div>
		<div>
		<Button text="Hello" />
		<Button text="Primary" emphasis="primary" />
		<Button text="Secondary" emphasis="secondary" />
		<Button className="hello" text="HelloWorld" icon="star" />
		</div>
		<div>
		<LabeledButton text="Like" label="2,050" icon="heart" />
		</div>
	</div>, 
	rootElement
);
