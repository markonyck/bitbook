import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import feedPage from "../../../css/feedPage.css";


export const ImagePost = (props) => {

    const { type, id, imageUrl, commentsNum } = props.post

    return (
        <Link to={`/post/${type}/${id}`} className='post-color'>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <img src={imageUrl} alt='img' />
                        </div>
                        <div className="card-action">
                            <span className=" col s6 offset s2 ">Image Post </span>
                            {commentsNum === 0 ? "0" : commentsNum} comments
                         </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
