import React, { Fragment } from 'react';
import { TextPost } from './TextPost';
import { VideoPost } from './VideoPost';
import { ImagePost } from './ImagePost';
import { Loader } from '../../partials/Loader'

import M from "materialize-css"


export const FeedList = (props) => {

    return (
        <Fragment>
            <div className='container'>
                {props.posts.length === 0
                    ? <Loader />
                    : (props.posts.map((post, key) => {

                        switch (post.type) {
                            case 'text':
                                return <TextPost post={post} key={key} />
                            case 'image':
                                return <ImagePost post={post} key={key} />
                            case 'video':
                                return <VideoPost post={post} key={key} />;
                            default:
                                return <p>not valid type of input</p>
                        }
                    }))}
            </div>
        </Fragment>
    );
};