import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import TextInput from '../../components/TextInput'
import { __UpdatePost } from '../../services/PostServices'

export default class PopUp extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            stab: ''
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

    handleChange = ({ target }) => {
        this.setState({ stab: target.value })
    }
    handleSubmit = async (e) => {
        // e.preventDefault()
        console.log(this.state)
        console.log(this.props.feed[0]._id)
        try { 
            await __UpdatePost(this.state.stab, this.props.feed[0]._id)
            alert('Stab was been updated')
        } catch (error) {
            throw error 
        }
    }
    render() {
        const { stab } = this.state
        return (
            <section>
                <input type="button-edit" value="Edit" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <form className="stabs" onSubmit={this.handleSubmit}>
                        <TextInput
                            placeholder="Stab"
                            name="Stab"
                            value={stab}
                            onChange={this.handleChange}
                        />
                        <button className="Stab-Button">Stab</button>
                    </form>
                </Modal>
            </section>
        );
    }
}