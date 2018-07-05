import App from "../../App.css"
import React, { Component } from 'react';
import M from "materialize-css";

export class CreatePostButton extends Component {
    constructor(props) {
        super(props);
        this.floatingButtons = React.createRef();
    }


    componentDidMount = () => {
        M.FloatingActionButton.init(this.floatingButtons.current);
    }

    render = () => (
        <div className="fixed-action-btn" ref={this.floatingButtons}>
            <a className="btn-floating btn-large red">
                <i className="material-icons">add</i>
            </a>
            <ul>
                <li><button data-target="modalPost" onClick={this.props.handlerPostType} className="btn-floating"><i className="material-icons #4fc3f7 light-blue lighten-2  modal-trigger">short_text</i></button ></li>
                <li><button data-target="modalImage" onClick={this.props.handlerPostType} className="btn-floating"><i className="material-icons #1de9b6 teal accent-3 modal-trigger">insert_photo</i></button ></li>
                <li><button data-target="modalVideo" onClick={this.props.handlerPostType} className="btn-floating"><i className="material-icons #dd2c00 deep-orange accent-4 modal-trigger">video_library</i></button ></li>
            </ul>
        </div>

    )
}

