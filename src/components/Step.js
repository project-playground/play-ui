import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const CLASSNAME = 'step';

export default class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getClassName() {
    return classNames(this.props.link ? 'link' : '',
                      this.props.completed ? 'completed' : '',
                      this.props.active ? 'active' : '',
                      this.props.disabled ? 'disabled' : '',
                      CLASSNAME);
  }

  render() {
    let stepClass = this.getClassName();
    
    let iconComponent = '';
    if(this.props.icon) {
      let iconClass = classNames(this.props.icon, 'icon');
      iconComponent = <i className={iconClass}></i>
    }
    
    return (
      <div className={stepClass}
      	ref={(ref) => this.component = ref}>
        {iconComponent}
        <div className='content'>
          <div className='title'>{this.props.title}</div>
          <div className='description'>{this.props.description}</div>
        </div>
      </div>
    );
  };
}