import React, { Component, PropTypes } from 'react';
import UIComponent from './UIComponent';
import classNames from 'classnames';

const CLASSNAME = 'header';

export default class Header extends UIComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getClassName() {
    return classNames(super.getClassName(),
        this.props.disabled == 'disabled' || this.props.disabled == 'true' ? 'disabled' : '',
        this.props.align ? (this.props.align == 'justified' ? this.props.align : this.props.align + ' aligned') : '',
        this.props.sub && (this.props.sub == 'sub' || this.props.sub == 'true') ? 'sub' : '',
        this.props.divide && (this.props.divide == 'divide' || this.props.divide == 'true') ? 'dividing' : '',
        this.props.block && (this.props.block == 'block' || this.props.block == 'true') ? 'block' : '',
        this.props.attached ? this.props.attached : '',
        this.props.floated ? this.props.floated : '',
        this.props.color ? this.props.color : '',
        this.props.inverted && (this.props.inverted == 'inverted' || this.props.inverted == 'true') ? 'inverted' : '',
        CLASSNAME
    );
  }

  render() {
    let componentClass = this.getClassName();
    let content;
    let subHeader;
    let iContent;
    let imgContent;
    let textContent;
    if(this.props.icon || this.props.contentIcon || this.props.img) {
      if(this.props.icon || this.props.contentIcon) {
        let iconClass;
        if(this.props.icon) {
          componentClass = classNames(componentClass, 'icon');
        }

        iconClass = classNames(this.props.icon || this.props.contentIcon, 'icon');

        iContent = <i className={iconClass}></i>;
      } else {
        let imgClass = classNames('ui', this.props.img);
        imgContent = <img className={imgClass} src={this.props.src}></img>;
      }

      textContent = <div className="content">
                      {this.props.text}
                      <div className="sub header">{this.props.subHeader}</div>
                    </div>;
    } else {
      content = this.props.text;
      if(this.props.subHeader) {
        subHeader = <div className="sub header">{this.props.subHeader}</div>
      }
    }

    let header;
    
    if(this.props.type === 'h1') {
      header = <h1 className={componentClass}>{content}{subHeader}{iContent}{imgContent}{textContent}</h1>;
    } else if(this.props.type === 'h2') {
      header = <h2 className={componentClass}>{content}{subHeader}{iContent}{imgContent}{textContent}</h2>;
    } else if(this.props.type === 'h3') {
      header = <h3 className={componentClass}>{content}{subHeader}{iContent}{imgContent}{textContent}</h3>;
    } else if(this.props.type === 'h4') {
      header = <h4 className={componentClass}>{content}{subHeader}{iContent}{imgContent}{textContent}</h4>;
    } else if(this.props.type === 'h5') {
      header = <h5 className={componentClass}>{content}{subHeader}{iContent}{imgContent}{textContent}</h5>;
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
