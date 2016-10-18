import React, { Component, PropTypes } from 'react';
import UIComponent from '../components/UIComponent';
import classNames from 'classnames';

const CLASSNAME = 'checkbox';

export default class Checkbox extends UIComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getClassName() {
    return classNames(super.getClassName(),
        this.props.fitted ? 'fitted' : '',
        this.props.type == 'default' ? '' : this.props.type,
        CLASSNAME
    );
  }

  didMount() {
    $(this.checkbox).checkbox();
  }

  render() {
    let componentClass = this.getClassName();
    let disabled = this.props.disabled ? 'disabled' : '';
    let label = this.props.label ? (<label>{this.props.label}</label>) : ''; 
    
    return <div className={componentClass} ref={(ref) => this.checkbox = ref} >
      <input name={this.props.name} type={this.props.inputType} disabled={disabled} />
      {label}
    </div>;
  };
}

Checkbox.propTypes = {
  type: PropTypes.oneOf(['default', 'radio', 'slider', 'toggle', 'read-only', 'checked', 'disabled']),
  inputType: PropTypes.oneOf(['checkbox', 'radio']),
  fitted: PropTypes.bool
}