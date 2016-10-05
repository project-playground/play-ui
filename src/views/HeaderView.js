import React from 'react';
import Header from '../components/Header';

export default class HeaderView extends React.Component {
  render() {
    return (
      <div>
        <h2>Header</h2>
        <h3>basic</h3>
        <Header size={1} text="Heading 1" />
        <Header size={2} text="Heading 2" />
        <Header size={3} text="Heading 3" />
        <Header size={4} text="Heading 4" />
        <Header size={5} text="Heading 5" />
        <Header size={1} text="Settings Icon Header" icon="settings" subHeader="SubText Test" />
        <Header size={2} text="Circular users Icon Header" icon="users" circular={true} subHeader="friends" align="center" />
        <Header size={1} text="Sub Header 1" sub="sub" />
        <Header size={2} text="Sub Header 2" sub="sub" />
        <Header size={3} text="Sub Header 3" sub="sub" />
        <Header size={1} text="Sub Icon Header" sub={true} icon="settings" />
        <Header size={1} text="Img Header" img="/src/images/school.png" />
        <Header size={1} text="Img Header" img="/src/images/school.png" circular='circular' />

        <Header size={1} text="Content Icon Header" contentIcon="plug" />
        <Header size={1} text="Sub Content Icon Header" contentIcon="settings" subHeader="Content Icon SubText" />

        <Header size={1} text="Heading 1" subHeader="Sub Header 1" />
        <Header size={2} text="Heading 2" subHeader="Sub Header 2" />
        <Header size={3} text="Heading 3" subHeader="Sub Header 3" />
        <Header size={4} text="Heading 4" subHeader="Sub Header 4" />
        <Header size={5} text="Heading 5" subHeader="Sub Header 5" />

        <Header size={1} text="Heading 1" disabled="disabled" />
        <Header size={1} text="Heading 1" disabled={true} />

        <Header size={1} text="Divide Header" divide="divide" />Test Divide Contents String
        <Header size={1} text="Divide Header" divide={true} />Test Divide Contents Boolean
        
        <Header size={1} text="Divide Header" block="block" />
        <Header size={1} text="Divide Header" block={true} />

        <Header size={1} text="Divide Header" attached="top" />
        <div className="ui attached segment">
          <p>This is First Content</p>
        </div>
        <Header size={1} text="Divide Header" attached="default" />
        <div className="ui attached segment">
          <p>This is Last Content</p>
        </div>
        <Header size={1} text="Divide Header" attached="bottom" />

        <div className="ui clearing segment">
          <Header size={1} text="Right Header" floated="right" />
          <Header size={1} text="Left Header" floated="left" />
        </div>

        <div className="ui segment">
          <Header size={1} text="Left align Header" align="left" />
          <Header size={1} text="Right align Header" align="right" />
          <Header size={1} text="Center align Header" align="center" />
          <Header size={1} text="This is Justified Header" align="justified" />
        </div>

        <div className="ui segment">
          <Header size={4} text="Red" colored="red" />
          <Header size={4} text="Orange" colored="orange" />
          <Header size={4} text="Yellow" colored="yellow" />
          <Header size={4} text="Olive" colored="olive" />
          <Header size={4} text="Green" colored="green" />
          <Header size={4} text="Teal" colored="teal" />
          <Header size={4} text="Blue" colored="blue" />
          <Header size={4} text="Purple" colored="purple" />
          <Header size={4} text="Violet" colored="violet" />
          <Header size={4} text="Pink" colored="pink" />
          <Header size={4} text="Brown" colored="brown" />
          <Header size={4} text="Grey" colored="grey" />
        </div>

        <div className="ui inverted segment">
          <Header size={4} text="Red" colored="red" inverted="inverted" />
          <Header size={4} text="Orange" colored="orange" inverted="inverted" />
          <Header size={4} text="Yellow" colored="yellow" inverted="inverted" />
          <Header size={4} text="Olive" colored="olive" inverted="inverted" />
          <Header size={4} text="Green" colored="green" inverted="inverted" />
          <Header size={4} text="Teal" colored="teal" inverted="inverted" />
          <Header size={4} text="Blue" colored="blue" inverted={true} />
          <Header size={4} text="Purple" colored="purple" inverted={true} />
          <Header size={4} text="Violet" colored="violet" inverted={true} />
          <Header size={4} text="Pink" colored="pink" inverted={true} />
          <Header size={4} text="Brown" colored="brown" inverted={true} />
          <Header size={4} text="Grey" colored="grey" inverted={true} />
        </div>
      </div>
    );
  }
}