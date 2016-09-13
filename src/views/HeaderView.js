import React from 'react';
import Header from '../components/Header';

export default class HeaderView extends React.Component {
  render() {
    return (
      <div>
        <h2>Header</h2>
        <h3>basic</h3>
        <Header type="h1" text="Heading 1" />
        <Header type="h2" text="Heading 2" />
        <Header type="h3" text="Heading 3" />
        <Header type="h4" text="Heading 4" />
        <Header type="h5" text="Heading 5" />
        <Header type="h1" text="Settings Icon Header" icon="settings" subText="SubText Test" />
        <Header type="h2" text="Circular users Icon Header" icon="circular users" subText="friends" align="center" />
      </div>		
    );
  }
}