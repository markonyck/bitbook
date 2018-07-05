import React, { Component, Fragment } from 'react';
import { postsServices } from '../../services/postsServices';
import { SingleTextPost } from '../components/Post/SingleTextPost';
import { SingleVideoPost } from '../components/Post/SingleVideoPost';
import { SingleImagePost } from '../components/Post/SingleImagePost';
import { SingleComment } from '../components/Post/SingleComment';
import { commentsServices } from '../../services/commentsServices';
import { usersServices } from '../../services/usersServices';
import postPage from '../../css/postPage.css'
import {Loader} from '../partials/Loader';



export class PostPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: null,
            comments: [],
            inputValue: "",
        }
    }

    componentDidMount() {
        this.loadSinglePost(this.props.match.params.type, this.props.match.params.id);
        this.loadComments(this.props.match.params.id);
        this.setState({
            postId: this.props.match.params.id
        })   
    }

    loadSinglePost = (type, postId) => {
        postsServices.fetchSinglePost(type, postId)
            .then(post => {
                this.setState({ post }); 
            });
        }
        
        loadComments = (commentId) => {
            commentsServices.fetchComments(commentId)
            .then(comments => {
                this.setState({
                    comments: comments
                })
            })
    }

    displayPost = () => {
        switch (this.state.post.type) {
            case 'text':
                return <SingleTextPost post={this.state.post} onDelete={this.onSuccessfulDelete}  />
            case 'image':
                return <SingleImagePost post={this.state.post} onDelete={this.onSuccessfulDelete} />
            case 'video':
                return <SingleVideoPost post={this.state.post} onDelete={this.onSuccessfulDelete}  />
            default:
                return <p>Invalid type of input</p>
        }
    }

    onSuccessfulDelete = () => {
        this.props.history.push("/feed");
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            inputValue: event.target.value
        });
    }

    loadNewComment = (event) => {
        const comment = {
            body: this.state.inputValue,
            postId: this.state.post.id,
        }

        if (this.state.inputValue === "") {
            event.preventDefault();

        } else {
            commentsServices.addComment(comment)
                .then((response) => {
                    return response.json()
                })
                .then(newPost => {
                    this.loadComments(this.props.match.params.id)
                    this.setState({
                        inputValue: ''
                    });
                })
        }
    }






    render() {

        if (!this.state.comments) {
            return <Loader />
        }
        return (
            <Fragment>
                <div className="container">
                    {this.state.post === null ? "" : this.displayPost()}
                    <br />
                    <div className="row">
                        <div className="input-field">
                            <input type="text" id="autocomplete-input" className="autocomplete col s11" placeholder='Add your comment' onChange={this.handleChange} value={this.state.inputValue} />
                            <label htmlFor="autocomplete-input" ></label>
                            <div className='col s1'>
                                <button className="btn waves-effect waves-light comment-button" type="submit" disabled={!this.state.inputValue} name="action" onClick={this.loadNewComment}>SEND</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ul className="collection">

                            {this.state.comments.map((comment, key) => {
                                return <SingleComment comment={comment} key={key} />
                            })}

                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }


}