import React, { Component, PropTypes } from 'react';
import UIComponent from './UIComponent';
import classNames from 'classnames';
import Step from './Step'

const CLASSNAME = 'steps';

export default class Steps extends UIComponent {
  constructor(props) {
    super(props);
  }

  getClassName() {
    return classNames(super.getClassName(),
                      this.props.size ? this.props.size : '',
                      this.props.divide ? this.props.divide : '',
                      this.props.fluid == 'fluid' || this.props.fluid ? 'fluid' : '',
                      this.props.attached ? this.props.attached + ' attached' : '',
                      this.props.type,
                      CLASSNAME);
  }

  render() {
    let componentClass = this.getClassName();
    let steps = this.props.steps.map((step) => {
      return <Step key={step.id}
                   icon={step.icon}
                   title={step.title}
                   description={step.description}
                   active={step.active}
                   disabled={step.disabled}
                   completed={step.completed}
                   link={step.link} />
    });
    
    return (
      <div className={componentClass}
      	ref={(ref) => this.component = ref}>
        {steps}
      </div>
    );
  };
}

Steps.propTypes = {
  steps: PropTypes.array.isRequired
}