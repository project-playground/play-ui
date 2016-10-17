import React from 'react';

import Item from '../collections/Item';
import LinkItem from '../collections/LinkItem';
import List from '../components/List';
import Content from '../components/Content';

export default class ListView extends React.Component {
	render() {
		return (
			<div>
        <h3>list</h3>
        <List>
          <Item text="Apple"/>
          <Item text="Pears"/>
          <Item text="Oranges"/>
        </List>

        <h3>icon list</h3>
        <List>
          <Content>
            <Item text="Semantic UI" icon="users"/>
          </Content>
          <Content>
            <Item text="New York, NY" icon="marker"/>
          </Content>
          <Content>
            <Item text="" icon="mail">
              <LinkItem text="jack@semantic-ui.com"/>
            </Item>
          </Content>
          <Content>
            <Item text="" icon="linkify">
              <LinkItem text="semantic-ui"/>
            </Item>
          </Content>
        </List>

        <h3>icon header link list</h3>
        <List>
          <Item text="" icon="large github middle aligned">
            <Content>
              <LinkItem text="Semanic-ui"/>
              <div className="description">Update</div>
            </Content>
          </Item>
        </List>

        <h3>folder list</h3>
        <List>
          <Item text={ {header: "dfasfsite"}, {description:"Your site"} } icon="folder"/>
        </List>
			</div>
		);
	}
}
