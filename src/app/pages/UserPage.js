import React, { Component, Fragment } from 'react';
import { usersServices } from '../../services/usersServices';
import '../../css/profilePage.css'
import { Loader } from '../partials/Loader';


export class UserPage extends Component {
    constructor(props) {
        super();

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.loadProfile()
    }

    loadProfile = () => {
        usersServices.fetchSingleUser(this.props.match.params.id)
            .then(user => {
                this.setState({
                    user: user
                });
            })
    }

    render() {

        const userInfo = this.state.user;

        if (userInfo === null) {
            return <Loader />
        }
        return (
            <Fragment>
                <div className='container'>
                    <div className='col s12 center'>
                        <div className='row'>
                            {userInfo.avatarUrl === ""
                                ? <img src="http://www.iglax.org/wp-content/uploads/2014/12/placeholder-Copy-11-1.png" className='responsive-img circle img' />
                                : <img src={userInfo.avatarUrl} className='responsive-img circle img' />}
                        </div>
                        <div className='row profile-name'>
                            <h4>{userInfo.name}</h4>
                        </div>
                        <div className='row'>
                            <p className='about-short'>
                                {userInfo.aboutShort}
                            </p>
                        </div>
                        <div className='row'>
                            <div className='col s12 m6'>
                                <button type="button" className="btn btn-light comment-button" ><i className="fas fa-circle"></i> {userInfo.postsCount} Posts</button>
                            </div>
                            <div className='col s12 m6'>
                                <button type="button" className="btn btn-light comment-button"><i className="fas fa-circle"></i> {userInfo.commentsCount} Comments</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

