import React from 'react'
import EditPost from './EditPost'
import ReplyPost from './ReplyPost'
import DeletePost from './Delete'
import '../../../styles/StabBox.css'

export default ({ feed }) => {
    console.log("coming from stabbutton js:", feed)
    return (
        <div className="StabBox-Container">
            <EditPost feed={feed} />
            <ReplyPost feed={feed} />
            <DeletePost feed={feed}Í />
        </div>
    )
}