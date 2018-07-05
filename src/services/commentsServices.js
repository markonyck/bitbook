import { commentsEndpoint, requestsHeader, newCommentEndpoint } from '../shared/constants';
import { get, post } from './APIService';


class CommentsServices {

    fetchComments(postId) {
        return get(`${commentsEndpoint}${postId}`)
          
    }
    
    addComment(data) {
        return post(`${newCommentEndpoint}`, data)
    }
}

export const commentsServices = new CommentsServices;