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
        <Header type="h1" text="Settings Icon Header" icon="settings" subHeader="SubText Test" />
        <Header type="h2" text="Circular users Icon Header" icon="circular users" subHeader="friends" align="center" />
        <Header type="h1" text="Sub Header 1" sub="sub" />
        <Header type="h2" text="Sub Header 2" sub="sub" />
        <Header type="h3" text="Sub Header 3" sub="sub" />
        <Header type="h1" text="Sub Icon Header" sub="true" icon="settings" />
        <Header type="h1" text="Img Header" img="image" src="/src/images/school.png" />
        <Header type="h1" text="Img Header" img="circular image" src="/src/images/school.png" />

        <Header type="h1" text="Content Icon Header" contentIcon="plug" />
        <Header type="h1" text="Sub Content Icon Header" contentIcon="settings" subHeader="Content Icon SubText" />

        <Header type="h1" text="Heading 1" subHeader="Sub Header 1" />
        <Header type="h2" text="Heading 2" subHeader="Sub Header 2" />
        <Header type="h3" text="Heading 3" subHeader="Sub Header 3" />
        <Header type="h4" text="Heading 4" subHeader="Sub Header 4" />
        <Header type="h5" text="Heading 5" subHeader="Sub Header 5" />

        <Header type="h1" text="Heading 1" disabled="disabled" />
        <Header type="h5" text="Heading 1" disabled="true" />

        <Header type="h1" text="Divide Header" divide="divide" />Test Contents

        <Header type="h1" text="Divide Header" block="block" />
        <Header type="h1" text="Divide Header" block="true" />

        <Header type="h1" text="Divide Header" attached="top attached" />
        <div className="ui attached segment">
          <p>This is First Content</p>
        </div>
        <Header type="h1" text="Divide Header" attached="attached" />
        <div className="ui attached segment">
          <p>This is Last Content</p>
        </div>
        <Header type="h1" text="Divide Header" attached="bottom attached" />

        <div className="ui clearing segment">
          <Header type="h1" text="Right Header" floated="right floated" />
          <Header type="h1" text="Left Header" floated="left floated" />
        </div>

        <div className="ui segment">
          <Header type="h1" text="Left align Header" align="left" />
          <Header type="h1" text="Right align Header" align="right" />
          <Header type="h1" text="Center align Header" align="center" />
          <Header type="h1" text="This is Justified Header" align="justified" />
        </div>

        <div className="ui segment">
          <Header type="h4" text="Red" color="red" />
          <Header type="h4" text="Orange" color="orange" />
          <Header type="h4" text="Yellow" color="yellow" />
          <Header type="h4" text="Olive" color="olive" />
          <Header type="h4" text="Green" color="green" />
          <Header type="h4" text="Teal" color="teal" />
          <Header type="h4" text="Blue" color="blue" />
          <Header type="h4" text="Purple" color="purple" />
          <Header type="h4" text="Violet" color="violet" />
          <Header type="h4" text="Pink" color="pink" />
          <Header type="h4" text="Brown" color="brown" />
          <Header type="h4" text="Grey" color="grey" />
        </div>

        <div className="ui inverted segment">
          <Header type="h4" text="Red" color="red" inverted="inverted" />
          <Header type="h4" text="Orange" color="orange" inverted="inverted" />
          <Header type="h4" text="Yellow" color="yellow" inverted="inverted" />
          <Header type="h4" text="Olive" color="olive" inverted="inverted" />
          <Header type="h4" text="Green" color="green" inverted="inverted" />
          <Header type="h4" text="Teal" color="teal" inverted="inverted" />
          <Header type="h4" text="Blue" color="blue" inverted="inverted" />
          <Header type="h4" text="Purple" color="purple" inverted="inverted" />
          <Header type="h4" text="Violet" color="violet" inverted="inverted" />
          <Header type="h4" text="Pink" color="pink" inverted="inverted" />
          <Header type="h4" text="Brown" color="brown" inverted="inverted" />
          <Header type="h4" text="Grey" color="grey" inverted="inverted" />
        </div>
      </div>
    );
  }
}