import React from 'react';
import { postsServices } from "../../../services/postsServices"

export const SingleTextPost = (props) => {

    const onDelete = (event) => {
        event.preventDefault();
        postsServices.deleteSinglePost(props.post.id)
            .then(() => props.onDelete());
    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-text">
                        <p>{props.post.text}</p>
                    </div>
                    <div className="card-action"></div>
                </div>
            </div>
            <button className="comment-button" onClick={onDelete}>Delete</button>
        </div>
    );
}