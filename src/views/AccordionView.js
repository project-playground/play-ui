import React from 'react';

import Accordion from '../modules/Accordion';
import Content from '../components/Content';
import Segment from '../components/Segment';
import Icon from '../components/Icon';
import Header from '../components/Header';
import Divider from '../components/Divider';


export default class AccordionView extends React.Component {
  render() {
		return (
      <div>
      <Header size={2} text="Accordion" />
        <Accordion>
         <div className="active title">
         <i className="dropdown icon"></i>
          What is a dog?
         </div>
        <Content state="active">
          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </Content>

        <div className="title">
        <i className="dropdown icon"></i>
         What kinds of dogs are there?
        </div>
       <Content state=" ">
         <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
       </Content>

       <div className="title">
       <i className="dropdown icon"></i>
        How do you acquire a dog?
       </div>
      <Content state=" ">
       <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
       <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
      </Content>

      </Accordion>
      <Divider />

      <Header size={2} text="Accordion - styled" />
        <Accordion styled={true}>
        <div className="active title">
        <i className="dropdown icon"></i>
         What is a dog?
        </div>
       <Content state="active">
         <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
       </Content>

       <div className="title">
       <i className="dropdown icon"></i>
        What kinds of dogs are there?
       </div>
      <Content>
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
      </Content>

      <div className="title">
      <i className="dropdown icon"></i>
       How do you acquire a dog?
      </div>
     <Content>
      <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
      <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
     </Content>

      </Accordion>
      <Divider />

      <Header size={2} text="Accordion - Fluid" />
        <Accordion fluid={true}>
        <div className="active title">
        <i className="dropdown icon"></i>
         What is a dog?
        </div>
       <Content state="active">
         <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
       </Content>

       <div className="title">
       <i className="dropdown icon"></i>
        What kinds of dogs are there?
       </div>
      <Content>
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
      </Content>

      <div className="title">
      <i className="dropdown icon"></i>
       How do you acquire a dog?
      </div>
     <Content>
      <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
      <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
     </Content>

      </Accordion>
      <Divider />

      <Header size={2} text="Accordion - inverted" />
      <Segment status="inverted">
        <Accordion inverted={true}>
        <div className="active title">
        <i className="dropdown icon"></i>
         What is a dog?
        </div>
       <Content state="active">
         <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
       </Content>

       <div className="title">
       <i className="dropdown icon"></i>
        What kinds of dogs are there?
       </div>
      <Content>
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
      </Content>

      <div className="title">
      <i className="dropdown icon"></i>
       How do you acquire a dog?
      </div>
     <Content>
      <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
      <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
     </Content>

      </Accordion>
      </Segment>



      </div>
    )
  }
}
