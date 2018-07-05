import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

export const SingleUser = (props) => {

    return (
        <li className="collection-item avatar">
            <img src={props.myUser.avatarUrl} alt="" className="circle" />
            <Link to={`/users/${props.myUser.userId}`} >
                <p>{props.myUser.name}</p></Link><br />
                <p>{props.myUser.aboutShort}
                <span className="right">{props.myUser.getTimeForLastPostDate()}</span>
            </p>
        </li>
    )
}

SingleUser.propTypes = {
    myUser: PropTypes.object.isRequired
}