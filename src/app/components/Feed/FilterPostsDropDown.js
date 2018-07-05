import feedPage from "../../../css/feedPage.css";
import React, { Component } from 'react';
import M from "materialize-css";


export class FilterPostsDropDown extends Component {
    constructor(props) {
        super(props);
        this.select = React.createRef();
    }

    componentDidMount = () => {
        M.FormSelect.init(this.select.current);
    }

    componentWillReceiveProps = () => {
        M.FormSelect.init(this.select.current);
    }
    
    render() {
        return (
            <div className="selectFilteredPosts input-field col s12">
                <select onChange={this.props.filterPosts} value={this.props.selectedPostFilter} ref={this.select} className="#e57373 red lighten-2">
                    <option className="#e57373 red lighten-2" value="allPosts">All Posts</option>
                    <option value="videoUrl">Videos</option>
                    <option value="imageUrl">Images</option>
                    <option value="text">Text</option>
                </select>
            </div>
        )
    };
};
