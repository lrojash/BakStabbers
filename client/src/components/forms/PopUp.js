import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import EditPost from './Stabs/EditPost'
import TextInput from '../../components/TextInput'


export default class PopUp extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
        }
    }

    openModal() {
        this.setState({
            visible: true,
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {

        return (
            <section>
                <button className="edit-bt" onClick={() => this.openModal()}>Edit</button>
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    {/* <EditPost /> */}
                </Modal>
            </section>
        );
    }
}   