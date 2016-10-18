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

  render() {
    let componentClass = this.getClassName();
    let disabled = this.props.disabled ? 'disabled' : '';
    
    return <div className={componentClass}>
      <input name={this.props.name} type={this.props.inputType} disabled={disabled} />
      <label>{this.props.label}</label>
    </div>;
  };
}

Checkbox.propTypes = {
  type: PropTypes.oneOf(['default', 'radio', 'slider', 'toggle', 'read-only', 'checked', 'disabled']),
  inputType: PropTypes.oneOf(['checkbox', 'radio']),
  fitted: PropTypes.bool
}