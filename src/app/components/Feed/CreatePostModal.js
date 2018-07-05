import React, { Component, Fragment } from 'react';
import M from "materialize-css";
import { validationService } from '../../../services/validationService';
import '../../../css/profilePage.css'


export class CreatePostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            //hideValidateMessage: "hideValidateMessage",
            error: null
        }
    }

    closeOnX = (event) => {
        this.props.handleClose()
        this.setState({
            inputValue: "",
            //hideValidateMessage: "hideValidateMessage",
            error: null
        })
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value,
            error: null

        });

        // this.setState({ error: null });

        const valObj = validationService.validatePost(event.target.value, this.props.newPostType)

        if (valObj.error) {
            this.setState({ error: valObj.error });
            return;
        }
    };

    onCreate = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state.inputValue);
        this.setState({ inputValue: "" });
    }

    renderTextForm = () => {
        return (
            <Fragment>
                <h4>New  Post</h4>
                <p>Post content</p>
                <input id="post" type="text" name="newPost" className="validate" value={this.state.inputValue}
                    onChange={this.handleChange} />
            </Fragment>
        )
    }

    renderImageForm = () => {
        return (
            <Fragment>
                <h4>New Image Post</h4>
                <p>Image link</p>
                <input id="image" type="text" name="newImage" className="validate" value={this.state.inputValue}
                    onChange={this.handleChange} />
            </Fragment>
        )
    }

    renderVideoForm = () => {
        return (
            <Fragment>
                <h4>New Video Post</h4>
                <p>YouTube video link</p>
                <input id="image" type="text" name="newVideo" className="validate" value={this.state.inputValue}
                    onChange={this.handleChange} />
            </Fragment>
        )
    }

    render() {
        const { error } = this.state;

        if (!this.props.newPostType) {
            return null;
        }
        return (
            <div className="overlay">
                <div id="modalPost" className="modal open" style={{ display: 'block', top: 150 }}>
                    <div className="modal-content">
                        <i className="material-icons right modal-close" onClick={this.closeOnX} >close</i>

                        {this.props.newPostType === 'text' && this.renderTextForm()}
                        {this.props.newPostType === 'videoUrl' && this.renderVideoForm()}
                        {this.props.newPostType === 'imageUrl' && this.renderImageForm()}

                        {error && <p>{error}</p>}

                    </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat comment-button" disabled={this.state.error || !this.state.inputValue} onClick={this.onCreate}>POST</a>
                        </div>
                </div>
            </div>
        )
    }
};
