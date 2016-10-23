import React from 'react';

import Accordion from '../components/Accordion';
import Icon from '../components/Icon';
import Header from '../components/Header';
import Divider from '../components/Divider';


export default class AccordionView extends React.Component {
  render() {
		return (
      <div>
      <Header size={2} text="Accordion" />
        <Accordion>
         <div class="active title">
         <i class="dropdown icon"></i>
          What is a dog?
         </div>
        <Content state="active">
        <Segment>
          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </Segment>
        </Content>

        </Accordion>
      </div>
    )
  }
}
