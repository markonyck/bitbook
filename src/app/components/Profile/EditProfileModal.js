import React, { Component } from 'react';
import App from '../../App.css';
import '../../../css/profilePage.css'
import { usersServices } from '../../../services/usersServices';
import { Form } from './Form';


export const EditProfileModal = (props) => {

    if (!props.showModal) {
        return null;
    }

    return (
        <div className="overlay-modal">
            <div id="modalPost" className="modal open modal-style" style={{ display: 'block', top: 100 }}>
                <div className="modal-content update-modal">
                    <h4>Update Profile</h4>
                    <Form profile={props.profile} updateUserProfile={props.updateUserProfile} handleClose={props.handleClose} />
                </div>
            </div>
        </div>
    );
}


