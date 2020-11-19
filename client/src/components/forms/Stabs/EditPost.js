import React, { Component } from 'react'
import { __UpdatePost } from '../../../services/PostServices'
import PopUp from '../../../components/forms/PopUp'
import '../../../styles/StabBox.css'


export default class EditPost extends Component {
    constructor() {
        super()
        this.state = {
            stab: ''
        }
    }
    render() {
        const { stab } = this.state
        return (
            <div>
                {/* <button className="edit-bt" onClick={this.handleSubmit}>Edit</button> */}
                <PopUp stab={stab} />
            </div >
        )
    }
}