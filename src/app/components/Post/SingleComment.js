import React, { Fragment, Component } from 'react';
import '../../../css/singleComment.css'
import { usersServices } from '../../../services/usersServices';

export class SingleComment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

    loadSingleUser = () => {
        usersServices.fetchSingleUser(this.props.comment.authorId)
            .then(user => {
                this.setState({
                    user: user
                })
            })
    }

    componentDidMount() {
        this.loadSingleUser()
    }

    showDate1 = (input) => {
        const date = new Date(input);
        const newDate = `posted at: ${date.getHours()}:${date.getMinutes()}h`;
        return newDate;
    }

    render() {

        return (
            <li className="collection-item avatar">
                <div className="col s2">
                    <div className="col s12">
                        <img src={this.state.user.avatarUrl} alt="user-img" className="circle responsive-img avatar-img" />
                    </div>
                    <div className="col s12">{this.state.user.name}</div>
                </div>
                <div className="col s8">
                    <p>{this.props.comment.body}</p>
                </div>
                <div className="col s2">
                    <p className="right">{this.showDate1(this.props.comment.dateCreated)}</p>
                </div>
            </li>
        );
    }
};






