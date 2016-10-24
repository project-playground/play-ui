import React, { Component } from 'react';
import Checkbox from '../modules/Checkbox';
import Header from '../components/Header';

let step = [
  {
    id: 1,
    icon: 'truck',
    title: 'Shipping',
    description: 'Choose your shipping options',
    link: true
  },
  {
    id: 2,
    icon: 'payment',
    title: 'Billing',
    description: 'Enter billing information',
    active: true,
    link: true
  },
  {
    id: 3,
    icon: 'info',
    title: 'Confirm Order',
    disabled: true
  }
];

export default class CheckboxView extends Component {  
  render() {
    return(
      <div>
        <Header size={3} text="Checkbox" subHeader="A standard checkbox" />
        <Checkbox type="default" inputType="checkbox" name="example" label="Make my profile visible" />
        
        <Header size={3} text="Radio" subHeader="A checkbox can be formatted as a radio element. This means it is an exclusive option." />
        <Checkbox type="radio" inputType="radio" name="radio" label="Radio chioce" />
        
        <div className="ui form">
          <div className="inline fields">
            <label>How often do you use checkboxes?</label>
            <div className="field">
              <Checkbox type="radio" inputType="radio" name="frequency" label="Once a week" checked={true}/>
            </div>
            <div className="field">
              <Checkbox type="radio" inputType="radio" name="frequency" label="2-3 times a week" />
            </div>
            <div className="field">
              <Checkbox type="radio" inputType="radio" name="frequency" label="Once a day" />
            </div>
            <div className="field">
              <Checkbox type="radio" inputType="radio" name="frequency" label="Twice a day" />
            </div>
          </div>
        </div>
        
        <div className="ui form">
          <div className="grouped fields">
            <label>How often do you use checkboxes?</label>
            <div className="field">
              <Checkbox type="radio" inputType="radio" name="example2" label="Once a week" checked={true}/>
            </div>
            <div className="field">
              <Checkbox type="radio" inputType="radio" name="example2" label="2-3 times a week" />
            </div>
            <div className="field">
              <Checkbox type="radio" inputType="radio" name="example2" label="Once a day" />
            </div>
            <div className="field">
              <Checkbox type="radio" inputType="radio" name="example2" label="Twice a day" />
            </div>
          </div>
        </div>
        
        <Header size={3} text="Slider" subHeader="A checkbox can be formatted to emphasize the current selection state" />
        <Checkbox type="slider" inputType="checkbox" name="newsletter" label="Accept terms and conditions" />
        
        <div className="ui form">
          <div className="grouped fields">
            <label>Outbound Throughput</label>
            <div className="field">
              <Checkbox type="slider" inputType="radio" name="throughtput" label="20 mbps max" checked={true}/>
            </div>
            <div className="field">
              <Checkbox type="slider" inputType="radio" name="throughtput" label="10mbps max" />
            </div>
            <div className="field">
              <Checkbox type="slider" inputType="radio" name="throughtput" label="5mbps max" />
            </div>
            <div className="field">
              <Checkbox type="slider" inputType="radio" name="throughtput" label="Unmetered" />
            </div>
          </div>
        </div>
        
        <Header size={3} text="Toggle" subHeader="A checkbox can be formatted to to show an on or off choice" />
        <Checkbox type="toggle" inputType="checkbox" name="public" label="Subscribe to weekly newsletter" />
        
        <Header size={3} text="Read-only" subHeader="A checkbox can be read-only and unable to change states" />
        <Checkbox inputType="checkbox" readOnly={true} label="Read Only" />

        <Header size={3} text="Checked" subHeader="A checkbox can be checked" />
        <Checkbox inputType="checkbox" checked={true} label="Active" />

        <Header size={3} text="Disabled" subHeader="A checkbox can be read-only and unable to change states" />
        <Checkbox inputType="checkbox" disabled={true} label="Disabled" />
        <Checkbox type="toggle" inputType="checkbox" disabled={true} label="Disabled" />
        
        <Header size={3} text="Fitted" subHeader="A fitted checkbox does not leave padding for a label" />
        <div className="ui left floated compact segment">
          <Checkbox type="default" inputType="checkbox" fitted={true} label="" />
        </div>
        <div className="ui left floated compact segment">
          <Checkbox type="slider" inputType="checkbox" fitted={true} label="" />
        </div>
        <div className="ui left floated compact segment">
          <Checkbox type="toggle" inputType="checkbox" fitted={true} label="" />
        </div>
      </div>
    );
  }
}