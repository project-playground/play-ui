import React, { Component, PropTypes } from 'react';
import UIComponent from './UIComponent';
import header from 'semantic-ui-css/components/header.css';
import classNames from 'classnames';

const CLASSNAME = 'header';

export default class Header extends UIComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getClassName() {
    return classNames(super.getClassName(), CLASSNAME);
  }

  render() {
    var componentClass = this.getClassName();
    if(this.props.align) {
      componentClass = classNames(componentClass, this.props.align, 'aligned');
    }
    
    let content;
    let iContent;
    let textContent;
    if(this.props.icon) {
      let iconClass = classNames(this.props.icon, 'icon');
      componentClass = classNames(componentClass, 'icon');
      iContent = <i className={iconClass}></i>;
      textContent = <div className="content">
                      {this.props.text}
                      <div className="sub header">{this.props.subText}</div>
                    </div>;
      
    } else {
      content = this.props.text;
    }

    let header;
    
    if(this.props.type === 'h1') {
      header = <h1 className={componentClass}>{content}{iContent}{textContent}</h1>;
    } else if(this.props.type === 'h2') {
      header = <h2 className={componentClass}>{content}{iContent}{textContent}</h2>;
    } else if(this.props.type === 'h3') {
      header = <h3 className={componentClass}>{content}{iContent}{textContent}</h3>;
    } else if(this.props.type === 'h4') {
      header = <h4 className={componentClass}>{content}{iContent}{textContent}</h4>;
    } else if(this.props.type === 'h5') {
      header = <h5 className={componentClass}>{content}{iContent}{textContent}</h5>;
    }

    return header;
  };
}

Header.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  subText: PropTypes.string
}

Header.defaultProps = {
  type: 'h1'
}
