import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/feedPage.css'


export const VideoPost = (props) => {
    const { videoUrl, type, id, commentsNum } = props.post

    return (
        <Link to={`/post/${type}/${id}`} className='post-color'>
            <div className='video-post'>
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-video video-container">
                                <iframe width='100%' height='300' src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                            <div className="card-action">
                                <span className=' col s6 offset s2'>Video Post </span>
                                {commentsNum === 0 ? "0" : commentsNum} comments
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};