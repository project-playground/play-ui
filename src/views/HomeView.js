import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import Button from '../components/Button';
import Buttons from '../components/Buttons';
import LabeledButton from '../components/LabeledButton';
import Divider from '../components/Divider';

export default class HomeView extends React.Component {
	render() {
		return (
	<div className="ui main container">
		<h2 className="ui dividing header">play-ui Component prototype</h2>
		<p>Component prototype에 대한 정의입니다</p>
		
		<div className="ui raised segment">

<div className="ui list">
  <div className="item">
    <i className="folder icon"></i>
    <div className="content">
      <div className="header">Component</div>
      <div className="description">모든 Component가 가져야 할&nbsp;<u>비 UI 기능</u>들을 구성한다</div>
      <div className="list">
        <div className="item">
          <i className="folder icon"></i>
          <div className="content">
            <a className="header" href="#">UIComponent</a>
            <div className="description">모든 Component가 가져야 할&nbsp;<u>UI 기능</u>들을 구성한다</div>

		      <div className="list">
		        <div className="item">
		          <i className="folder icon"></i>
		          <div className="content">
		            <Link to="button" className="header">Button</Link>
		            <div className="description">Button Component의 기본 기능을 구성한다</div>
	
			        <div className="list">
		              <div className="item">
		                <i className="folder icon"></i>
		                <div className="content">
		                  <Link to="button" className="header">LabeledButton</Link>
		                  <div className="description">LabeledButton Component의 기본 기능을 구성한다</div>
                        </div>
		              </div>
		            </div>
		            
		          </div>
		        </div>
		        <div className="item">
		          <i className="folder icon"></i>
		          <div className="content">
		            <Link to="label" className="header">Label</Link>
		            <div className="description">Label Component의 기본 기능을 구성한다</div>
		          </div>
		        </div>
		        <div className="item">
		          <i className="folder icon"></i>
		          <div className="content">
		            <Link to="input" className="header">Input</Link>
		            <div className="description">Input Component의 기본 기능을 구성한다</div>

			        <div className="list">
		              <div className="item">
		                <i className="folder icon"></i>
		                <div className="content">
		                  <Link to="labeledInput" className="header">LabeledInput</Link>
		                  <div className="description">LabeledInput Component의 기본 기능을 구성한다</div>
                        </div>
		              </div>
		            </div>

		          </div>
		        </div>
		      </div>

          </div>
        </div>
        
        <div className="item">
          <i className="folder icon"></i>
          <div className="content">
            <div className="header">UI Container</div>
            <div className="description">모든 Container가 가져야 할&nbsp;<u>UI 기능</u>들을 구성한다</div>

		      <div className="list">
		        <div className="item">
		          <i className="folder icon"></i>
		          <div className="content">
		            <div className="header">Panel</div>
		            <div className="description">Panel Container의 기본 기능을 구성한다</div>
		          </div>
		        </div>
		      </div>

          </div>
        </div>

        
      </div>
    </div>
  </div>
</div>

</div>
</div>
		);
	}
}