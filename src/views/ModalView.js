import React from 'react';

import Modal from '../modules/Modal';
import Actions from '../modules/Actions';
import Content from '../components/Content';
import Header from '../components/Header';
import Button from '../components/Button';
import Divider from '../components/Divider';

import CodeWriter from '../commons/CodeWriter';

export default class ModalView extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log(this.basicModal)
        //this.basicModal.show();
    }

    handleClick(key) {
        this[key].show();
    }

	render() {
        const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac massa pulvinar, consequat mi nec, ultricies lacus. Ut eu tempus mauris. Vestibulum venenatis aliquet justo in fermentum. In nec justo elit. Nam congue, leo ut lacinia volutpat, ipsum est consectetur nisl, ac interdum orci arcu sit amet sem. Maecenas erat ligula, aliquet a ex sit amet, vulputate egestas enim. Mauris bibendum odio libero, sit amet facilisis dolor dapibus vel. Duis porttitor, sapien ac malesuada placerat, orci eros vestibulum nisi, non porta lacus nulla vitae ipsum. Sed euismod, nisl vitae faucibus iaculis, neque metus fermentum tortor, at porta purus elit ut mi.'

		return (
			<div>
				<Header size={2} text="Modal" />
				<Header size={3} text="Default" />
				
                <Modal header="Modal" closable={true} ref={(ref) => {this.modal = ref}}>
                    <Content>{lorem}</Content>
                    <Actions>
                        <Button text="HelloWorld" />
                        <Button text="HelloWorld2" />
                    </Actions>
                </Modal>

                <CodeWriter lang="xml">{
                    '<Modal header="Modal" closable={true}>\n' +
                    '  <Content>{lorem}</Content>\n' +
                    '  <Actions>\n' +
                    '    <Button text="HelloWorld" />\n' +
                    '    <Button text="HelloWorld2" />\n' +
                    '  </Actions>\n' +
                    '</Modal>\n'
                }</CodeWriter>

                <Button
                    text="Popup"
                    onClick={() => this.handleClick("modal")}/>

                <Header size={3} text="Default2" />
				
                <Modal header={ {header: 'Icon Modal', icon: 'archive'} } closable={true} ref={(ref) => {this.modal2 = ref}}>
                    <Content>{lorem}</Content>
                    <Actions>
                        <Button text="HelloWorld" />
                        <Button text="HelloWorld2" />
                    </Actions>
                </Modal>

                <Button
                    text="Popup"
                    onClick={() => this.handleClick("modal2")}/>


                <Header size={3} text="Basic2" />
				
                <Modal header="Basic Modal" basic={true} ref={(ref) => {this.basic = ref}}>
                    <Content>{lorem}</Content>
                    <Actions>
                        <Button text="HelloWorld" basic={true} inverted={true} colored="red" />
                        <Button text="HelloWorld2" basic={true} inverted={true} colored="green" />
                    </Actions>
                </Modal>

                <Button
                    text="Popup"
                    onClick={() => this.handleClick("basic")}/>

                <Header size={3} text="Basic Icon" />

                <Modal header={ {header: 'Basic Icon Modal', icon:'archive'} }
                    basic={true} 
                    ref={(ref) => {this.basic2 = ref}}>
                    <Content>{lorem}</Content>
                    <Actions>
                        <Button text="HelloWorld" basic={true} inverted={true} colored="green" />
                    </Actions>
                </Modal>

                <Button
                    text="Popup"
                    onClick={() => this.handleClick("basic2")}/>

                <Header size={3} text="Full screen" />

                <Modal header="Update Your Settings"
                    fullscreen={true} 
                    closable={true}
                    ref={(ref) => {this.fullscreen = ref}}>
                    <Content>{lorem}</Content>
                    <Actions>
                        <Button text="HelloWorld" />
                    </Actions>
                </Modal>

                <Button
                    text="Popup"
                    onClick={() => this.handleClick("fullscreen")}/>

				<Divider />
			</div>		
		);
	}
}