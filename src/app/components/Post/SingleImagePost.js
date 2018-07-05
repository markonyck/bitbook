import React from 'react';
import feedPage from "../../../css/feedPage.css";
import { postsServices } from "../../../services/postsServices"

export const SingleImagePost = (props) => {

    const onDelete = (event) => {
        event.preventDefault();
        postsServices.deleteSinglePost(props.post.id)
            .then(() => props.onDelete());
    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src={props.post.imageUrl} alt='img' />
                    </div>
                    <div className="card-action"></div>
                </div>
                <button className="comment-button" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}