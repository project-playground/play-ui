import React, { Component } from 'react';
import Steps from '../components/Steps';

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

let orderedStep = [
  {
    id: 1,
    title: 'Shipping',
    description: 'Choose your shipping options',
    completed: true
  },
  {
    id: 2,
    title: 'Billing',
    description: 'Enter billing information',
    completed: true
  },
  {
    id: 3,
    icon: 'active',
    title: 'Confirm Order',
    description: 'Verify order details',
    active: true
  }
];

let verticalStep = [
  {
    id: 1,
    icon: 'truck',
    title: 'Shipping',
    description: 'Choose your shipping options',
    completed: true
  },
  {
    id: 2,
    icon: 'credit card',
    title: 'Billing',
    description: 'Enter billing information',
    completed: true
  },
  {
    id: 3,
    icon: 'info',
    title: 'Confirm Order',
    description: 'Verify order details',
    active: true
  }
];

let divideStep = [
  {
    id: 1,
    icon: 'truck',
    title: 'Shipping',
    description: 'Choose your shipping options'
  },
  {
    id: 2,
    icon: 'payment',
    title: 'Billing',
    description: 'Enter billing information',
    active: true
  },
  {
    id: 3,
    icon: 'info',
    title: 'Confirm Order',
    disabled: true
  }
];

export default class StepView extends Component {  
  render() {
    return(
      <div>
        <p>* No Stackable</p>
        
        <h1>Default</h1>
        <p>Link, Active, Disabled</p>
        <Steps steps={step} />
        
        <h1>Ordered</h1>
        <p>Complete</p>
        <Steps type="ordered" steps={orderedStep} />
        
        <h1>Vertical</h1>
        <Steps type="vertical" steps={verticalStep} />
        
        <h1>Fluid</h1>
        <Steps type="vertical" fluid={true} steps={verticalStep} />
        <div className="ui two column grid">
          <div className="column">
            <Steps type="vertical" fluid="fluid" steps={verticalStep} />
          </div>
          <div className="column">
            <p>The steps take up the entire column width</p>
          </div>
        </div>
        
        <h1>Attached</h1>
        <Steps divide="three" attached="top" steps={divideStep} />
        <div className="ui attached segment">
          <p></p>
          <p></p>
        </div>
        <Steps divide="three" attached="bottom" steps={divideStep} />
        
        <h1>Divide</h1>
        <p>divide = three</p>
        <Steps divide="three" attached="bottom" steps={divideStep} />
        <p>divide = two</p>
        <Steps divide="two" attached="bottom" steps={divideStep} />
        
        <h1>Size</h1>
        <p>mini</p>
        <Steps size="mini" steps={step} />
        <p>tiny</p>
        <Steps size="tiny" steps={step} />
        <p>small</p>
        <Steps size="small" steps={step} />
        <p>large</p>
        <Steps size="large" steps={step} />
        <p>big</p>
        <Steps size="big" steps={step} />
        <p>huge</p>
        <Steps size="huge" steps={step} />
        <p>massive</p>
        <Steps size="massive" steps={step} />
      </div>
    );
  }
}