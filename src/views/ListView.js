import React from 'react';

import Item from '../collections/Item';
import LinkItem from '../collections/LinkItem';
import List from '../components/List';
import Content from '../components/Content';

export default class ListView extends React.Component {
	render() {
		var contentText = { header:"site", description:"Your site" };
		var imgText = {header: "Daniel Louise"};
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
              <LinkItem text="Semantic-ui" />
              <div className="description">Update</div>
            </Content>
          </Item>
        </List>

        <h3>folder list</h3>
        <List>
          <Item text={contentText} icon="folder">
	          <List>
	          	<Item text={contentText} icon="folder" />
	          	<Item text={contentText} icon="folder" />
	          </List>			</Item>
        </List>
        
        <h3>bulleted list</h3>
        <List bulleted={true}>
        	<Item text="Gaining Access" />
        	<Item text="Inviting Friends" />
        	<Item text="Benefits">
        		<List>
        			<LinkItem text="Link to somewhere" />
        			<Item text="Rebates" />
        		</List>
        	</Item>
        </List>
        
        <h3>ordered list</h3>
        <List ordered={true}>
        	<LinkItem text="Getting Started" />
        	<LinkItem text="Introduction" />
        	<Item text="" >
        		<LinkItem text="Language" />
        		<List>
        			<LinkItem text="HTML" />
        			<LinkItem text="Javascript" />
        			<LinkItem text="CSS" />
        		</List>
        	</Item>
        </List>
        
        <h3>Link list</h3>
        <List link={true}>
        	<Item header="active" text="Home" />
        	<LinkItem text="About" />
        	<LinkItem text="Jobs" />
        	<LinkItem text="Team" />
        </List>
        
        <h3>divided list</h3>
        <List divided="divided">
        	<Item icon="mail" text={imgText}/>
        	<Item icon="marker" text={imgText} />
        </List>
			</div>
		);
	}
}
