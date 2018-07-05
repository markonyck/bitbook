import { textPostEndpoint, imagePostEndpoint, videoPostEndpoint } from "../shared/constants";
import { postEndpoint, requestsHeader, commentsEndpoint, baseEndpoint } from '../shared/constants';
import { Post } from '../entities/Post';
import { get, deleteData, getHeaders} from './APIService';
import { TextPost, VideoPost, ImagePost } from '../entities/Post';
import { validationService } from './validationService'

class PostsServices {

    fetchPosts() {
        return get(postEndpoint)
            .then(postList => {
                return postList.filter(post => {
                    if (post.videoUrl) {
                        return post.videoUrl.includes("youtube")
                    }
                    return true
                })
            })
            .then(myPostList => {
                return myPostList.map(post => {
                    switch (post.type) {
                        case 'text':
                            return new TextPost(post.id, post.date, post.userId, post.userDisplayName, post.type, post.commentsNum, post.text)
                        case 'image':
                            return new ImagePost(post.id, post.date, post.userId, post.userDisplayName, post.type, post.commentsNum, post.imageUrl)
                        case 'video':
                            return new VideoPost(post.id, post.date, post.userId, post.userDisplayName, post.type, post.commentsNum, post.videoUrl)      
                    }
                })
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong, try again later.')
            })
    }


    typeUrl = (type) => {
        let url = ''
        switch (type) {
            case 'text':
                return url = `${baseEndpoint}/TextPosts/`;
            case 'image':
                return url = `${baseEndpoint}/ImagePosts/`;
            case 'video':
                return url = `${baseEndpoint}/VideoPosts/`;
            default:
                return '...'
        }
        return url;

    }

    fetchSinglePost(type, singlePostId) {

        const urlEndpoint = (`${this.typeUrl(type)}${singlePostId}`);
        return get(urlEndpoint)

    }

    chooseEndpoint = (postBodyType) => {
        let makePostEndpoint = "";
        if (postBodyType === "text") {
            makePostEndpoint = textPostEndpoint
        } else if (postBodyType === "imageUrl") {
            makePostEndpoint = imagePostEndpoint
        } else if (postBodyType === "videoUrl") {
            makePostEndpoint = videoPostEndpoint
        }
        return makePostEndpoint;
    };

    createNewPost = (newPost, postBodyType) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: getHeaders()
        }
        return fetch(this.chooseEndpoint(postBodyType), requestOptions)
    };

    deleteSinglePost = (singlePostId) => {

        const urlEndpoint = (`${postEndpoint}/${singlePostId}`);
        return deleteData(urlEndpoint)

    }

};

export const postsServices = new PostsServices;
