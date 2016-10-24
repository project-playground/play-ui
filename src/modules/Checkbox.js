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
    $(this.component).checkbox();
  }

  render() {
    let componentClass = this.getClassName();
    let disabled = this.props.disabled ? 'disabled' : '';
    let readOnly = this.props.readOnly ? 'readOnly' : '';
    let checked = this.props.checked ? 'checked' : '';
    let label = this.props.label ? (<label>{this.props.label}</label>) : ''; 
    
    return <div className={componentClass} ref={(ref) => this.component = ref} >
      <input name={this.props.name} type={this.props.inputType} disabled={disabled} readOnly={readOnly} checked={checked} />
      {label}
    </div>;
  };
}

Checkbox.propTypes = {
  type: PropTypes.oneOf(['default', 'radio', 'slider', 'toggle']).isRequired,
  inputType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  label: PropTypes.string,
  fitted: PropTypes.bool,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['disabled'])
  ]),
  readOnly: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['readOnly'])
  ]),
  checked: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['checked'])
  ])
}