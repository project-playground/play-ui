import React from 'react';

import Item from '../collections/Item';
import LinkItem from '../collections/LinkItem';
import List from '../components/List';
import Content from '../components/Content';
import Divider from '../components/Divider';

export default class ListView extends React.Component {
	render() {
		var contentText = { header:"site", description:"Your site" };
		var imgText = {header: "Daniel Louise"};
		var cellText = {header:"Daniel", description:"Hello"};
		var linkText = {header:"semantic-ui", description:"Hello wolrd"};
		return (
			<div>
        <h3>list</h3>
        <List>
          <Item text="Apple"/>
          <Item text="Pears"/>
          <Item text="Oranges"/>
        </List>
        <Divider />
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
		<Divider />
        <h3>icon header link list</h3>
        <List>
          <Item icon="large github middle aligned" text={linkText} headerLink={true} />
        </List>
		<Divider />
        <h3>folder list</h3>
        <List>
          <Item text={contentText} icon="folder">
	          <List>
	          	<Item text={contentText} icon="folder" />
	          	<Item text={contentText} icon="folder" />
	          </List>			</Item>
        </List>
        <Divider />
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
        <Divider />
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
        <Divider />
        <h3>Link list</h3>
        <List link={true}>
        	<Item header="active" text="Home" />
        	<LinkItem text="About" />
        	<LinkItem text="Jobs" />
        	<LinkItem text="Team" />
        </List>
        <Divider />
        <h3>divided list</h3>
        <List divided="divided">
        	<Item icon="mail" text={imgText}/>
        	<Item icon="marker" text={imgText} />
        	<Item icon="mail" text={imgText} />
        </List>
        <Divider />
        <h3>celled list</h3>
        <List divided="celled">
        	<Item imgSrc="/assets/avatar/daniel.jpg" text={cellText} />
        	<Item imgSrc="/assets/avatar/daniel.jpg" text={cellText} />
        	<Item imgSrc="/assets/avatar/daniel.jpg" text={cellText} />
        </List>
        <Divider />
        <h3>horizontal bulleted list</h3>
        <List horizontal={true} bulleted={true}>
        	<LinkItem text="About" />
        	<LinkItem text="SiteMap" />
        	<LinkItem text="Contact" />
        </List>
        <Divider />
        <h3>image list</h3>
        <List>
        	<Item imgSrc="/assets/avatar/daniel.jpg">
        		<Content>
        			<LinkItem header="header" text="Rachel" />
        			<div className="description">Last seen satching</div>
        		</Content>
        	</Item>
        </List>
			</div>
		);
	}
}
