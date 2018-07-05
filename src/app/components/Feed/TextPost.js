import React from 'react';
import { Link } from 'react-router-dom';
import feedPage from "../../../css/feedPage.css";


export const TextPost = (props) => {

    const { text, type, id, commentsNum } = props.post

    return (
        <Link to={`/post/${type}/${id}`} className='post-color'>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-text">
                            <p>{text}</p>
                        </div>
                        <div className="card-action">
                            <span className=" col s6 offset s2">Text Post </span>
                            {commentsNum === 0 ? "0" : commentsNum} comments
                         </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};