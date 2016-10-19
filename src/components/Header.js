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
        this.props.disabled == 'disabled' || this.props.disabled ? 'disabled' : '',
        this.props.align ? (this.props.align == 'justified' ? this.props.align : this.props.align + ' aligned') : '',
        this.props.sub == 'sub' || this.props.sub ? 'sub' : '',
        this.props.divide == 'divide' || this.props.divide ? 'dividing' : '',
        this.props.block == 'block' || this.props.block ? 'block' : '',
        this.props.attached ? (this.props.attached == 'default' ? '' : this.props.attached) + ' attached' : '',
        this.props.floated ? this.props.floated + ' floated' : '',
        this.props.colored ? this.props.colored : '',
        this.props.inverted == 'inverted' || this.props.inverted ? 'inverted' : '',
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
        if(this.props.icon) {
          componentClass = classNames(componentClass, 'icon');
        }
        
        let iconClass = classNames(this.props.icon || this.props.contentIcon,
                                   this.props.circular ? 'circular' : '', 'icon');
        iContent = <i className={iconClass}></i>;
      } else {
        let imgClass = classNames('ui', this.props.circular ? 'circular' : '', 'image');
        imgContent = <img className={imgClass} src={this.props.img}></img>;
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
    
    if(this.props.size === 1) {
      header = (
      	<h1 className={componentClass}
      		ref={(ref) => this.component = ref}>{content}{subHeader}{iContent}{imgContent}{textContent}</h1>
      );
    } else if(this.props.size === 2) {
      header = (
      	<h2 className={componentClass}
      		ref={(ref) => this.component = ref}>{content}{subHeader}{iContent}{imgContent}{textContent}</h2>
      );
    } else if(this.props.size === 3) {
      header = (
      	<h3 className={componentClass}
      		ref={(ref) => this.component = ref}>{content}{subHeader}{iContent}{imgContent}{textContent}</h3>
      );
    } else if(this.props.size === 4) {
      header = (
      	<h4 className={componentClass}
      		ref={(ref) => this.component = ref}>{content}{subHeader}{iContent}{imgContent}{textContent}</h4>
      );
    } else if(this.props.size === 5) {
      header = (
      	<h5 className={componentClass}
      		ref={(ref) => this.component = ref}>{content}{subHeader}{iContent}{imgContent}{textContent}</h5>
      );
    }

    return header;
  };
}

Header.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  circular: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['circular'])
  ]),
  subText: PropTypes.string,
  sub: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['sub'])
  ]),
  img: PropTypes.string,
  contentIcon: PropTypes.string,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['disabled'])
  ]),
  divide: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['divide'])
  ]),
  block: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['block'])
  ]),
  attached: PropTypes.oneOf(['top', 'default', 'bottom']),
  floated: PropTypes.oneOf(['right', 'left']),
  inverted: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['inverted'])
  ]),
}

Header.defaultProps = {
  type: 'h1'
}
