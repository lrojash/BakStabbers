import React from 'react'
import EditPost from './EditPost'
import ReplyPost from './ReplyPost'
import DeletePost from './Delete'
import PopUp from '../PopUp'
import '../../../styles/StabBox.css'

export default ({ feed }) => {
    return (
        <div className="StabBox-Container">
            <PopUp feed={feed} />
            <ReplyPost feed={feed} />
            <DeletePost feed={feed} />
        </div>
    )
}