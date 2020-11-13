import React from 'react'
// import TextInput from './TextInput'
import '../styles/Comment.css'

export default ({ props }) => {
    return (
        <div className="comments">
            <form>
                Enter Comment:
                <br />
                <textarea name="comment">
                    Post Ideas
                </textarea>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}